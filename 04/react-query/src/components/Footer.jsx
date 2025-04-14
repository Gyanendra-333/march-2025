import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Logo & About */}
                    <div>
                        <h2 className="text-2xl font-bold text-green-400">TradeX</h2>
                        <p className="mt-2 text-sm text-gray-400">
                            Your trusted platform for crypto & stock trading. Real-time data, smart analytics, secure trades.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-green-400 transition">Dashboard</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">Markets</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">Portfolio</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
                        <div className="flex space-x-4"> 
                            <a href="#" className="hover:text-green-400">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="hover:text-green-400">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="hover:text-green-400">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="hover:text-green-400">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-center text-gray-500">
                    &copy; {new Date().getFullYear()} TradeX. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
