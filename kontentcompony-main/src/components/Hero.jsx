import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    const glowRef = useRef(null);

    const handleMouseMove = useCallback((e) => {
        if (!glowRef.current) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        glowRef.current.style.opacity = '1';
        glowRef.current.style.background =
            `radial-gradient(400px circle at ${x}px ${y}px, rgba(252, 110, 32, 0.12), transparent 50%)`;
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (!glowRef.current) return;
        glowRef.current.style.opacity = '0';
    }, []);

    // Text splitting for animation
    const titleText = "KoCo";

    return (
        <section
            className="hero"
            id="home"
            aria-label="Hero Section"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="hero-glow" ref={glowRef} />

            {/* Ambient Background Orbs */}
            <div className="absolute top-[20%] left-[15%] w-72 h-72 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-[20%] right-[15%] w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '6s' }} />

            <div className="hero-content relative z-10 w-full max-w-[900px]">
                <h1 className="hero-title flex justify-center items-end">
                    {titleText.split('').map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ y: 100, opacity: 0, rotate: 5 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.215, 0.610, 0.355, 1.000] }}
                            className="inline-block"
                        >
                            {char}
                        </motion.span>
                    ))}
                    <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: titleText.length * 0.1 + 0.2, type: 'spring' }}
                        className="text-orange-500 inline-block"
                    >
                        .
                    </motion.span>
                </h1>

                <motion.p
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                    className="hero-paragraph"
                >
                    The Kontent Company is a creative studio focused on crafting films, reels, and digital experiences that go beyond aesthetics. We don't just cut clips or add transitions — we build narratives that connect, resonate, and leave an impact
                </motion.p>
            </div>
        </section>
    )
}
