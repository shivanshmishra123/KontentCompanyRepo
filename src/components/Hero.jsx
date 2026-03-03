import { useRef, useCallback } from 'react';

export default function Hero() {
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
        <section
            className="hero"
            id="home"
            aria-label="Hero Section"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="hero-glow" ref={glowRef} />
            <div className="hero-content">
                <h1 className="hero-title">
                    KoCo<span>.</span>
                </h1>
                <p className="hero-paragraph">
                    The Kontent Company is a creative studio focused on crafting films, reels, and digital experiences that go beyond aesthetics. We don't just cut clips or add transitions — we build narratives that connect, resonate, and leave an impact
                </p>
            </div>
        </section>
    )
}
