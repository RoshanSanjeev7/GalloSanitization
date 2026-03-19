import React from 'react';
import s from '../pages/CreateTemplate.module.css';

interface TaskState {
  description: string;
}

interface CategoryState {
  name: string;
  tasks: TaskState[];
}

interface CategoryEditorProps {
  cat: CategoryState;
  catIdx: number;
  showRemove: boolean;
  onUpdateCategory: (catIdx: number, name: string) => void;
  onRemoveCategory: (catIdx: number) => void;
  onUpdateTask: (catIdx: number, taskIdx: number, description: string) => void;
  onAddTask: (catIdx: number) => void;
  onRemoveTask: (catIdx: number, taskIdx: number) => void;
}

export default function CategoryEditor({
  cat,
  catIdx,
  showRemove,
  onUpdateCategory,
  onRemoveCategory,
  onUpdateTask,
  onAddTask,
  onRemoveTask,
}: CategoryEditorProps) {
  return (
    <div className={s.templateSection}>
      <div
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <span className={s.sectionHeader}>CATEGORY NAME</span>
        {showRemove && (
          <button className={s.removeBtn} onClick={() => onRemoveCategory(catIdx)}>
            &times;
          </button>
        )}
      </div>
      <input
        className="form-input"
        placeholder="e.g. Prep"
        value={cat.name}
        onChange={(e) => onUpdateCategory(catIdx, e.target.value)}
        style={{ marginBottom: 12 }}
      />

      <span className={s.sectionHeader}>TASKS</span>
      {cat.tasks.map((task, taskIdx) => (
        <div key={taskIdx} className={s.taskInputRow}>
          <input
            className="form-input"
            placeholder="Enter task description..."
            value={task.description}
            onChange={(e) => onUpdateTask(catIdx, taskIdx, e.target.value)}
          />
          {cat.tasks.length > 1 && (
            <button className={s.removeBtn} onClick={() => onRemoveTask(catIdx, taskIdx)}>
              &times;
            </button>
          )}
        </div>
      ))}
      <button className={s.addLink} onClick={() => onAddTask(catIdx)}>
        + Add Task
      </button>
    </div>
  );
}
