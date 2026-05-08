"use client";

import { useState } from "react";

export default function AIStudioPage() {
  const [niche, setNiche] = useState("");
  const [platform, setPlatform] = useState("");
  const [contentType, setContentType] =
    useState("caption");

  const [loading, setLoading] = useState(false);

  const [generatedContent, setGeneratedContent] =
    useState("");

  const generateContent = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/ai/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            niche,
            platform,
            contentType
          })
        }
      );

      const data = await response.json();

      if (data.success) {
        setGeneratedContent(data.content);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background p-8 text-foreground">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-3 text-5xl font-extrabold">
          AI Studio
        </h1>

        <p className="mb-10 text-slate-400">
          Generate affiliate content using AI.
        </p>

        <div className="rounded-3xl border border-border bg-card p-8">
          <div className="grid gap-6 md:grid-cols-2">
            {/* NICHE */}
            <div>
              <label className="mb-3 block text-sm font-bold">
                Niche
              </label>

              <input
                type="text"
                placeholder="AI, Finance, Fitness..."
                value={niche}
                onChange={(e) =>
                  setNiche(e.target.value)
                }
                className="w-full rounded-2xl border border-border bg-secondary px-5 py-4"
              />
            </div>

            {/* PLATFORM */}
            <div>
              <label className="mb-3 block text-sm font-bold">
                Platform
              </label>

              <input
                type="text"
                placeholder="ClickBank, Digistore24..."
                value={platform}
                onChange={(e) =>
                  setPlatform(e.target.value)
                }
                className="w-full rounded-2xl border border-border bg-secondary px-5 py-4"
              />
            </div>
          </div>

          {/* CONTENT TYPE */}
          <div className="mt-6">
            <label className="mb-3 block text-sm font-bold">
              Content Type
            </label>

            <select
              value={contentType}
              onChange={(e) =>
                setContentType(e.target.value)
              }
              className="w-full rounded-2xl border border-border bg-secondary px-5 py-4"
            >
              <option value="caption">
                Instagram Caption
              </option>

              <option value="script">
                Video Script
              </option>

              <option value="blog">
                Blog Post
              </option>
            </select>
          </div>

          {/* BUTTON */}
          <button
            onClick={generateContent}
            disabled={loading}
            className="mt-8 rounded-2xl bg-primary px-8 py-4 text-lg font-bold text-white transition hover:scale-105 disabled:opacity-50"
          >
            {loading
              ? "Generating..."
              : "Generate AI Content"}
          </button>
        </div>

        {/* OUTPUT */}
        {generatedContent && (
          <div className="mt-10 rounded-3xl border border-border bg-card p-8">
            <h2 className="mb-5 text-3xl font-bold">
              Generated Content
            </h2>

            <pre className="whitespace-pre-wrap text-slate-300">
              {generatedContent}
            </pre>
          </div>
        )}
      </div>
    </main>
  );
}
