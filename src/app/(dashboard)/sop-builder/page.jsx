"use client";

import React, { useState } from "react";

const initialSteps = [
    {
        id: 1,
        title: "Define the task objective",
        description:
            "Clearly explain what this task is supposed to achieve.",
        assignee: "Operations Team",
        duration: "10 min",
    },
    {
        id: 2,
        title: "Collect required information",
        description:
            "Gather all documents and information required to complete the task.",
        assignee: "Team Member",
        duration: "15 min",
    },
];

const steps = [
    {
        id: 1,
        title: "Basic Information",
        description: "Set up your SOP details",
    },
    {
        id: 2,
        title: "Task Steps",
        description: "Build your workflow",
    },
    {
        id: 3,
        title: "Review",
        description: "Review before publishing",
    },
];

export default function SOPBuilder() {
    const [currentStep, setCurrentStep] = useState(1);

    const [sop, setSop] = useState({
        title: "",
        category: "",
        department: "",
        description: "",
        owner: "",
    });

    const [taskSteps, setTaskSteps] = useState(initialSteps);

    const [showAddTask, setShowAddTask] = useState(false);

    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
        assignee: "",
        duration: "",
    });

    const [published, setPublished] = useState(false);

    const updateSop = (field, value) => {
        setSop((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const addTask = () => {
        if (!newTask.title.trim()) return;

        setTaskSteps((prev) => [
            ...prev,
            {
                id: Date.now(),
                ...newTask,
            },
        ]);

        setNewTask({
            title: "",
            description: "",
            assignee: "",
            duration: "",
        });

        setShowAddTask(false);
    };

    const removeTask = (id) => {
        setTaskSteps((prev) => prev.filter((task) => task.id !== id));
    };

    const moveTask = (index, direction) => {
        const newSteps = [...taskSteps];

        const targetIndex =
            direction === "up" ? index - 1 : index + 1;

        if (targetIndex < 0 || targetIndex >= newSteps.length) {
            return;
        }

        [newSteps[index], newSteps[targetIndex]] = [
            newSteps[targetIndex],
            newSteps[index],
        ];

        setTaskSteps(newSteps);
    };

    const nextStep = () => {
        if (currentStep < 3) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const previousStep = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const handlePublish = () => {
        setPublished(true);
    };

    return (
        <main className="min-h-screen bg-[#08090d] text-white">
            {/* Header */}
            <header className="sticky top-0 z-40 border-b border-white/10 bg-[#08090d]/95 backdrop-blur-xl">
                <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => window.history.back()}
                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-300 transition hover:bg-white/10"
                        >
                            ←
                        </button>

                        <div>
                            <h1 className="text-lg font-semibold">
                                SOP Builder
                            </h1>

                            <p className="text-xs text-gray-500">
                                Create and manage standard operating procedures
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/5">
                            Save Draft
                        </button>

                        <button
                            onClick={handlePublish}
                            className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium transition hover:bg-purple-500"
                        >
                            Publish SOP
                        </button>
                    </div>
                </div>
            </header>

            <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
                {/* Stepper */}
                <div className="mb-10">
                    <div className="mx-auto flex max-w-3xl items-center justify-center">
                        {steps.map((step, index) => {
                            const active = currentStep === step.id;
                            const completed = currentStep > step.id;

                            return (
                                <React.Fragment key={step.id}>
                                    <button
                                        onClick={() =>
                                            setCurrentStep(step.id)
                                        }
                                        className="flex min-w-32 flex-col items-center text-center"
                                    >
                                        <div
                                            className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition ${
                                                active
                                                    ? "border-purple-500 bg-purple-600 text-white"
                                                    : completed
                                                      ? "border-green-500 bg-green-500/15 text-green-400"
                                                      : "border-white/15 bg-white/5 text-gray-500"
                                            }`}
                                        >
                                            {completed ? "✓" : step.id}
                                        </div>

                                        <span
                                            className={`mt-2 text-sm ${
                                                active
                                                    ? "text-white"
                                                    : "text-gray-500"
                                            }`}
                                        >
                                            {step.title}
                                        </span>

                                        <span className="mt-1 hidden text-xs text-gray-600 sm:block">
                                            {step.description}
                                        </span>
                                    </button>

                                    {index !== steps.length - 1 && (
                                        <div
                                            className={`h-px w-16 sm:w-24 ${
                                                currentStep > step.id
                                                    ? "bg-green-500/50"
                                                    : "bg-white/10"
                                            }`}
                                        />
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
                    <section className="min-w-0">
                        {/* STEP 1 */}
                        {currentStep === 1 && (
                            <div className="rounded-2xl border border-white/10 bg-[#101116] p-6 shadow-xl">
                                <div className="mb-7">
                                    <h2 className="text-xl font-semibold">
                                        Basic Information
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Start by providing some basic
                                        information about your SOP.
                                    </p>
                                </div>

                                <div className="grid gap-5 md:grid-cols-2">
                                    <Input
                                        label="SOP Title"
                                        placeholder="e.g. Employee Onboarding Process"
                                        value={sop.title}
                                        onChange={(e) =>
                                            updateSop(
                                                "title",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <Input
                                        label="Category"
                                        placeholder="e.g. Human Resources"
                                        value={sop.category}
                                        onChange={(e) =>
                                            updateSop(
                                                "category",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <Input
                                        label="Department"
                                        placeholder="e.g. Operations"
                                        value={sop.department}
                                        onChange={(e) =>
                                            updateSop(
                                                "department",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <Input
                                        label="SOP Owner"
                                        placeholder="e.g. HR Manager"
                                        value={sop.owner}
                                        onChange={(e) =>
                                            updateSop(
                                                "owner",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>

                                <div className="mt-5">
                                    <label className="mb-2 block text-sm font-medium text-gray-300">
                                        Description
                                    </label>

                                    <textarea
                                        rows={5}
                                        value={sop.description}
                                        onChange={(e) =>
                                            updateSop(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Describe what this SOP is about..."
                                        className="w-full resize-none rounded-xl border border-white/10 bg-[#08090d] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500"
                                    />
                                </div>
                            </div>
                        )}

                        {/* STEP 2 */}
                        {currentStep === 2 && (
                            <div className="space-y-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-xl font-semibold">
                                            Task Steps
                                        </h2>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Build the workflow your team needs
                                            to follow.
                                        </p>
                                    </div>

                                    <button
                                        onClick={() =>
                                            setShowAddTask(true)
                                        }
                                        className="rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-medium transition hover:bg-purple-500"
                                    >
                                        + Add Task
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    {taskSteps.map((task, index) => (
                                        <div
                                            key={task.id}
                                            className="rounded-2xl border border-white/10 bg-[#101116] p-5"
                                        >
                                            <div className="flex gap-4">
                                                <div className="flex flex-col items-center gap-2">
                                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-500/15 text-sm font-semibold text-purple-400">
                                                        {index + 1}
                                                    </div>

                                                    {index !==
                                                        taskSteps.length -
                                                            1 && (
                                                        <div className="h-full w-px bg-white/10" />
                                                    )}
                                                </div>

                                                <div className="min-w-0 flex-1">
                                                    <div className="flex flex-col justify-between gap-3 sm:flex-row">
                                                        <div>
                                                            <h3 className="font-medium text-white">
                                                                {task.title}
                                                            </h3>

                                                            <p className="mt-1 text-sm leading-6 text-gray-500">
                                                                {
                                                                    task.description
                                                                }
                                                            </p>
                                                        </div>

                                                        <div className="flex items-start gap-1">
                                                            <button
                                                                onClick={() =>
                                                                    moveTask(
                                                                        index,
                                                                        "up"
                                                                    )
                                                                }
                                                                className="rounded-md border border-white/10 px-2 py-1 text-xs text-gray-400 hover:bg-white/5"
                                                            >
                                                                ↑
                                                            </button>

                                                            <button
                                                                onClick={() =>
                                                                    moveTask(
                                                                        index,
                                                                        "down"
                                                                    )
                                                                }
                                                                className="rounded-md border border-white/10 px-2 py-1 text-xs text-gray-400 hover:bg-white/5"
                                                            >
                                                                ↓
                                                            </button>

                                                            <button
                                                                onClick={() =>
                                                                    removeTask(
                                                                        task.id
                                                                    )
                                                                }
                                                                className="rounded-md border border-red-500/20 px-2 py-1 text-xs text-red-400 hover:bg-red-500/10"
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="mt-4 flex flex-wrap gap-2">
                                                        <span className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-gray-400">
                                                            👤{" "}
                                                            {task.assignee ||
                                                                "Unassigned"}
                                                        </span>

                                                        <span className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-gray-400">
                                                            ◷{" "}
                                                            {task.duration ||
                                                                "No duration"}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {taskSteps.length === 0 && (
                                        <div className="rounded-2xl border border-dashed border-white/10 p-12 text-center">
                                            <div className="text-3xl">☰</div>

                                            <h3 className="mt-3 font-medium">
                                                No tasks added
                                            </h3>

                                            <p className="mt-1 text-sm text-gray-500">
                                                Add your first task to build
                                                this SOP.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* STEP 3 */}
                        {currentStep === 3 && (
                            <div className="rounded-2xl border border-white/10 bg-[#101116] p-6">
                                <div className="mb-7">
                                    <h2 className="text-xl font-semibold">
                                        Review SOP
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Make sure everything looks correct
                                        before publishing.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-white/10 bg-[#08090d] p-5">
                                    <div className="flex items-start justify-between gap-5">
                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-purple-400">
                                                Standard Operating Procedure
                                            </p>

                                            <h3 className="mt-2 text-2xl font-semibold">
                                                {sop.title ||
                                                    "Untitled SOP"}
                                            </h3>

                                            <p className="mt-3 text-sm leading-6 text-gray-500">
                                                {sop.description ||
                                                    "No description provided."}
                                            </p>
                                        </div>

                                        <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-400">
                                            Draft
                                        </span>
                                    </div>

                                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                                        <ReviewItem
                                            label="Category"
                                            value={
                                                sop.category || "Not set"
                                            }
                                        />

                                        <ReviewItem
                                            label="Department"
                                            value={
                                                sop.department || "Not set"
                                            }
                                        />

                                        <ReviewItem
                                            label="Owner"
                                            value={
                                                sop.owner || "Not set"
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <h3 className="mb-3 text-sm font-medium text-gray-300">
                                        Workflow · {taskSteps.length} tasks
                                    </h3>

                                    <div className="space-y-2">
                                        {taskSteps.map((task, index) => (
                                            <div
                                                key={task.id}
                                                className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#08090d] p-3"
                                            >
                                                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-purple-500/10 text-xs text-purple-400">
                                                    {index + 1}
                                                </span>

                                                <span className="text-sm text-gray-300">
                                                    {task.title}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Navigation */}
                        <div className="mt-6 flex items-center justify-between">
                            <button
                                onClick={previousStep}
                                disabled={currentStep === 1}
                                className="rounded-lg border border-white/10 px-5 py-2.5 text-sm text-gray-300 transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30"
                            >
                                ← Back
                            </button>

                            {currentStep < 3 ? (
                                <button
                                    onClick={nextStep}
                                    className="rounded-lg bg-purple-600 px-6 py-2.5 text-sm font-medium transition hover:bg-purple-500"
                                >
                                    Continue →
                                </button>
                            ) : (
                                <button
                                    onClick={handlePublish}
                                    className="rounded-lg bg-green-600 px-6 py-2.5 text-sm font-medium transition hover:bg-green-500"
                                >
                                    ✓ Publish SOP
                                </button>
                            )}
                        </div>
                    </section>

                    {/* Right Sidebar */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-28 rounded-2xl border border-white/10 bg-[#101116] p-5">
                            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                                SOP Progress
                            </p>

                            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
                                <div
                                    className="h-full rounded-full bg-purple-600 transition-all"
                                    style={{
                                        width: `${(currentStep / 3) * 100}%`,
                                    }}
                                />
                            </div>

                            <div className="mt-2 flex justify-between text-xs text-gray-600">
                                <span>
                                    Step {currentStep} of 3
                                </span>

                                <span>
                                    {Math.round(
                                        (currentStep / 3) * 100
                                    )}
                                    %
                                </span>
                            </div>

                            <div className="mt-7 space-y-4">
                                {steps.map((step) => (
                                    <button
                                        key={step.id}
                                        onClick={() =>
                                            setCurrentStep(step.id)
                                        }
                                        className="flex w-full items-start gap-3 text-left"
                                    >
                                        <div
                                            className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs ${
                                                currentStep === step.id
                                                    ? "bg-purple-600 text-white"
                                                    : currentStep > step.id
                                                      ? "bg-green-500/15 text-green-400"
                                                      : "bg-white/5 text-gray-600"
                                            }`}
                                        >
                                            {currentStep > step.id
                                                ? "✓"
                                                : step.id}
                                        </div>

                                        <div>
                                            <p
                                                className={`text-sm ${
                                                    currentStep === step.id
                                                        ? "text-white"
                                                        : "text-gray-500"
                                                }`}
                                            >
                                                {step.title}
                                            </p>

                                            <p className="mt-0.5 text-xs text-gray-700">
                                                {step.description}
                                            </p>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <div className="mt-7 rounded-xl border border-purple-500/10 bg-purple-500/5 p-4">
                                <p className="text-xs font-medium text-purple-300">
                                    💡 Builder Tip
                                </p>

                                <p className="mt-2 text-xs leading-5 text-gray-500">
                                    Keep each task simple and actionable.
                                    One task should describe one clear
                                    action.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Add Task Modal */}
            {showAddTask && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm">
                    <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#111218] p-6 shadow-2xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-semibold">
                                    Add New Task
                                </h2>

                                <p className="mt-1 text-xs text-gray-500">
                                    Define an actionable step for this SOP.
                                </p>
                            </div>

                            <button
                                onClick={() =>
                                    setShowAddTask(false)
                                }
                                className="text-xl text-gray-500 hover:text-white"
                            >
                                ×
                            </button>
                        </div>

                        <div className="mt-6 space-y-4">
                            <Input
                                label="Task Title"
                                placeholder="e.g. Review employee documents"
                                value={newTask.title}
                                onChange={(e) =>
                                    setNewTask({
                                        ...newTask,
                                        title: e.target.value,
                                    })
                                }
                            />

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-300">
                                    Task Description
                                </label>

                                <textarea
                                    rows={3}
                                    value={newTask.description}
                                    onChange={(e) =>
                                        setNewTask({
                                            ...newTask,
                                            description:
                                                e.target.value,
                                        })
                                    }
                                    placeholder="Explain what needs to be done..."
                                    className="w-full resize-none rounded-xl border border-white/10 bg-[#08090d] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-purple-500"
                                />
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <Input
                                    label="Assignee"
                                    placeholder="e.g. HR Team"
                                    value={newTask.assignee}
                                    onChange={(e) =>
                                        setNewTask({
                                            ...newTask,
                                            assignee: e.target.value,
                                        })
                                    }
                                />

                                <Input
                                    label="Estimated Duration"
                                    placeholder="e.g. 15 min"
                                    value={newTask.duration}
                                    onChange={(e) =>
                                        setNewTask({
                                            ...newTask,
                                            duration: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div className="mt-7 flex justify-end gap-3">
                            <button
                                onClick={() =>
                                    setShowAddTask(false)
                                }
                                className="rounded-lg border border-white/10 px-4 py-2.5 text-sm text-gray-400 hover:bg-white/5"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={addTask}
                                className="rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-medium hover:bg-purple-500"
                            >
                                Add Task
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Published Modal */}
            {published && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm">
                    <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111218] p-8 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-2xl text-green-400">
                            ✓
                        </div>

                        <h2 className="mt-5 text-xl font-semibold">
                            SOP Published Successfully
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Your SOP has been created and is ready to be
                            shared with your team.
                        </p>

                        <button
                            onClick={() => setPublished(false)}
                            className="mt-6 w-full rounded-lg bg-purple-600 py-2.5 text-sm font-medium hover:bg-purple-500"
                        >
                            Done
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}

/* Reusable Input */

function Input({
    label,
    placeholder,
    value,
    onChange,
}) {
    return (
        <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
                {label}
            </label>

            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full rounded-xl border border-white/10 bg-[#08090d] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500"
            />
        </div>
    );
}

/* Review Item */

function ReviewItem({ label, value }) {
    return (
        <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
            <p className="text-[11px] uppercase tracking-wider text-gray-600">
                {label}
            </p>

            <p className="mt-1 text-sm text-gray-300">
                {value}
            </p>
        </div>
    );
}