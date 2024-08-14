import React, { useState } from 'react';
import { Button } from "@/components/ui/button"

const Index = () => {
  const [greeting, setGreeting] = useState("Hello World");

  const toggleGreeting = () => {
    setGreeting(greeting === "Hello World" ? "Goodbye World" : "Hello World");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-6xl font-bold text-white mb-8 animate-fade-in-down">
        {greeting}
      </h1>
      <Button 
        onClick={toggleGreeting}
        className="bg-white text-blue-600 hover:bg-blue-100 transition-colors duration-300"
      >
        Toggle Greeting
      </Button>
    </div>
  );
};

export default Index;