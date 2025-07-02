
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Organize Your Life with{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              MERN Todos
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            A powerful, full-stack todo application built with MongoDB, Express, React, and Node.js. 
            Manage your tasks efficiently with priority levels and real-time updates.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105"
              asChild
            >
              <Link to="/signup">
                Get Started
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-105"
              asChild
            >
              <Link to="/signin">
                Sign In
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Why Choose MERN Todos?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <CardHeader className="text-center">
                <CheckCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-white">Task Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  Create, update, and organize your tasks with priority levels. Mark tasks as complete and filter by status.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <CardTitle className="text-white">User Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  Secure user registration and login system with JWT authentication. Your tasks are private and secure.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <CardHeader className="text-center">
                <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-white">Full Stack Power</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  Built with modern MERN stack technology. Fast, responsive, and scalable architecture.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Organized?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have streamlined their productivity with our powerful todo app.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105"
            asChild
          >
            <Link to="/signup">
              Start Your Journey
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
