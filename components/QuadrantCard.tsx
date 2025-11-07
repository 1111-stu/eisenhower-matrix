'use client';

import { Task, QuadrantType } from '@/types';
import { TaskItem } from './TaskItem';

interface QuadrantCardProps {
  config: {
    id: QuadrantType;
    title: string;
    subtitle: string;
    color: string;
  };
  tasks: Task[];
  onAddTask: () => void;
  onToggleTask: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
  onDragStart: (taskId: number) => void;
  onDragEnd: () => void;
  onDragOver: (e: React.DragEvent) => void;
  onDragEnter: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
}

export function QuadrantCard({
  config,
  tasks,
  onAddTask,
  onToggleTask,
  onDeleteTask,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDragEnter,
  onDragLeave,
  onDrop,
}: QuadrantCardProps) {
  return (
    <div className="bg-white border-2 border-[#383838] rounded p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
            <div
              className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-[#383838] shrink-0"
              style={{ backgroundColor: config.color }}
            />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight truncate">{config.title}</h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">{config.subtitle}</p>
        </div>
        <button
          onClick={onAddTask}
          className="px-3 sm:px-4 py-2 rounded-none font-bold text-xs uppercase ml-2 shrink-0 border-2 border-[#383838] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
          style={{
            backgroundColor: config.color,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '4px 4px 0px 0px #383838';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          + ADD
        </button>
      </div>

      <div
        id={`quadrant-${config.id}`}
        className="drop-zone space-y-2 sm:space-y-3"
        data-quadrant={config.id}
        onDragOver={onDragOver}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {tasks.length === 0 ? (
          <div className="empty-state text-center py-8 sm:py-12">
            <p className="text-gray-600 text-xs sm:text-sm">
              No tasks yet. Click &quot;+ ADD&quot; to create one.
            </p>
          </div>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              quadrant={config.id}
              onToggle={() => onToggleTask(task.id)}
              onDelete={() => onDeleteTask(task.id)}
              onDragStart={() => onDragStart(task.id)}
              onDragEnd={onDragEnd}
            />
          ))
        )}
      </div>
    </div>
  );
}
