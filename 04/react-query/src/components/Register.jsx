// import React, { useState } from "react";

// const Register = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//     });

//     const [error, setError] = useState("");

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (formData.password !== formData.confirmPassword) {
//             setError("Passwords do not match.");
//             return;
//         }

//         // Replace with your API logic
//         console.log("Form submitted:", formData);
//         setError("");
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-black px-4">
//             <div className="max-w-md w-full bg-gray-900 p-8 rounded-2xl shadow-lg">
//                 <h2 className="text-2xl font-bold mb-6 text-center text-white">Create an Account</h2>

//                 {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <input
//                         type="text"
//                         name="name"
//                         placeholder="Name"
//                         className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                     />

//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Email"
//                         className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                     />

//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                     />

//                     <input
//                         type="password"
//                         name="confirmPassword"
//                         placeholder="Confirm Password"
//                         className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         value={formData.confirmPassword}
//                         onChange={handleChange}
//                         required
//                     />

//                     <button
//                         type="submit"
//                         className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
//                     >
//                         Register
//                     </button>
//                 </form>

//                 <p className="text-center text-sm text-gray-400 mt-4">
//                     Already have an account?{" "}
//                     <a href="/login" className="text-blue-500 hover:underline">
//                         Login
//                     </a>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Register;













import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");

    const registerUser = async (data) => {
        const response = await axios.post("http://localhost:3000/api/v1/auth/user/signup", data);
        return response.data;
    };

    const mutation = useMutation({
        mutationFn: registerUser,
        onSuccess: (data) => {
            console.log("User registered:", data);
            setError("");
            // Optionally redirect or show success message
        },
        onError: (error) => {
            setError(error.response?.data?.message || "Registration failed.");
        },
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        const { confirmPassword, ...userData } = formData;
        mutation.mutate(userData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black px-4">
            <div className="max-w-md w-full bg-gray-900 p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Create an Account</h2>

                {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />

                    <button
                        type="submit"
                        disabled={mutation.isPending}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
                    >
                        {mutation.isPending ? "Registering..." : "Register"}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-400 mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-500 hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;
