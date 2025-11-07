'use client';

import { useState, useEffect } from 'react';
import { TasksByQuadrant, QuadrantType, Task } from '@/types';
import { DEMO_TASKS } from '@/constants';

const STORAGE_KEY = 'quadrant-tasks';

export function useTasks() {
  const [tasks, setTasks] = useState<TasksByQuadrant>({
    'urgent-important': [],
    'not-urgent-important': [],
    'urgent-not-important': [],
    'not-urgent-not-important': [],
  });
  const [isInitialized, setIsInitialized] = useState(false);

  // Load tasks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setTasks(parsed);
      } catch {
        setTasks(DEMO_TASKS);
      }
    } else {
      setTasks(DEMO_TASKS);
    }
    setIsInitialized(true);
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    if (!isInitialized) return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks, isInitialized]);

  const addTask = (quadrant: QuadrantType, text: string) => {
    if (!text.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    };

    setTasks((prev) => ({
      ...prev,
      [quadrant]: [...prev[quadrant], newTask],
    }));
  };

  const deleteTask = (quadrant: QuadrantType, taskId: number) => {
    setTasks((prev) => ({
      ...prev,
      [quadrant]: prev[quadrant].filter((task) => task.id !== taskId),
    }));
  };

  const toggleTask = (quadrant: QuadrantType, taskId: number) => {
    setTasks((prev) => ({
      ...prev,
      [quadrant]: prev[quadrant].map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  const moveTask = (
    fromQuadrant: QuadrantType,
    toQuadrant: QuadrantType,
    taskId: number
  ) => {
    if (fromQuadrant === toQuadrant) return;

    setTasks((prev) => {
      const taskIndex = prev[fromQuadrant].findIndex((t) => t.id === taskId);
      if (taskIndex === -1) return prev;

      const task = prev[fromQuadrant][taskIndex];
      const newFromQuadrant = [...prev[fromQuadrant]];
      newFromQuadrant.splice(taskIndex, 1);

      return {
        ...prev,
        [fromQuadrant]: newFromQuadrant,
        [toQuadrant]: [...prev[toQuadrant], task],
      };
    });
  };

  const clearAllTasks = () => {
    setTasks({
      'urgent-important': [],
      'not-urgent-important': [],
      'urgent-not-important': [],
      'not-urgent-not-important': [],
    });
  };

  return {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
    moveTask,
    clearAllTasks,
  };
}
