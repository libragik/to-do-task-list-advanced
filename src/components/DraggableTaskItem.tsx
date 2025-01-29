import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';
import { TaskItem } from './TaskItem';
import { Task } from '../types/task';

interface DraggableTaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string, codeBlock?: { language: string; code: string }, richText?: string) => void;
  hasHeadlines: boolean;
  onCheckAllSubTasks?: (headlineId: string) => void;
  tasks: Task[];
}

export function DraggableTaskItem({ task, onToggle, onDelete, onEdit, hasHeadlines, onCheckAllSubTasks, tasks }: DraggableTaskItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const isIndented = hasHeadlines && !task.isHeadline;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative ${isDragging ? 'z-50' : ''} ${isIndented ? 'indent' : ''}`}
    >
      <div className="flex group">
        <div
          {...attributes}
          {...listeners}
          className="px-2 py-4 flex items-center cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600"
        >
          <GripVertical size={18} />
        </div>
        <div className="flex-1 overflow-x-auto">
          <TaskItem
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
            onCheckAllSubTasks={onCheckAllSubTasks}
            tasks={tasks}
          />
        </div>
      </div>
    </div>
  );
}
