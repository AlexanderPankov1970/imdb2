"use client";
import React from "react";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1 className="text-red-500">Something went wrong!!!</h1>
      <button
        className="hover:text-red-600 hover:bg-red-400 p-2 mt-2.5 bg-red-300 border-2 border-red-800 rounded-xl"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
