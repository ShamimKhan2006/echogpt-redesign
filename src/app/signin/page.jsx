
"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const [darkMode, setDarkMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // Validation
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    // Get registered users
    const users =
      JSON.parse(localStorage.getItem("echogpt_users")) || [];

    // Find user
    const user = users.find(
      (item) => item.email.toLowerCase() === email.toLowerCase()
    );

    // User doesn't exist
    if (!user) {
      setError("No account found with this email.");
      return;
    }

    // Wrong password
    if (user.password !== password) {
      setError("Incorrect password. Please try again.");
      return;
    }

    // Login successful
    localStorage.setItem(
      "echogpt_current_user",
      JSON.stringify(user)
    );

    setSuccess("Login successful! Redirecting...");

    // Demo dashboard route
    setTimeout(() => {
      router.push("/app");
    }, 800);
  };

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-[#08080d] text-white"
          : "bg-[#f7f7fb] text-[#111118]"
      }`}
    >
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className={`absolute left-1/2 top-[-180px] h-[450px] w-[450px] -translate-x-1/2 rounded-full blur-[120px] ${
            darkMode ? "bg-purple-600/15" : "bg-purple-500/10"
          }`}
        />

        <div
          className={`absolute bottom-[-180px] right-[-100px] h-[400px] w-[400px] rounded-full blur-[120px] ${
            darkMode ? "bg-indigo-600/10" : "bg-indigo-500/10"
          }`}
        />
      </div>

      {/* Navbar */}
      <nav
        className={`relative z-10 flex h-20 items-center justify-between border-b px-6 md:px-10 ${
          darkMode
            ? "border-white/10 bg-[#08080d]/80"
            : "border-black/10 bg-white/80"
        } backdrop-blur-xl`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-purple-500/20">
            E
          </div>

          <span className="text-xl font-bold tracking-tight">
            Echo<span className="text-purple-500">GPT</span>
          </span>
        </Link>

        {/* Theme Button */}
        <button
          type="button"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
          className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all ${
            darkMode
              ? "border-white/10 bg-white/5 hover:bg-white/10"
              : "border-black/10 bg-black/5 hover:bg-black/10"
          }`}
        >
          {darkMode ? (
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          ) : (
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.5 6.5 0 0 0 21 12.8Z" />
            </svg>
          )}
        </button>
      </nav>

      {/* Main */}
      <section className="relative z-10 flex min-h-[calc(100vh-80px)] items-center justify-center px-5 py-12">
        <div className="w-full max-w-md">

          {/* Heading */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-2xl font-bold text-white shadow-xl shadow-purple-500/20">
              E
            </div>

            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Welcome back
            </h1>

            <p
              className={`mt-3 text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Sign in to continue to your EchoGPT workspace.
            </p>
          </div>

          {/* Login Card */}
          <div
            className={`rounded-3xl border p-6 shadow-2xl backdrop-blur-xl md:p-8 ${
              darkMode
                ? "border-white/10 bg-white/[0.04] shadow-black/30"
                : "border-black/10 bg-white shadow-black/5"
            }`}
          >
            {/* Google */}
            <button
              type="button"
              className={`flex h-12 w-full items-center justify-center gap-3 rounded-xl border text-sm font-medium transition-all ${
                darkMode
                  ? "border-white/10 bg-white/5 hover:bg-white/10"
                  : "border-black/10 bg-white hover:bg-gray-50"
              }`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M21.35 12.27c0-.71-.06-1.39-.18-2.05H12v3.88h5.24a4.48 4.48 0 0 1-1.95 2.94v2.44h3.15c1.85-1.7 2.91-4.2 2.91-7.21Z"
                />

                <path
                  fill="#34A853"
                  d="M12 21.75c2.64 0 4.85-.87 6.47-2.37l-3.15-2.44c-.87.58-1.98.93-3.32.93-2.55 0-4.71-1.72-5.49-4.03H3.25v2.52A9.77 9.77 0 0 0 12 21.75Z"
                />

                <path
                  fill="#FBBC05"
                  d="M6.51 13.84A5.87 5.87 0 0 1 6.2 12c0-.64.11-1.27.31-1.84V7.64H3.25A9.76 9.76 0 0 0 2.22 12c0 1.57.38 3.05 1.03 4.36l3.26-2.52Z"
                />

                <path
                  fill="#EA4335"
                  d="M12 6.13c1.44 0 2.73.49 3.75 1.46l2.81-2.81C16.85 3.19 14.64 2.25 12 2.25a9.77 9.77 0 0 0-8.75 5.39l3.26 2.52c.78-2.31 2.94-4.03 5.49-4.03Z"
                />
              </svg>

              Continue with Google
            </button>

            {/* Divider */}
            <div className="my-6 flex items-center gap-4">
              <div
                className={`h-px flex-1 ${
                  darkMode ? "bg-white/10" : "bg-black/10"
                }`}
              />

              <span
                className={`text-xs ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                OR
              </span>

              <div
                className={`h-px flex-1 ${
                  darkMode ? "bg-white/10" : "bg-black/10"
                }`}
              />
            </div>

            <form onSubmit={handleLogin}>

              {/* Email */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`h-12 w-full rounded-xl border px-4 text-sm outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 ${
                    darkMode
                      ? "border-white/10 bg-white/5 placeholder:text-gray-600"
                      : "border-black/10 bg-gray-50 placeholder:text-gray-400"
                  }`}
                />
              </div>

              {/* Password */}
              <div className="mb-2">
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    onClick={() => setError("Forgot password is demo only.")}
                    className="text-xs font-medium text-purple-500 transition hover:text-purple-400"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className={`h-12 w-full rounded-xl border px-4 pr-12 text-sm outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 ${
                      darkMode
                        ? "border-white/10 bg-white/5 placeholder:text-gray-600"
                        : "border-black/10 bg-gray-50 placeholder:text-gray-400"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 p-1 ${
                      darkMode
                        ? "text-gray-500 hover:text-gray-300"
                        : "text-gray-400 hover:text-gray-700"
                    }`}
                  >
                    {showPassword ? "◉" : "○"}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              {/* Success */}
              {success && (
                <div className="mt-4 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                  {success}
                </div>
              )}

              {/* Sign In */}
              <button
                type="submit"
                className="mt-6 h-12 w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all hover:-translate-y-0.5 hover:shadow-purple-500/30 active:translate-y-0"
              >
                Sign In
              </button>
            </form>

            {/* Sign Up */}
            <p
              className={`mt-6 text-center text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="font-semibold text-purple-500 hover:text-purple-400"
              >
                Create account
              </Link>
            </p>
          </div>

          {/* Bottom Text */}
          <p
            className={`mt-6 text-center text-xs ${
              darkMode ? "text-gray-600" : "text-gray-400"
            }`}
          >
            By continuing, you agree to EchoGPT's Terms & Privacy Policy.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Page;

