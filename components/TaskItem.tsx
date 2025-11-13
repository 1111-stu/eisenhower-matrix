'use client';

import { useState } from 'react';
import { Task, QuadrantType } from '@/types';
import { QUADRANTS } from '@/constants';

interface TaskItemProps {
  task: Task;
  quadrant: QuadrantType;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: (newText: string) => void;
  onDragStart: (e: React.DragEvent) => void;
  onDragEnd: (e: React.DragEvent) => void;
}

export function TaskItem({
  task,
  quadrant,
  onToggle,
  onDelete,
  onEdit,
  onDragStart,
  onDragEnd,
}: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

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

  return (
    <div
      className={`task-item quadrant-${quadrant} flex items-start gap-2 sm:gap-3 border-2 border-[#383838] p-3 sm:p-4 ${
        task.completed ? 'completed' : ''
      } ${isEditing ? 'cursor-default editing' : 'cursor-move'}`}
      draggable={!isEditing}
      data-task-id={task.id}
      data-quadrant={quadrant}
      onDragStart={isEditing ? undefined : onDragStart}
      onDragEnd={isEditing ? undefined : onDragEnd}
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
          className="flex-1 text-xs sm:text-sm font-medium leading-relaxed border-2 border-[#383838] px-2 py-1 focus:outline-none focus:ring-2"
          style={{
            '--tw-ring-color': quadrantColor,
          } as React.CSSProperties}
          autoFocus
        />
      ) : (
        <p className="task-text flex-1 text-xs sm:text-sm font-medium leading-relaxed wrap-break-word">
          {task.text}
        </p>
      )}

      <div className="flex gap-2 shrink-0">
        {!isEditing && !task.completed && (
          <button
            onClick={() => setIsEditing(true)}
            className="text-[#383838]  font-bold text-base transition-colors cursor-pointer"
            title="Edit task"
          >
            ✎
          </button>
        )}
        <button
          onClick={onDelete}
          className="text-[#FF6B6B] font-bold text-lg transition-colors cursor-pointer"
          title="Delete task"
        >
          ×
        </button>
      </div>
    </div>
  );
}
