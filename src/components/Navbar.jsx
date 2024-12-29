import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="flex items-center justify-between px-4 md:px-6 bg-white border-b h-16 shadow-sm">
            {/* Heading */}
            <div className="flex items-center space-x-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="fixed top-4 left-4 z-50 text-gray-700 md:hidden"
                >
                    <span className="material-symbols-outlined text-3xl">
                        {isOpen ? "close" : "menu"}
                    </span>
                </button>

                {/* Greeting */}
                <h1 className="text-lg md:text-2xl font-bold truncate">
                    Welcome back, Darell!👋
                </h1>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2 md:space-x-4">
                <button className="hidden md:block border px-4 py-2 rounded-md border-gray-300 text-sm font-medium hover:bg-gray-100 transition">
                    Export CSV
                </button>
                <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition">
                    Add new
                </button>
            </div>
        </nav>
    );
}
