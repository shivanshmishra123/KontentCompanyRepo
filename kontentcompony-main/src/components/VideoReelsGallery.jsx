import { memo, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Vimeo embed with controls, deferred loading via IntersectionObserver
const VimeoEmbed = ({ id, aspectClass, className = '' }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '200px', // Load it slightly before it comes into view
                threshold: 0
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden ${aspectClass} ${className} bg-[#1a1a1a] flex items-center justify-center`}
        >
            {!isLoaded ? (
                // A soft pulsating skeleton loader before the video loads
                <div className="absolute inset-0 bg-[#2a2a2a] animate-pulse">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffffff05] to-transparent skeleton-shine"></div>
                </div>
            ) : (
                <iframe
                    src={`https://player.vimeo.com/video/${id}?autoplay=0&loop=1&muted=0&controls=1&title=0&byline=0&portrait=0&badge=0&pip=0`}
                    frameBorder="0"
                    allow="fullscreen"
                    allowFullScreen
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                    }}
                />
            )}
        </div>
    );
};

const VideoReelsGallery = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray('.vr-anim', containerRef.current);

            items.forEach((el) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.9,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 88%',
                            end: 'top 40%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full max-w-7xl mx-auto px-4 py-8 space-y-24"
        >
            {/* ROW 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
                <div className="vr-anim md:col-span-7 flex flex-col space-y-6 md:mt-16">
                    <div className="overflow-hidden rounded-2xl shadow-sm transition-all duration-300 transform border-2 border-transparent hover:scale-[1.02] hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] focus-within:scale-[1.02] focus-within:border-orange-500 focus-within:shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                        <VimeoEmbed id="1169514031" aspectClass="aspect-video" />
                    </div>
                    <div className="flex items-center space-x-4 px-2">
                        <h3
                            className="text-2xl md:text-3xl font-semibold tracking-tighter opacity-90"
                            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-beige)' }}
                        >
                            Cinematic Shots &amp; Edits
                        </h3>
                    </div>
                </div>

                <div className="vr-anim md:col-span-5 flex justify-center md:justify-end">
                    <div className="overflow-hidden rounded-2xl shadow-sm transition-all duration-300 transform border-2 border-transparent hover:scale-[1.02] hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] focus-within:scale-[1.02] focus-within:border-orange-500 focus-within:shadow-[0_0_20px_rgba(249,115,22,0.4)] w-full max-w-[400px]">
                        <VimeoEmbed id="1169514241" aspectClass="aspect-[9/16]" />
                    </div>
                </div>
            </div>

            {/* ROW 2 */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
                <div className="vr-anim w-full md:w-1/3 px-2 flex flex-col items-end space-y-4">
                    <div className="h-[1px] w-16 bg-primary/40"></div>
                    <h3
                        className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter opacity-90 leading-[1.1] text-right"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-beige)' }}
                    >
                        Trailer for<br className="hidden md:block" /> OpenBox<br className="hidden md:block" />Production
                    </h3>
                </div>
                <div className="vr-anim w-full md:w-2/3 overflow-hidden rounded-2xl shadow-sm transition-all duration-300 transform border-2 border-transparent hover:scale-[1.02] hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] focus-within:scale-[1.02] focus-within:border-orange-500 focus-within:shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                    <VimeoEmbed id="1169514541" aspectClass="aspect-video" />
                </div>
            </div>

            {/* ROW 3 */}
            <div className="flex flex-col space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {['1169514587', '1169514753', '1169514817'].map((id, idx) => (
                        <div
                            key={idx}
                            className="vr-anim overflow-hidden rounded-2xl shadow-sm transition-all duration-300 transform border-2 border-transparent hover:scale-[1.02] hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] focus-within:scale-[1.02] focus-within:border-orange-500 focus-within:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                        >
                            <VimeoEmbed id={id} aspectClass="aspect-[9/16]" />
                        </div>
                    ))}
                </div>

                <div className="vr-anim flex justify-center items-center space-x-4 pt-4">
                    <div className="h-[1px] w-8 md:w-16 bg-primary/40"></div>
                    <h3
                        className="text-xl md:text-2xl font-semibold tracking-tighter opacity-90 text-center"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-beige)' }}
                    >
                        Brand Promotion Reels
                    </h3>
                    <div className="h-[1px] w-8 md:w-16 bg-primary/40"></div>
                </div>
            </div>
        </div>
    );
};

export default memo(VideoReelsGallery);
