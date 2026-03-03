import { useRef, useCallback } from 'react';
import logoSrc from '../../public/logo.svg';

export default function Footer() {
    const glowRef = useRef(null);

    const handleMouseMove = useCallback((e) => {
        if (!glowRef.current) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        glowRef.current.style.opacity = '1';
        glowRef.current.style.background =
            `radial-gradient(350px circle at ${x}px ${y}px, rgba(252, 110, 32, 0.10), transparent 60%)`;
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (!glowRef.current) return;
        glowRef.current.style.opacity = '0';
    }, []);

    return (
        <footer
            className="footer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="footer-glow" ref={glowRef} />
            <div className="footer-inner">
                {/* Left — Logo & branding */}
                <div className="footer-brand">
                    <a href="/" className="footer-logo" aria-label="Kontent Company Home">
                        <img src={logoSrc} alt="Kontent Company Logo" />
                    </a>
                    <h2 className="footer-wordmark">
                        KoCo<span>.</span>
                    </h2>
                    <p className="footer-tagline">
                        Crafting stories that connect, resonate, and leave an impact.
                    </p>
                </div>

                {/* Right — Contact info columns */}
                <div className="footer-links">
                    <div className="footer-col">
                        <h4 className="footer-col-title">Contact</h4>
                        <ul>
                            <li><a href="tel:+917974385755">+91 79743 85755</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-col-title">Email</h4>
                        <ul>
                            <li><a href="mailto:info@kontentcompany.com">info@kontentcompany.com</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-col-title">Address</h4>
                        <ul>
                            <li>Indore, Madhya Pradesh</li>
                            <li>Hyderabad, Telangana</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Kontent Company. All rights reserved.</p>
            </div>
        </footer>
    );
}
