
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
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
            className="text-white hover:bg-white/20"
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
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
            <TodoForm onAddTodo={addTodo} />
          </div>

          {/* Filters */}
          <div className="flex gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-white" />
              <span className="text-white font-medium">Filters:</span>
            </div>
            <Select value={statusFilter} onValueChange={(value: 'all' | 'pending' | 'completed') => setStatusFilter(value)}>
              <SelectTrigger className="w-40 bg-white/80 backdrop-blur-sm border-slate-300">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent className="bg-white border-slate-200">
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priorityFilter} onValueChange={(value: 'all' | 'low' | 'medium' | 'high') => setPriorityFilter(value)}>
              <SelectTrigger className="w-40 bg-white/80 backdrop-blur-sm border-slate-300">
                <SelectValue placeholder="All Priorities" />
              </SelectTrigger>
              <SelectContent className="bg-white border-slate-200">
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Todo List */}
          <div className="space-y-4">
            {filteredTodos.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-white/70 text-lg">No tasks found</p>
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
