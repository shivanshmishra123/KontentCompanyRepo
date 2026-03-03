import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logoSrc from '../../public/logo.svg'

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            // Hide on scroll down, show on scroll up
            if (currentY > lastScrollY.current && currentY > 80) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            lastScrollY.current = currentY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`navbar ${hidden ? 'navbar--hidden' : ''}`}
            role="navigation"
            aria-label="Main navigation"
        >
            {/* Logo */}
            <a href="/" className="nav-logo" aria-label="Kontent Company Home">
                <img src={logoSrc} alt="Kontent Company Logo" />
            </a>

            {/* Navigation links */}
            <ul className="nav-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#work">Our Work</a></li>
            </ul>

            {/* CTA Button */}
            <Link to="/contact" className="btn-cta">Get In Touch</Link>
        </nav>
    )
}

