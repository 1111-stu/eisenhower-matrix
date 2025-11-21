'use client';

import { useState } from "react";
import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverEvent,
  UniqueIdentifier,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import {
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuadrantCard } from "@/components/QuadrantCard";
import { AddTaskModal } from "@/components/AddTaskModal";
import { StatisticsModal } from "@/components/StatisticsModal";
import { TaskItem } from "@/components/TaskItem";
import { useTasks } from "@/hooks/useTasks";
import { QUADRANTS } from "@/constants";
import { QuadrantType, Task } from "@/types";
import { useCommonTranslation } from "@/hooks/useTranslation";

export default function HomePage() {
  const { tasks, addTask, deleteTask, toggleTask, editTask, moveTask, clearAllTasks } =
    useTasks();
  const [currentQuadrant, setCurrentQuadrant] = useState<QuadrantType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStatisticsOpen, setIsStatisticsOpen] = useState(false);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [activeQuadrant, setActiveQuadrant] = useState<QuadrantType | null>(null);
  const { t } = useCommonTranslation();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleAddTask = (quadrant: QuadrantType) => {
    setCurrentQuadrant(quadrant);
    setIsModalOpen(true);
  };

  const handleSubmitTask = (text: string) => {
    if (!currentQuadrant) return;
    addTask(currentQuadrant, text);
  };

  const handleClearAll = () => {
    if (confirm(t("confirm.clearAll"))) {
      clearAllTasks();
    }
  };

  const handleDeleteTask = (quadrant: QuadrantType, taskId: number) => {
    deleteTask(quadrant, taskId);
  };

  const handleEditTask = (
    quadrant: QuadrantType,
    taskId: number,
    newText: string,
  ) => {
    editTask(quadrant, taskId, newText);
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveId(active.id);

    // Find which quadrant the task is in
    for (const quadrant of QUADRANTS) {
      const task = tasks[quadrant.id].find(t => `${quadrant.id}-${t.id}` === active.id);
      if (task) {
        setActiveQuadrant(quadrant.id);
        break;
      }
    }
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;

    if (!over) return;

    const activeContainer = findContainer(active.id);
    const overContainer = findContainer(over.id);

    if (!activeContainer || !overContainer || activeContainer === overContainer) {
      return;
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) {
      setActiveId(null);
      setActiveQuadrant(null);
      return;
    }

    const activeContainer = findContainer(active.id);
    const overContainer = findContainer(over.id);

    if (!activeContainer || !overContainer) {
      setActiveId(null);
      setActiveQuadrant(null);
      return;
    }

    // Extract task ID from the composite ID (format: "quadrant-taskId")
    const activeTaskId = parseInt(String(active.id).split('-').pop() || '0');
    const overTaskId = parseInt(String(over.id).split('-').pop() || '0');

    if (activeContainer !== overContainer) {
      // Moving between quadrants
      const activeTask = tasks[activeContainer].find(t => t.id === activeTaskId);
      if (activeTask) {
        const overIndex = tasks[overContainer].findIndex(t => t.id === overTaskId);
        const targetIndex = overIndex === -1 ? tasks[overContainer].length : overIndex;
        moveTask(activeContainer, overContainer, activeTaskId, targetIndex);
      }
    } else {
      // Reordering within the same quadrant
      const oldIndex = tasks[activeContainer].findIndex(t => t.id === activeTaskId);
      const newIndex = tasks[overContainer].findIndex(t => t.id === overTaskId);

      if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
        moveTask(activeContainer, activeContainer, activeTaskId, newIndex);
      }
    }

    setActiveId(null);
    setActiveQuadrant(null);
  };

  const findContainer = (id: UniqueIdentifier): QuadrantType | undefined => {
    // Check if it's a container ID
    if (QUADRANTS.some(q => q.id === id)) {
      return id as QuadrantType;
    }

    // Check if it's a task ID (format: "quadrant-taskId")
    const idStr = String(id);
    for (const quadrant of QUADRANTS) {
      if (idStr.startsWith(quadrant.id + '-')) {
        return quadrant.id;
      }
    }

    // Fallback: search through all tasks
    for (const quadrant of QUADRANTS) {
      if (tasks[quadrant.id].some(task => `${quadrant.id}-${task.id}` === id)) {
        return quadrant.id;
      }
    }

    return undefined;
  };

  const getActiveTask = (): Task | null => {
    if (!activeId || !activeQuadrant) return null;
    const taskId = parseInt(String(activeId).split('-').pop() || '0');
    return tasks[activeQuadrant].find(t => t.id === taskId) || null;
  };

  const getQuadrantCount = (quadrant: QuadrantType) => tasks[quadrant].length;

  const getStatsLabel = (quadrant: QuadrantType) => {
    switch (quadrant) {
      case "urgent-important":
        return t("home.statsCard.urgentImportant");
      case "not-urgent-important":
        return t("home.statsCard.notUrgentImportant");
      case "urgent-not-important":
        return t("home.statsCard.urgentNotImportant");
      case "not-urgent-not-important":
        return t("home.statsCard.notUrgentNotImportant");
    }
  };

  const activeTask = getActiveTask();

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onClearAll={handleClearAll}
        onShowStatistics={() => setIsStatisticsOpen(true)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12 flex-1 w-full">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {QUADRANTS.map((quadrant) => (
              <QuadrantCard
                key={quadrant.id}
                config={quadrant}
                tasks={tasks[quadrant.id]}
                onAddTask={() => handleAddTask(quadrant.id)}
                onToggleTask={(taskId) => toggleTask(quadrant.id, taskId)}
                onDeleteTask={(taskId) => handleDeleteTask(quadrant.id, taskId)}
                onEditTask={(taskId, newText) =>
                  handleEditTask(quadrant.id, taskId, newText)
                }
              />
            ))}
          </div>

          <DragOverlay
            dropAnimation={{
              sideEffects: defaultDropAnimationSideEffects({
                styles: {
                  active: {
                    opacity: '0.5',
                  },
                },
              }),
            }}
          >
            {activeTask ? (
              <TaskItem
                task={activeTask}
                quadrant={activeQuadrant!}
                onToggle={() => {}}
                onDelete={() => {}}
                onEdit={() => {}}
                isDragOverlay
              />
            ) : null}
          </DragOverlay>
        </DndContext>

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
              <div className="text-xs sm:text-sm text-gray-600 mt-1">
                {getStatsLabel(quadrant.id)}
              </div>
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