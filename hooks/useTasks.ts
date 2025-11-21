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
    // Load initial data
    const loadFromStorage = () => {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        setTasks(DEMO_TASKS);
        return;
      }

      try {
        const parsed = JSON.parse(saved);
        setTasks(parsed);
      } catch {
        setTasks(DEMO_TASKS);
      }
    };

    loadFromStorage();
    setIsInitialized(true);
  }, []);

  // Listen for storage changes from other tabs
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      // Early return for irrelevant changes
      if (e.key !== STORAGE_KEY) return;
      if (!e.newValue) return;

      try {
        const parsed = JSON.parse(e.newValue);
        setTasks(parsed);
      } catch (error) {
        console.error('Failed to sync tasks from storage:', error);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
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
      [quadrant]: [newTask, ...prev[quadrant]], // 插入到数组开头
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

  const editTask = (quadrant: QuadrantType, taskId: number, newText: string) => {
    if (!newText.trim()) return;

    setTasks((prev) => ({
      ...prev,
      [quadrant]: prev[quadrant].map((task) =>
        task.id === taskId ? { ...task, text: newText.trim() } : task
      ),
    }));
  };

  const moveTask = (
    fromQuadrant: QuadrantType,
    toQuadrant: QuadrantType,
    taskId: number,
    targetIndex?: number
  ) => {
    setTasks((prev) => {
      const taskIndex = prev[fromQuadrant].findIndex((t) => t.id === taskId);
      if (taskIndex === -1) return prev;

      const task = prev[fromQuadrant][taskIndex];
      const newFromQuadrant = [...prev[fromQuadrant]];
      newFromQuadrant.splice(taskIndex, 1);

      // If moving within the same quadrant (reordering)
      if (fromQuadrant === toQuadrant) {
        // Calculate the new index after removal
        const insertIndex = targetIndex !== undefined
          ? (targetIndex > taskIndex ? targetIndex - 1 : targetIndex)
          : newFromQuadrant.length;

        newFromQuadrant.splice(insertIndex, 0, task);
        return {
          ...prev,
          [fromQuadrant]: newFromQuadrant,
        };
      }

      // Moving to a different quadrant
      const newToQuadrant = [...prev[toQuadrant]];
      const insertIndex = targetIndex !== undefined ? targetIndex : newToQuadrant.length;
      newToQuadrant.splice(insertIndex, 0, task);

      return {
        ...prev,
        [fromQuadrant]: newFromQuadrant,
        [toQuadrant]: newToQuadrant,
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
    editTask,
    moveTask,
    clearAllTasks,
  };
}
