import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6 text-white">
                    Login
                </h2>

                <form>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-gray-300 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label className="block text-gray-300 font-medium mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Login
                    </button>
                </form>

                {/* Link to login */}
                <p className="mt-6 text-center text-gray-400 text-sm">
                    Don't have an account?{" "}
                    <Link to={"/register"} className="text-blue-400 hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
