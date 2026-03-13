import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoSrc from '../../public/logo.svg'

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150 && !isMobileMenuOpen) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.nav
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: "-100%", opacity: 0 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="navbar"
            role="navigation"
            aria-label="Main navigation"
        >
            <div className={`navbar-container ${isMobileMenuOpen ? 'max-md:bg-[#1a1a1a]/95' : ''}`}>
                {/* Logo */}
                <a href="/" className="nav-logo" aria-label="Kontent Company Home" onClick={handleLinkClick}>
                    <img src={logoSrc} alt="Kontent Company Logo" />
                </a>

                {/* Navigation links (Desktop) */}
                <ul className="nav-links hidden md:flex items-center gap-10 list-none">
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#work">Our Work</a></li>
                </ul>

                {/* CTA Button (Desktop) */}
                <div className="hidden md:block">
                    <Link to="/contact" className="btn-cta">Get In Touch</Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-orange-500 p-1 flex items-center justify-center relative z-[101]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 mt-3 p-6 bg-[#181818]/90 backdrop-blur-xl border border-white/10 rounded-[24px] md:hidden flex flex-col gap-5 shadow-2xl mx-1"
                        >
                            <a href="#about" onClick={handleLinkClick} className="text-[1.1rem] font-display text-beige font-medium py-2 hover:text-orange-500 transition-colors border-b border-white/5">About Us</a>
                            <a href="#work" onClick={handleLinkClick} className="text-[1.1rem] font-display text-beige font-medium py-2 hover:text-orange-500 transition-colors border-b border-white/5">Our Work</a>
                            <Link to="/contact" onClick={handleLinkClick} className="btn-cta text-center mt-4 !w-full inline-block">Get In Touch</Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    )
}

