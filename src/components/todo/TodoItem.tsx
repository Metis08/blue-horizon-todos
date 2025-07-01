
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
    low: 'text-green-600 bg-green-100',
    medium: 'text-yellow-600 bg-yellow-100',
    high: 'text-red-600 bg-red-100'
  };

  const statusColors = {
    pending: 'text-orange-600 bg-orange-100',
    completed: 'text-green-600 bg-green-100'
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-all duration-200">
      <div className="flex-1 flex items-center gap-4">
        <div className="flex-1">
          <h3 className={`text-lg font-medium ${todo.status === 'completed' ? 'line-through text-slate-500' : 'text-slate-800'}`}>
            {todo.task}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[todo.status]}`}>
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
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[todo.priority]}`}>
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
          className={`min-w-32 ${
            todo.status === 'pending' 
              ? 'bg-green-600 hover:bg-green-700 text-white' 
              : 'bg-orange-600 hover:bg-orange-700 text-white border-orange-600'
          }`}
        >
          {todo.status === 'pending' ? 'Mark Complete' : 'Mark Pending'}
        </Button>
        
        <Select value={todo.priority} onValueChange={(value: 'low' | 'medium' | 'high') => onUpdatePriority(todo.id, value)}>
          <SelectTrigger className="w-24 h-8">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-white border-slate-200">
            <SelectItem value="low">Low</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="high">High</SelectItem>
          </SelectContent>
        </Select>
        
        <Button
          onClick={() => onDelete(todo.id)}
          variant="destructive"
          size="sm"
          className="bg-red-600 hover:bg-red-700"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
