'use client';

import { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import { TasksByQuadrant } from '@/types';
import { QUADRANTS } from '@/constants';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface StatisticsModalProps {
  isOpen: boolean;
  onClose: () => void;
  tasks: TasksByQuadrant;
}

export function StatisticsModal({ isOpen, onClose, tasks }: StatisticsModalProps) {
  const [view, setView] = useState<'chart' | 'list'>('chart');

  if (!isOpen) return null;

  // Calculate statistics
  const quadrantKeys = QUADRANTS.map((q) => q.id);
  const taskCounts = quadrantKeys.map((key) => tasks[key].length);
  const completedCounts = quadrantKeys.map((key) =>
    tasks[key].filter((t) => t.completed).length
  );
  const pendingCounts = quadrantKeys.map((key) =>
    tasks[key].filter((t) => !t.completed).length
  );

  const totalTasks = taskCounts.reduce((a, b) => a + b, 0);
  const totalCompleted = completedCounts.reduce((a, b) => a + b, 0);
  const totalPending = totalTasks - totalCompleted;
  const completionRate = totalTasks > 0 ? Math.round((totalCompleted / totalTasks) * 100) : 0;

  const pieData = {
    labels: QUADRANTS.map((q) => q.title),
    datasets: [
      {
        data: taskCounts,
        backgroundColor: QUADRANTS.map((q) => q.color),
        borderColor: '#383838',
        borderWidth: 2,
      },
    ],
  };

  const barData = {
    labels: QUADRANTS.map((q) => q.title),
    datasets: [
      {
        label: 'Completed',
        data: completedCounts,
        backgroundColor: '#4DD4D0',
        borderColor: '#383838',
        borderWidth: 2,
      },
      {
        label: 'Pending',
        data: pendingCounts,
        backgroundColor: '#FFD500',
        borderColor: '#383838',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          font: {
            family: 'Inter',
            size: 12,
            weight: 'bold' as const,
          },
          padding: 15,
          boxWidth: 15,
          boxHeight: 15,
        },
      },
      tooltip: {
        backgroundColor: '#383838',
        titleFont: {
          family: 'Inter',
          size: 14,
          weight: 'bold' as const,
        },
        bodyFont: {
          family: 'Inter',
          size: 13,
        },
        padding: 12,
        cornerRadius: 4,
      },
    },
  };

  const barOptions = {
    ...chartOptions,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          font: {
            family: 'Inter',
            size: 12,
          },
        },
        grid: {
          color: '#E0E0E0',
        },
      },
      x: {
        ticks: {
          font: {
            family: 'Inter',
            size: 12,
            weight: 'bold' as const,
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="fixed inset-0 bg-[#383838]/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white border-2 border-[#383838] max-w-6xl w-full my-8 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8 pb-4 sm:pb-6 sticky top-0 bg-white z-10 border-b-2 border-[#383838]">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">TASK STATISTICS</h2>
          <button
            onClick={onClose}
            className="text-[#383838] hover:opacity-70 text-2xl sm:text-3xl font-bold shrink-0"
          >
            ×
          </button>
        </div>
        <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">

        {/* View Toggle */}
        <div className="flex gap-2 sm:gap-3 mb-6 sm:mb-8 mt-2">
          <button
            onClick={() => setView('chart')}
            className={`${
              view === 'chart' ? 'btn-blue' : 'btn-white'
            } flex-1 sm:flex-initial px-4 sm:px-6 py-2 sm:py-3 rounded-none font-bold text-xs sm:text-sm uppercase`}
          >
            📊 CHART
          </button>
          <button
            onClick={() => setView('list')}
            className={`${
              view === 'list' ? 'btn-blue' : 'btn-white'
            } flex-1 sm:flex-initial px-4 sm:px-6 py-2 sm:py-3 rounded-none font-bold text-xs sm:text-sm uppercase`}
          >
            📋 LIST
          </button>
        </div>

        {/* Chart View */}
        {view === 'chart' && (
          <div className="space-y-6 sm:space-y-8">
            {/* Overview Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-[#F4EFEA] border-2 border-[#383838] rounded p-3 sm:p-4 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#383838]">{totalTasks}</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Total Tasks</div>
              </div>
              <div className="bg-[#F4EFEA] border-2 border-[#383838] rounded p-3 sm:p-4 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4DD4D0]">{totalCompleted}</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Completed</div>
              </div>
              <div className="bg-[#F4EFEA] border-2 border-[#383838] rounded p-3 sm:p-4 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFD500]">{totalPending}</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Pending</div>
              </div>
              <div className="bg-[#F4EFEA] border-2 border-[#383838] rounded p-3 sm:p-4 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#6FC2FF]">{completionRate}%</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Completion Rate</div>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white border-2 border-[#383838] rounded p-4 sm:p-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold tracking-tight mb-3 sm:mb-4">TASKS BY QUADRANT</h3>
                <div className="relative" style={{ height: '250px' }}>
                  <Doughnut data={pieData} options={chartOptions} />
                </div>
              </div>

              <div className="bg-white border-2 border-[#383838] rounded p-4 sm:p-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold tracking-tight mb-3 sm:mb-4">COMPLETION STATUS</h3>
                <div className="relative" style={{ height: '250px' }}>
                  <Bar data={barData} options={barOptions} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* List View */}
        {view === 'list' && (
          <div className="space-y-4 sm:space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {QUADRANTS.map((quadrant, index) => {
                const total = tasks[quadrant.id].length;
                const completed = tasks[quadrant.id].filter((t) => t.completed).length;
                const pending = total - completed;

                return (
                  <div key={quadrant.id} className="bg-white border-2 border-[#383838] rounded p-4 sm:p-6">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div
                        className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-[#383838] shrink-0"
                        style={{ backgroundColor: quadrant.color }}
                      />
                      <h3 className="text-base sm:text-lg font-bold">{quadrant.title}</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-gray-600">Total:</span>
                        <span className="font-semibold">{total}</span>
                      </div>
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-gray-600">Completed:</span>
                        <span className="font-semibold text-[#4DD4D0]">{completed}</span>
                      </div>
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-gray-600">Pending:</span>
                        <span className="font-semibold text-[#FFD500]">{pending}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Detailed Task List */}
            <div className="bg-white border-2 border-[#383838] rounded p-4 sm:p-6">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold tracking-tight mb-3 sm:mb-4">ALL TASKS DETAIL</h3>
              <div className="space-y-3">
                {QUADRANTS.map((quadrant) => {
                  const quadrantTasks = tasks[quadrant.id];
                  if (quadrantTasks.length === 0) return null;

                  return (
                    <div key={quadrant.id} className="mb-4 sm:mb-6">
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <div
                          className="w-2 h-2 sm:w-3 sm:h-3 border-2 border-[#383838] shrink-0"
                          style={{ backgroundColor: quadrant.color }}
                        />
                        <h4 className="font-bold text-xs sm:text-sm">{quadrant.title}</h4>
                      </div>
                      <div className="space-y-1 sm:space-y-2">
                        {quadrantTasks.map((task) => (
                          <div
                            key={task.id}
                            className="flex items-start gap-2 text-xs sm:text-sm border-l-2 pl-2 sm:pl-3"
                            style={{ borderColor: quadrant.color }}
                          >
                            <span className={`flex-1 ${task.completed ? 'line-through opacity-60' : ''}`}>
                              {task.text}
                            </span>
                            <span
                              className={`shrink-0 ${
                                task.completed ? 'text-[#4DD4D0]' : 'text-[#FFD500]'
                              } font-semibold text-[10px] sm:text-xs whitespace-nowrap`}
                            >
                              {task.completed ? '✓ DONE' : '⏳ PENDING'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
                {totalTasks === 0 && (
                  <p className="text-gray-500 text-center py-6 sm:py-8 text-xs sm:text-sm">No tasks to display</p>
                )}
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
