import { useState } from "react";
import "material-symbols";

// eslint-disable-next-line react/prop-types
const MenuItem = ({ icon, label, notification }) => (
    <a
        href="#"
        className="flex items-center justify-between py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg px-4"
    >
        <div className="flex items-center space-x-4">
            <span className="material-symbols-outlined">{icon}</span>
            <span>{label}</span>
        </div>
        {notification && (
            <span className="text-xs px-2 py-1 bg-orange-500 text-white rounded-full">
                {notification}
            </span>
        )}
    </a>
);

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Overlay (for mobile sidebar) */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Navbar */}
            <nav className="lg:ml-[260px] flex items-center justify-between px-4 md:px-6 bg-white border-b h-16 shadow-sm z-40">
                <div className="flex items-center space-x-4">
                    {/* Toggle Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-700 md:hidden mt-2"
                    >
                        <span className="material-symbols-outlined text-3xl">
                            {isOpen ? "close" : "menu"}
                        </span>
                    </button>

                    {/* Heading */}
                    <h1 className="text-md md:text-2xl font-bold truncate">
                        Welcome back, Darell!👋
                    </h1>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2 md:space-x-4">
                    <button className="md:block border lg:px-4 lg:py-2 px-2 py-1 rounded-md border-gray-300 text-sm font-medium hover:bg-gray-100 transition">
                        <div className="flex items-center space-x-2">
                            <span className="material-symbols-outlined" style={{ color: 'gray' }}>cloud_download</span>
                            <p className="lg:block hidden">Export CSV</p>
                        </div>
                    </button>
                    <button className="bg-gray-800 text-white lg:px-4 lg:py-2 px-2 py-1 rounded-md text-sm font-medium hover:bg-gray-700 transition">
                        <div className="flex items-center space-x-2">
                            <span className="material-symbols-outlined" style={{ color: 'white' }}>add</span>
                            <p className="lg:block hidden">Add new</p>
                        </div>
                    </button>
                </div>
            </nav>

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-[999] overflow-y-auto no-scrollbar transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } w-[260px] bg-white border-r transition-transform duration-300 ease-in-out md:translate-x-0`}
            >
                {/* Logo */}
                <div className="flex items-center h-16 border-b px-4">
                    <img src="/Logo.png" alt="logo" className="h-8" />
                    <h1 className="text-lg font-bold ml-2">Medicore</h1>
                </div>

                {/* Search */}
                <div className="p-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 border rounded-lg focus:outline-none"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute w-4 h-4 text-gray-500 top-3 right-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 6a4 4 0 00-3.9 5 4 4 0 101.9 1.1h.1l4.5-4.5m-3.6-.9a4 4 0 01.6-4.5m1.2-1.2A5 5 0 0015.5 7 5 5 0 0110 6z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Menu Items */}
                <div className="flex-1 px-4 space-y-2">
                    <MenuItem icon="grid_view" label="Dashboard" />
                    <MenuItem icon="calendar_month" label="Schedule" />
                    <MenuItem icon="credit_card" label="Transaction" />
                    <MenuItem icon="message" label="Message" notification="10" />
                    <MenuItem icon="notifications" label="Notification" notification="12" />

                    {/* Management Section */}
                    <div className="text-xs font-semibold text-gray-500 mt-4">
                        MANAGEMENT
                    </div>
                    <MenuItem icon="bed" label="Bedroom" />
                    <MenuItem icon="pill" label="Medicine" />
                    <MenuItem icon="today" label="Appointment" />
                    <MenuItem icon="groups" label="Patient" />
                    <MenuItem icon="stethoscope" label="Doctor" />
                </div>

                {/* Footer */}
                <div className="px-4 py-4 border-t">
                    <MenuItem icon="settings" label="Settings" />
                    <MenuItem icon="help" label="Help & Support" />
                    <div className="flex items-center space-x-4 mt-4">
                        <img
                            src="/Avatar-5.png"
                            alt="Admin"
                            className="w-8 h-8 rounded-full"
                        />
                        <div className="flex-1">
                            <div className="text-sm font-semibold text-gray-700">Medicore</div>
                            <div className="text-xs text-gray-500">Admin</div>
                        </div>
                        <button>
                            <span className="material-symbols-outlined rotate-180">
                                move_item
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}