import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Dashboard", href: "#" },
        { name: "Markets", href: "#" },
        { name: "Portfolio", href: "#" },
        { name: "News", href: "#" },
    ];

    return (
        <header className="bg-gray-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-bold tracking-wide text-green-400">
                            TradeX
                        </h1>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="hover:text-green-400 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Profile / Login */}
                    <div className="hidden md:block">
                        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition">
                            Login
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-gray-800">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block text-white hover:text-green-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="w-full mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition">
                        Login
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
