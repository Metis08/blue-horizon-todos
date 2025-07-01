
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, User, Plus, Filter } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            MERN To-Do App
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Organize your tasks efficiently with our modern todo application
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              asChild
              className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105"
            >
              <Link to="/signin">
                <User className="w-5 h-5 mr-2" />
                Sign In
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 px-8 bg-transparent border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105"
            >
              <Link to="/signup">
                Get Started
              </Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gray-900 border-gray-700 text-white hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5 text-blue-400" />
                Easy Task Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">
                Add, edit, and organize your tasks with our intuitive interface
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-700 text-white hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-blue-400" />
                Priority & Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">
                Set priorities and track status with powerful filtering options
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-700 text-white hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                Track Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">
                Mark tasks as complete and monitor your productivity
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Demo Link */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
          <h3 className="text-xl font-semibold text-white mb-4">
            Try the Demo
          </h3>
          <p className="text-gray-300 mb-4">
            Experience the full functionality of our todo application
          </p>
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105"
          >
            <Link to="/todo">
              View Demo
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
