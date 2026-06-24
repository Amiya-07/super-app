'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/store/useStore';

export default function RegisterPage() {
  const router = useRouter();

  const setUser = useStore((state) => state.setUser);

  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
    mobile: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    username: '',
    email: '',
    mobile: '',
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      username: '',
      email: '',
      mobile: '',
    };

    let valid = true;

    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!form.username.trim()) {
      newErrors.username = 'Username is required';
      valid = false;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Valid email required';
      valid = false;
    }

    if (!/^\d{10}$/.test(form.mobile)) {
      newErrors.mobile = 'Enter 10 digit mobile number';
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    setUser(form);

    router.push('/categories');
  };

  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* Left Side */}
      <div className="hidden md:flex w-1/2 bg-green-900 items-end justify-center">
        <h1 className="text-5xl font-bold mb-20">
          Discover New Things
        </h1>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <h1 className="text-5xl text-green-500 font-bold mb-8">
          Super App
        </h1>

        <div className="w-full max-w-md space-y-3">
          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded bg-zinc-800"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
          {errors.name && (
            <p className="text-red-500 text-sm">
              {errors.name}
            </p>
          )}

          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 rounded bg-zinc-800"
            value={form.username}
            onChange={(e) =>
              setForm({
                ...form,
                username: e.target.value,
              })
            }
          />
          {errors.username && (
            <p className="text-red-500 text-sm">
              {errors.username}
            </p>
          )}

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-zinc-800"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email}
            </p>
          )}

          {/* Mobile */}
          <input
            type="text"
            placeholder="Mobile"
            className="w-full p-3 rounded bg-zinc-800"
            value={form.mobile}
            onChange={(e) =>
              setForm({
                ...form,
                mobile: e.target.value,
              })
            }
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm">
              {errors.mobile}
            </p>
          )}

          <button
            onClick={handleSubmit}
            className="w-full bg-green-500 py-3 rounded font-semibold hover:bg-green-600 transition"
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
}