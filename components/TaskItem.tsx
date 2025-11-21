'use client';

import { useState } from 'react';
import { Task, QuadrantType } from '@/types';
import { QUADRANTS } from '@/constants';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface TaskItemProps {
  id?: string;
  task: Task;
  quadrant: QuadrantType;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: (newText: string) => void;
  isDragOverlay?: boolean;
}

export function TaskItem({
  id,
  task,
  quadrant,
  onToggle,
  onDelete,
  onEdit,
  isDragOverlay = false,
}: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id || `${quadrant}-${task.id}`,
    disabled: isEditing || isDragOverlay,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  // Get quadrant color
  const quadrantConfig = QUADRANTS.find(q => q.id === quadrant);
  const quadrantColor = quadrantConfig?.color || '#6FC2FF';

  const handleSave = () => {
    if (editText.trim() && editText !== task.text) {
      onEdit(editText.trim());
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(task.text);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  // If it's a drag overlay, render a simpler version
  if (isDragOverlay) {
    return (
      <div
        className={`task-item quadrant-${quadrant} flex items-start gap-2 sm:gap-3 border-2 border-[#383838] p-3 sm:p-4 bg-white shadow-lg ${
          task.completed ? 'completed' : ''
        }`}
        style={{
          borderLeftColor: quadrantColor,
          borderLeftWidth: '4px',
        }}
      >
        <input
          type="checkbox"
          className="custom-checkbox mt-0.5"
          checked={task.completed}
          disabled
        />
        <p className="task-text flex-1 text-xs sm:text-sm font-medium leading-relaxed">
          {task.text}
        </p>
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`task-item quadrant-${quadrant} flex items-start gap-2 sm:gap-3 border-2 border-[#383838] p-3 sm:p-4 bg-white ${
        task.completed ? 'completed' : ''
      } ${isEditing ? 'cursor-default editing' : 'cursor-move'} ${
        isDragging ? 'z-50' : ''
      } transition-colors hover:bg-gray-50`}
      {...attributes}
      {...(isEditing ? {} : listeners)}
    >
      <input
        type="checkbox"
        className="custom-checkbox mt-0.5"
        checked={task.completed}
        onChange={onToggle}
        disabled={isEditing}
      />

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleSave}
          className="flex-1 text-xs sm:text-sm font-medium leading-relaxed border border-[#383838] px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          style={{ borderColor: quadrantColor }}
          autoFocus
        />
      ) : (
        <p className="task-text flex-1 text-xs sm:text-sm font-medium leading-relaxed wrap-break-word select-none">
          {task.text}
        </p>
      )}

      <div className="flex gap-2 shrink-0">
        {!isEditing && !task.completed && (
          <button
            onClick={() => setIsEditing(true)}
            className="text-[#383838] font-bold text-base transition-colors cursor-pointer hover:text-blue-500"
            title="Edit task"
          >
            ✎
          </button>
        )}
        <button
          onClick={onDelete}
          className="text-[#FF6B6B] hover:text-red-700 font-bold text-lg transition-colors cursor-pointer"
          title="Delete task"
        >
          ×
        </button>
      </div>
    </div>
  );
}