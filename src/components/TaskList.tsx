import React from 'react';
import { CheckCircle, Circle, Trash2 } from 'lucide-react';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask, onDeleteTask }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 dark:text-white">Tasks</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No tasks yet. Add a task to get started!</p>
      ) : (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-between ${
                task.completed ? 'opacity-50' : ''
              }`}
            >
              <div className="flex items-center">
                <button
                  onClick={() => onToggleTask(task.id)}
                  className="mr-3 text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400"
                >
                  {task.completed ? (
                    <CheckCircle size={24} className="text-green-500 dark:text-green-400" />
                  ) : (
                    <Circle size={24} />
                  )}
                </button>
                <div>
                  <h3 className={`font-semibold ${task.completed ? 'line-through' : ''} dark:text-white`}>
                    {task.title}
                  </h3>
                  {task.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">{task.description}</p>
                  )}
                  {task.dueDate && (
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      Due: {new Date(task.dueDate).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
              >
                <Trash2 size={20} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;