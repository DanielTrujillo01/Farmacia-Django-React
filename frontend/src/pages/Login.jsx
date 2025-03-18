import React from "react";

export default function Login(){
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="flex items-center px-6 py-4 shadow-md">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🌿</span>
          <h1 className="text-xl font-semibold">Healthy</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-1 items-center justify-center">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
          <h2 className="text-center text-xl font-semibold mb-6">
            Welcome to Login
          </h2>

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-6 space-x-4">
            <button className="px-4 py-2 rounded-full bg-teal-500 text-white">
              Login
            </button>
            <button className="px-4 py-2 rounded-full border border-teal-500 text-teal-500">
              Register
            </button>
          </div>
          
          {/* Form */}
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-full focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-full focus:outline-none"
            />

            <button className="w-full bg-teal-500 text-white py-2 rounded-full hover:bg-teal-600 transition">
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};