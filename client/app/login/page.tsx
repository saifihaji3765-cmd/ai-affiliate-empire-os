"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "http://localhost:5000/api/supabase-auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
        }
      );

      const data = await response.json();

      if (!data.success) {
        setError(data.message);
        return;
      }

      localStorage.setItem(
        "access_token",
        data.session.access_token
      );

      router.push("/dashboard");
    } catch (error) {
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8">
        <h1 className="mb-3 text-4xl font-extrabold">
          Welcome Back
        </h1>

        <p className="mb-8 text-slate-400">
          Login to your AI Affiliate Empire
        </p>

        {/* EMAIL */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-bold">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-2xl border border-border bg-secondary px-5 py-4"
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-bold">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full rounded-2xl border border-border bg-secondary px-5 py-4"
          />
        </div>

        {/* ERROR */}
        {error && (
          <div className="mb-5 rounded-2xl border border-red-500 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* BUTTON */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full rounded-2xl bg-primary px-6 py-4 text-lg font-bold text-white transition hover:scale-105 disabled:opacity-50"
        >
          {loading
            ? "Logging in..."
            : "Login"}
        </button>
      </div>
    </main>
  );
}
