"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function JobAnalysis() {
    const router = useRouter();

    const [jobDescription, setJobDescription] = useState("");
    const [analyzed, setAnalyzed] = useState(false);
    const [loading, setLoading] = useState(false);

    const analyzeJob = () => {
        if (!jobDescription.trim()) return;

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setAnalyzed(true);
        }, 1200);
    };

    const resetAnalysis = () => {
        setJobDescription("");
        setAnalyzed(false);
    };

    return (
        <main className="min-h-screen bg-gray-50 text-gray-900">
            {/* Header */}
            <header className="border-b border-gray-200 bg-white">
                <div className="mx-auto max-w-7xl px-5 py-4 lg:px-8">

                    {/* Back Button */}
                    <div className="mb-4">
                        <button
                            onClick={() => router.back()}
                            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
                        >
                            <span className="text-lg leading-none">←</span>
                            Back
                        </button>
                    </div>

                    {/* Header Content */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-xl font-semibold text-gray-900">
                                Job Analysis
                            </h1>

                            <p className="mt-1 text-sm text-gray-500">
                                Analyze a job description and understand what
                                employers are looking for.
                            </p>
                        </div>

                        {analyzed && (
                            <button
                                onClick={resetAnalysis}
                                className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 transition hover:bg-gray-50"
                            >
                                New Analysis
                            </button>
                        )}
                    </div>
                </div>
            </header>

            <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
                {!analyzed ? (
                    <>
                        {/* Hero */}
                        <div className="mx-auto max-w-3xl text-center">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-100 bg-purple-50 text-2xl text-purple-600">
                                ✦
                            </div>

                            <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                                Understand the job before you apply
                            </h2>

                            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 md:text-base">
                                Paste a job description below and get a
                                structured breakdown of skills, requirements,
                                responsibilities, and potential gaps.
                            </p>
                        </div>

                        {/* Input Card */}
                        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Job Description
                                    </h3>

                                    <p className="mt-1 text-xs text-gray-500">
                                        Paste the complete job posting here.
                                    </p>
                                </div>

                                <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600">
                                    AI Analysis
                                </span>
                            </div>

                            <textarea
                                value={jobDescription}
                                onChange={(e) =>
                                    setJobDescription(e.target.value)
                                }
                                placeholder={`Paste job description here...

Example:
We are looking for a Frontend Developer with experience in React.js, Next.js, TypeScript and Tailwind CSS...`}
                                className="mt-5 min-h-[320px] w-full resize-none rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm leading-7 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-50"
                            />

                            <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
                                <p className="text-xs text-gray-400">
                                    {jobDescription.length} characters
                                </p>

                                <button
                                    onClick={analyzeJob}
                                    disabled={
                                        !jobDescription.trim() || loading
                                    }
                                    className="w-full rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
                                >
                                    {loading ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                            Analyzing...
                                        </span>
                                    ) : (
                                        "Analyze Job →"
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
                            <Feature
                                icon="◈"
                                title="Skills Detection"
                                description="Identify technical and soft skills mentioned in the job."
                            />

                            <Feature
                                icon="◎"
                                title="Requirement Breakdown"
                                description="Separate required qualifications from responsibilities."
                            />

                            <Feature
                                icon="✦"
                                title="AI Insights"
                                description="Get useful insights to prepare for the application."
                            />
                        </div>
                    </>
                ) : (
                    <AnalysisResult />
                )}
            </div>
        </main>
    );
}

/* =========================
   Analysis Result
========================= */

function AnalysisResult() {
    return (
        <div>
            {/* Result Header */}
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                            Analysis Complete
                        </span>

                        <span className="text-xs text-gray-400">
                            Frontend Developer
                        </span>
                    </div>

                    <h2 className="mt-3 text-2xl font-bold text-gray-900">
                        Job Analysis Results
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Here is a structured breakdown of the job description.
                    </p>
                </div>

                <button className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 transition hover:bg-gray-50">
                    Export Report
                </button>
            </div>

            {/* Stats */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    label="Match Score"
                    value="82%"
                    description="Strong match"
                    icon="◉"
                />

                <StatCard
                    label="Required Skills"
                    value="12"
                    description="Skills detected"
                    icon="◇"
                />

                <StatCard
                    label="Experience"
                    value="2+ Years"
                    description="Expected level"
                    icon="◷"
                />

                <StatCard
                    label="Job Type"
                    value="Remote"
                    description="Work arrangement"
                    icon="⌘"
                />
            </div>

            {/* Main Content */}
            <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
                {/* Left */}
                <div className="space-y-6">

                    {/* Skills */}
                    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        <SectionHeader
                            title="Required Skills"
                            description="Technical skills identified from the job description."
                        />

                        <div className="mt-5 flex flex-wrap gap-2">
                            {[
                                "React.js",
                                "Next.js",
                                "TypeScript",
                                "JavaScript",
                                "Tailwind CSS",
                                "REST API",
                                "Git",
                                "Responsive Design",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-lg border border-purple-100 bg-purple-50 px-3 py-2 text-sm text-purple-700"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Responsibilities */}
                    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        <SectionHeader
                            title="Key Responsibilities"
                            description="Main responsibilities expected for this position."
                        />

                        <div className="mt-5 space-y-3">
                            {[
                                "Build and maintain responsive web applications.",
                                "Develop reusable React components.",
                                "Work closely with designers and backend developers.",
                                "Integrate REST APIs into frontend applications.",
                                "Optimize applications for performance and accessibility.",
                                "Participate in code reviews and team development.",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex gap-3 rounded-lg border border-gray-100 bg-gray-50 p-3"
                                >
                                    <span className="mt-0.5 text-green-500">
                                        ✓
                                    </span>

                                    <p className="text-sm leading-6 text-gray-600">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Requirements */}
                    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        <SectionHeader
                            title="Requirements"
                            description="Qualifications and experience expected by the employer."
                        />

                        <div className="mt-5 space-y-3">
                            <Requirement
                                title="Professional Experience"
                                value="2+ years of frontend development experience"
                            />

                            <Requirement
                                title="Education"
                                value="Bachelor's degree in Computer Science or related field"
                            />

                            <Requirement
                                title="Communication"
                                value="Strong written and verbal communication skills"
                            />

                            <Requirement
                                title="Collaboration"
                                value="Ability to work effectively in a remote team"
                            />
                        </div>
                    </section>
                </div>

                {/* Right */}
                <div className="space-y-6">

                    {/* Match Score */}
                    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        <SectionHeader
                            title="Profile Match"
                            description="Based on the detected job requirements."
                        />

                        <div className="mt-6 flex justify-center">
                            <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-[12px] border-purple-100">
                                <div className="absolute inset-[-12px] rotate-45 rounded-full border-[12px] border-transparent border-r-purple-600 border-t-purple-600" />

                                <div className="text-center">
                                    <p className="text-4xl font-bold text-gray-900">
                                        82%
                                    </p>

                                    <p className="mt-1 text-xs text-gray-400">
                                        Match Score
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 rounded-xl border border-green-100 bg-green-50 p-4">
                            <p className="text-sm font-semibold text-green-700">
                                Strong Match
                            </p>

                            <p className="mt-1 text-xs leading-5 text-green-600/80">
                                Your profile matches most of the core
                                requirements for this role.
                            </p>
                        </div>
                    </section>

                    {/* Missing Skills */}
                    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        <SectionHeader
                            title="Potential Skill Gaps"
                            description="Skills you may want to improve."
                        />

                        <div className="mt-5 space-y-3">
                            {[
                                "Testing",
                                "CI/CD",
                                "Advanced TypeScript",
                            ].map((skill) => (
                                <div
                                    key={skill}
                                    className="flex items-center justify-between rounded-lg bg-orange-50 px-3 py-3"
                                >
                                    <span className="text-sm text-gray-700">
                                        {skill}
                                    </span>

                                    <span className="text-xs text-orange-600">
                                        Improve
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* AI Insight */}
                    <section className="rounded-2xl border border-purple-100 bg-purple-50 p-6">
                        <div className="flex items-center gap-2">
                            <span className="text-purple-600">✦</span>

                            <h3 className="font-semibold text-purple-900">
                                AI Insight
                            </h3>
                        </div>

                        <p className="mt-3 text-sm leading-6 text-purple-800/70">
                            Focus your application on React, Next.js,
                            TypeScript, responsive UI development, and
                            experience working with APIs.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

/* =========================
   Feature Component
========================= */

function Feature({ icon, title, description }) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                {icon}
            </div>

            <h3 className="mt-4 font-semibold text-gray-900">
                {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
                {description}
            </p>
        </div>
    );
}

/* =========================
   Stat Card
========================= */

function StatCard({ label, value, description, icon }) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                    {label}
                </p>

                <span className="text-purple-600">
                    {icon}
                </span>
            </div>

            <p className="mt-3 text-2xl font-bold text-gray-900">
                {value}
            </p>

            <p className="mt-1 text-xs text-gray-400">
                {description}
            </p>
        </div>
    );
}

/* =========================
   Section Header
========================= */

function SectionHeader({ title, description }) {
    return (
        <div>
            <h3 className="font-semibold text-gray-900">
                {title}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
                {description}
            </p>
        </div>
    );
}

/* =========================
   Requirement
========================= */

function Requirement({ title, value }) {
    return (
        <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                {title}
            </p>

            <p className="mt-1 text-sm text-gray-700">
                {value}
            </p>
        </div>
    );
}