import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Carousel9 from './carousel9';
import GraphicsGallery from './GraphicsGallery';
import VideoReelsGallery from './VideoReelsGallery';

gsap.registerPlugin(ScrollTrigger);

export default function OurWork() {
    const [activeTab, setActiveTab] = useState('reels');
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const tabsRef = useRef(null);
    const contentRef = useRef(null);

    // Intersection observer for background video
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVideoLoaded(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '400px', // Load well before it comes into view to ensure smooth playback
                threshold: 0
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Refresh scroll trigger positions whenever tab changes (panel height changes)
    useEffect(() => {
        const id = setTimeout(() => ScrollTrigger.refresh(), 50);
        return () => clearTimeout(id);
    }, [activeTab]);

    // One-time entrance animations for banner, tabs and content area
    useEffect(() => {
        const ctx = gsap.context(() => {
            // "Our Work" title slides up from slight offset
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 60, scale: 0.96 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            // Tab buttons stagger in
            gsap.fromTo(
                tabsRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: tabsRef.current,
                        start: 'top 88%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            // Content panel fades in
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const tabs = [
        { id: 'reels', label: 'Videos / Reel' },
        { id: 'graphics', label: 'Graphics and 3D' },
        { id: 'motion', label: 'Motion Graphics' }
    ];

    return (
        <div id="work" ref={sectionRef}>
            <div className="work-strip relative bg-[#111] overflow-hidden">
                {isVideoLoaded && (
                    <video
                        src="/Comp.mp4"
                        className="work-video absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ pointerEvents: 'none' }}
                    />
                )}

                <div className="work-title" ref={titleRef}>Our Work</div>
            </div>

            <div className="work-section">
                <div className="work-tabs-container" ref={tabsRef}>
                    <div className="work-tabs">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`work-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="work-content" ref={contentRef}>
                    {activeTab === 'motion' && (
                        <div className="work-panel">
                            <Carousel9 />
                        </div>
                    )}
                    {activeTab === 'reels' && (
                        <div className="work-panel">
                            <VideoReelsGallery />
                        </div>
                    )}
                    {activeTab === 'graphics' && (
                        <div className="work-panel">
                            <GraphicsGallery />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
