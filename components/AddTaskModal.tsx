'use client';

import { useState, FormEvent } from 'react';

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (text: string) => void;
}

export function AddTaskModal({ isOpen, onClose, onSubmit }: AddTaskModalProps) {
  const [taskText, setTaskText] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    onSubmit(taskText);
    setTaskText('');
    onClose();
  };

  const handleClose = () => {
    setTaskText('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[#383838]/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white border-2 border-[#383838] max-w-md w-full p-4 sm:p-6 m-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 sm:mb-4">ADD NEW TASK</h2>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div>
            <label className="block text-xs sm:text-sm font-semibold mb-2">
              TASK DESCRIPTION
            </label>
            <textarea
              id="task-input"
              rows={3}
              placeholder="Enter task description..."
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-[#383838] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#6FC2FF]"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              required
              autoFocus
            />
          </div>

          <div className="flex gap-2 sm:gap-3">
            <button
              type="submit"
              className="btn-blue flex-1 px-4 sm:px-6 py-2 sm:py-3 rounded-none font-bold text-sm sm:text-base uppercase"
            >
              ADD TASK
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="btn-white px-4 sm:px-6 py-2 sm:py-3 rounded-none font-bold text-sm sm:text-base uppercase"
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
