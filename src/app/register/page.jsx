"use client"; // Client Component

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    nid: "",
    name: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false); // replace with your auth logic

  // Prevent logged-in users from accessing registration page
  useEffect(() => {
    if (isLoggedIn) {
      router.push("/booking");
    }
  }, [isLoggedIn, router]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.nid) newErrors.nid = "NID is required";
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.contact) newErrors.contact = "Contact is required";

    // Password validation
    const password = form.password;
    if (!password) newErrors.password = "Password is required";
    else {
      if (password.length < 6) newErrors.password = "Password must be at least 6 characters";
      if (!/[A-Z]/.test(password)) newErrors.password = "Password must include an uppercase letter";
      if (!/[a-z]/.test(password)) newErrors.password = "Password must include a lowercase letter";
    }

    if (password !== form.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // TODO: Call API to register user
      console.log("Form submitted:", form);

      // After successful registration, redirect to Booking Page
      router.push("/booking");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">NID No</label>
          <input
            type="text"
            name="nid"
            value={form.nid}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.nid && <p className="text-red-500 text-sm">{errors.nid}</p>}
        </div>

        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label className="block mb-1">Contact</label>
          <input
            type="text"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
        </div>

        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <div>
          <label className="block mb-1">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
