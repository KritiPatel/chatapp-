import React from "react";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen w-full bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-yellow-500 p-4 text-white">
                <h2 className="text-xl font-bold">Sidebar</h2>
                <ul className="mt-4 space-y-2">
                    <li className="cursor-pointer hover:text-gray-200">Dashboard</li>
                    <li className="cursor-pointer hover:text-gray-200">Settings</li>
                    <li className="cursor-pointer hover:text-gray-200">Profile</li>
                </ul>
            </aside>
            {/* Main Content */}
            <main className="flex flex-1 flex-col bg-white p-6 shadow-md">
                {children}
            </main>
        </div>
    );
};

export default DashboardWrapper;
