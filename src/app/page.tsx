"use client";
import { useState, useEffect } from "react";
import ThreeDViewer from "@/components/3DModel";
import Loader from "@/components/Loader"; // Import Loader

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulating loading time
  }, []);

  return (
    <main className="flex items-center justify-center h-screen bg-gray-900">
      {isLoading ? <Loader /> : <ThreeDViewer />}
    </main>
  );
}
