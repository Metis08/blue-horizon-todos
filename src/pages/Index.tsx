
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, User, Plus, Filter } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            MERN To-Do App
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Organize your tasks efficiently with our modern todo application
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              asChild
              className="h-12 px-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium transition-all duration-200"
            >
              <Link to="/signin">
                <User className="w-5 h-5 mr-2" />
                Sign In
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transition-all duration-200"
            >
              <Link to="/signup">
                Get Started
              </Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5 text-blue-400" />
                Easy Task Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white/70">
                Add, edit, and organize your tasks with our intuitive interface
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-blue-400" />
                Priority & Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white/70">
                Set priorities and track status with powerful filtering options
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                Track Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white/70">
                Mark tasks as complete and monitor your productivity
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Demo Link */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-4">
            Try the Demo
          </h3>
          <p className="text-white/70 mb-4">
            Experience the full functionality of our todo application
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium"
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
