import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex">

                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <main className="min-w-0 flex-1">
                    {children}
                </main>

            </div>
        </div>
    );
}