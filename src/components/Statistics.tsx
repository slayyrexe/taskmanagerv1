import React from 'react';
import { Task } from '../types';

interface StatisticsProps {
  tasks: Task[];
}

const Statistics: React.FC<StatisticsProps> = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const incompleteTasks = totalTasks - completedTasks;
  const completionRate = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 dark:text-white">Statistics</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600 dark:text-gray-400">Total Tasks</p>
          <p className="text-3xl font-bold dark:text-white">{totalTasks}</p>
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400">Completed Tasks</p>
          <p className="text-3xl font-bold text-green-500">{completedTasks}</p>
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400">Incomplete Tasks</p>
          <p className="text-3xl font-bold text-yellow-500">{incompleteTasks}</p>
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400">Completion Rate</p>
          <p className="text-3xl font-bold text-blue-500">{completionRate.toFixed(1)}%</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;