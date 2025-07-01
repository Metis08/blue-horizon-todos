
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LogOut, Home, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

interface Todo {
  id: string;
  task: string;
  status: 'pending' | 'completed';
  priority: 'low' | 'medium' | 'high';
}

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', task: 'Buying Milk', status: 'pending', priority: 'medium' },
    { id: '2', task: 'Coding', status: 'completed', priority: 'high' }
  ]);
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'completed'>('all');
  const [priorityFilter, setPriorityFilter] = useState<'all' | 'low' | 'medium' | 'high'>('all');

  const addTodo = (task: string, priority: 'low' | 'medium' | 'high') => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      task,
      status: 'pending',
      priority
    };
    setTodos([...todos, newTodo]);
  };

  const updateStatus = (id: string, status: 'pending' | 'completed') => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, status } : todo
    ));
  };

  const updatePriority = (id: string, priority: 'low' | 'medium' | 'high') => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, priority } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    const statusMatch = statusFilter === 'all' || todo.status === statusFilter;
    const priorityMatch = priorityFilter === 'all' || todo.priority === priorityFilter;
    return statusMatch && priorityMatch;
  });

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-700 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]"
              asChild
            >
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
            </Button>
          </div>
          <h1 className="text-3xl font-bold text-white">MERN To-Do App</h1>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]"
            asChild
          >
            <Link to="/signin">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Add Todo Form */}
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-8 hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <TodoForm onAddTodo={addTodo} />
          </div>

          {/* Filters */}
          <div className="flex gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-blue-400" />
              <span className="text-white font-medium">Filters:</span>
            </div>
            <Select value={statusFilter} onValueChange={(value: 'all' | 'pending' | 'completed') => setStatusFilter(value)}>
              <SelectTrigger className="w-40 bg-gray-800 border-gray-600 text-white hover:border-blue-500 transition-colors duration-200">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                <SelectItem value="all" className="text-white hover:bg-gray-700">All Status</SelectItem>
                <SelectItem value="pending" className="text-white hover:bg-gray-700">Pending</SelectItem>
                <SelectItem value="completed" className="text-white hover:bg-gray-700">Completed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priorityFilter} onValueChange={(value: 'all' | 'low' | 'medium' | 'high') => setPriorityFilter(value)}>
              <SelectTrigger className="w-40 bg-gray-800 border-gray-600 text-white hover:border-blue-500 transition-colors duration-200">
                <SelectValue placeholder="All Priorities" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                <SelectItem value="all" className="text-white hover:bg-gray-700">All Priorities</SelectItem>
                <SelectItem value="low" className="text-white hover:bg-gray-700">Low</SelectItem>
                <SelectItem value="medium" className="text-white hover:bg-gray-700">Medium</SelectItem>
                <SelectItem value="high" className="text-white hover:bg-gray-700">High</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Todo List */}
          <div className="space-y-4">
            {filteredTodos.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No tasks found</p>
              </div>
            ) : (
              filteredTodos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onUpdateStatus={updateStatus}
                  onUpdatePriority={updatePriority}
                  onDelete={deleteTodo}
                />
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TodoApp;
