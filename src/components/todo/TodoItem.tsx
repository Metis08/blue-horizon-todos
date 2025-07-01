
import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Trash2, CheckCircle, Clock } from 'lucide-react';

interface Todo {
  id: string;
  task: string;
  status: 'pending' | 'completed';
  priority: 'low' | 'medium' | 'high';
}

interface TodoItemProps {
  todo: Todo;
  onUpdateStatus: (id: string, status: 'pending' | 'completed') => void;
  onUpdatePriority: (id: string, priority: 'low' | 'medium' | 'high') => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({ todo, onUpdateStatus, onUpdatePriority, onDelete }: TodoItemProps) => {
  const priorityColors = {
    low: 'text-green-400 bg-green-900/50 border-green-400/30',
    medium: 'text-yellow-400 bg-yellow-900/50 border-yellow-400/30',
    high: 'text-red-400 bg-red-900/50 border-red-400/30'
  };

  const statusColors = {
    pending: 'text-orange-400 bg-orange-900/50 border-orange-400/30',
    completed: 'text-green-400 bg-green-900/50 border-green-400/30'
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-900 border border-gray-700 rounded-lg hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
      <div className="flex-1 flex items-center gap-4">
        <div className="flex-1">
          <h3 className={`text-lg font-medium ${todo.status === 'completed' ? 'line-through text-gray-500' : 'text-white'}`}>
            {todo.task}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${statusColors[todo.status]}`}>
              {todo.status === 'pending' ? (
                <>
                  <Clock className="w-3 h-3 inline mr-1" />
                  Pending
                </>
              ) : (
                <>
                  <CheckCircle className="w-3 h-3 inline mr-1" />
                  Completed
                </>
              )}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${priorityColors[todo.priority]}`}>
              {todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}
            </span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button
          onClick={() => onUpdateStatus(todo.id, todo.status === 'pending' ? 'completed' : 'pending')}
          variant={todo.status === 'pending' ? 'default' : 'outline'}
          size="sm"
          className={`min-w-32 transition-all duration-300 hover:scale-105 ${
            todo.status === 'pending' 
              ? 'bg-green-600 hover:bg-green-700 text-white hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]' 
              : 'bg-orange-600 hover:bg-orange-700 text-white border-orange-600 hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]'
          }`}
        >
          {todo.status === 'pending' ? 'Mark Complete' : 'Mark Pending'}
        </Button>
        
        <Select value={todo.priority} onValueChange={(value: 'low' | 'medium' | 'high') => onUpdatePriority(todo.id, value)}>
          <SelectTrigger className="w-24 h-8 bg-gray-800 border-gray-600 text-white hover:border-blue-500 transition-colors duration-200">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-600">
            <SelectItem value="low" className="text-white hover:bg-gray-700">Low</SelectItem>
            <SelectItem value="medium" className="text-white hover:bg-gray-700">Medium</SelectItem>
            <SelectItem value="high" className="text-white hover:bg-gray-700">High</SelectItem>
          </SelectContent>
        </Select>
        
        <Button
          onClick={() => onDelete(todo.id)}
          variant="destructive"
          size="sm"
          className="bg-red-600 hover:bg-red-700 transition-all duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] hover:scale-105"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
