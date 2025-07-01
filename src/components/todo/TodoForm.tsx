
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus } from 'lucide-react';

interface TodoFormProps {
  onAddTodo: (task: string, priority: string) => void;
}

const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTodo(task.trim(), priority);
      setTask('');
      setPriority('medium');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-8">
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
        className="flex-1 h-12 text-lg bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
      />
      <Select value={priority} onValueChange={setPriority}>
        <SelectTrigger className="w-32 h-12 bg-gray-800 border-gray-600 text-white hover:border-blue-500 transition-colors duration-200">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-gray-800 border-gray-600">
          <SelectItem value="low" className="text-white hover:bg-gray-700">Low</SelectItem>
          <SelectItem value="medium" className="text-white hover:bg-gray-700">Medium</SelectItem>
          <SelectItem value="high" className="text-white hover:bg-gray-700">High</SelectItem>
        </SelectContent>
      </Select>
      <Button
        type="submit"
        className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105"
      >
        <Plus className="w-5 h-5 mr-2" />
        Add
      </Button>
    </form>
  );
};

export default TodoForm;
