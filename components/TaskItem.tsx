'use client';

import { Task, QuadrantType } from '@/types';

interface TaskItemProps {
  task: Task;
  quadrant: QuadrantType;
  onToggle: () => void;
  onDelete: () => void;
  onDragStart: (e: React.DragEvent) => void;
  onDragEnd: (e: React.DragEvent) => void;
}

export function TaskItem({
  task,
  quadrant,
  onToggle,
  onDelete,
  onDragStart,
  onDragEnd,
}: TaskItemProps) {
  return (
    <div
      className={`task-item quadrant-${quadrant} flex items-start gap-2 sm:gap-3 border-2 border-[#383838] p-3 sm:p-4 cursor-move ${
        task.completed ? 'completed' : ''
      }`}
      draggable="true"
      data-task-id={task.id}
      data-quadrant={quadrant}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <input
        type="checkbox"
        className="custom-checkbox mt-0.5"
        checked={task.completed}
        onChange={onToggle}
      />
      <p className="task-text flex-1 text-xs sm:text-sm font-medium leading-relaxed break-words">
        {task.text}
      </p>
      <button
        onClick={onDelete}
        className="text-[#FF6B6B] hover:text-[#FF4545] font-bold text-lg transition-colors shrink-0"
        title="Delete task"
      >
        ×
      </button>
    </div>
  );
}
