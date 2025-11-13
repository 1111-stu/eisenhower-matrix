'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { QuadrantCard } from '@/components/QuadrantCard';
import { AddTaskModal } from '@/components/AddTaskModal';
import { StatisticsModal } from '@/components/StatisticsModal';
import { useTasks } from '@/hooks/useTasks';
import { QUADRANTS } from '@/constants';
import { QuadrantType } from '@/types';

export default function Home() {
  const { tasks, addTask, deleteTask, toggleTask, editTask, moveTask, clearAllTasks } = useTasks();
  const [currentQuadrant, setCurrentQuadrant] = useState<QuadrantType | null>(null);
  const [draggedTaskId, setDraggedTaskId] = useState<number | null>(null);
  const [draggedFromQuadrant, setDraggedFromQuadrant] = useState<QuadrantType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStatisticsOpen, setIsStatisticsOpen] = useState(false);

  const handleAddTask = (quadrant: QuadrantType) => {
    setCurrentQuadrant(quadrant);
    setIsModalOpen(true);
  };

  const handleSubmitTask = (text: string) => {
    if (!currentQuadrant) return;
    addTask(currentQuadrant, text);
  };

  const handleClearAll = () => {
    if (confirm('Are you sure you want to clear ALL tasks? This cannot be undone.')) {
      clearAllTasks();
    }
  };

  const handleDeleteTask = (quadrant: QuadrantType, taskId: number) => {
    if (confirm('Are you sure you want to delete this task?')) {
      deleteTask(quadrant, taskId);
    }
  };

  const handleEditTask = (quadrant: QuadrantType, taskId: number, newText: string) => {
    editTask(quadrant, taskId, newText);
  };

  // Drag and drop handlers
  const handleDragStart = (quadrant: QuadrantType, taskId: number) => {
    setDraggedTaskId(taskId);
    setDraggedFromQuadrant(quadrant);
  };

  const handleDragEnd = () => {
    setDraggedTaskId(null);
    setDraggedFromQuadrant(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDragEnter = (e: React.DragEvent) => {
    const target = e.currentTarget;
    if (target.classList.contains('drop-zone')) {
      target.classList.add('drag-over');
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    const target = e.currentTarget;
    if (target.classList.contains('drop-zone')) {
      target.classList.remove('drag-over');
    }
  };

  const handleDrop = (e: React.DragEvent, targetQuadrant: QuadrantType) => {
    e.preventDefault();

    const target = e.currentTarget;
    if (target.classList.contains('drop-zone')) {
      target.classList.remove('drag-over');
    }

    if (!draggedTaskId || !draggedFromQuadrant) return;
    if (draggedFromQuadrant === targetQuadrant) return;

    moveTask(draggedFromQuadrant, targetQuadrant, draggedTaskId);
  };

  // Calculate statistics for bottom cards
  const getQuadrantCount = (quadrant: QuadrantType) => tasks[quadrant].length;

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onClearAll={handleClearAll}
        onShowStatistics={() => setIsStatisticsOpen(true)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12 flex-1 w-full">
        {/* Quadrant Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {QUADRANTS.map((quadrant) => (
            <QuadrantCard
              key={quadrant.id}
              config={quadrant}
              tasks={tasks[quadrant.id]}
              onAddTask={() => handleAddTask(quadrant.id)}
              onToggleTask={(taskId) => toggleTask(quadrant.id, taskId)}
              onDeleteTask={(taskId) => handleDeleteTask(quadrant.id, taskId)}
              onEditTask={(taskId, newText) => handleEditTask(quadrant.id, taskId, newText)}
              onDragStart={(taskId) => handleDragStart(quadrant.id, taskId)}
              onDragEnd={handleDragEnd}
              onDragOver={handleDragOver}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, quadrant.id)}
            />
          ))}
        </div>

        {/* Statistics Cards */}
        <div className="mt-6 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {QUADRANTS.map((quadrant) => (
            <div
              key={quadrant.id}
              className="bg-white border-2 border-[#383838] rounded p-3 sm:p-4 text-center"
            >
              <div
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: quadrant.color }}
              >
                {getQuadrantCount(quadrant.id)}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">{quadrant.title}</div>
            </div>
          ))}
        </div>
      </main>

      <Footer />

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitTask}
      />

      <StatisticsModal
        isOpen={isStatisticsOpen}
        onClose={() => setIsStatisticsOpen(false)}
        tasks={tasks}
      />
    </div>
  );
}
