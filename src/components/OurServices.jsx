import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Clapperboard, Box, Camera, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        icon: <Clapperboard />,
        title: "End-to-End Content Service",
        description:
            "From concept to final delivery, we handle scripting, shooting, editing, and publishing — ensuring your content performs across every platform.",
    },
    {
        icon: <Box />,
        title: "3D, VFX & Animations",
        description:
            "High-impact visuals, motion graphics, and cinematic VFX that elevate your story beyond the ordinary.",
    },
    {
        icon: <Camera />,
        title: "Shoots & Films",
        location: "Indore & Hyderabad",
        description:
            "Professional production services including commercial shoots, brand films, and cinematic storytelling — executed on-ground in Indore and Hyderabad.",
    },
    {
        icon: <Globe />,
        title: "Website Design",
        description:
            "Strategic, high-converting websites built to reflect your brand and turn visitors into customers.",
    },
];

export default function OurServices() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const container = containerRef.current;
        if (!container) return;

        const title = container.querySelector('.section-title');
        const cards = container.querySelectorAll('.service-card');

        // Title animation — subtle rise + fade
        gsap.fromTo(title,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: container,
                    start: 'top 85%',
                    toggleActions: 'restart none none reverse',
                },
            }
        );

        // Cards — alternating swipe in from left/right
        cards.forEach((card, i) => {
            // Grid is 2 columns: left column (i%2===0) swipes from left, right column from right
            const fromLeft = i % 2 === 0;

            gsap.fromTo(card,
                {
                    x: fromLeft ? -120 : 120,
                    opacity: 0,
                    rotation: fromLeft ? -3 : 3,
                    scale: 0.92,
                },
                {
                    x: 0,
                    opacity: 1,
                    rotation: 0,
                    scale: 1,
                    duration: 1.2,
                    delay: 0.3 + i * 0.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: container,
                        start: 'top 80%',
                        toggleActions: 'restart none none reverse',
                    },
                }
            );
        });

        // CTA button — fade up
        const cta = container.querySelector('.btn-cta-ourser');
        if (cta) {
            gsap.fromTo(cta,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    delay: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: container,
                        start: 'top 55%',
                        toggleActions: 'restart none none reverse',
                    },
                }
            );
        }
    }, { scope: containerRef });

    return (
        <div className="ourser-container" ref={containerRef}>
            <h2 className="section-title">
                Our Services
            </h2>

            <div className="services-grid">
                {services.map((service, i) => (
                    <div className="service-card" key={i}>
                        <div className="service-icon">{service.icon}</div>
                        <div className="service-card-content">
                            <h3 className="service-title">
                                {service.title}
                                {service.location && (
                                    <span className="service-location">{service.location}</span>
                                )}
                            </h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                        <div className="service-number">0{i + 1}</div>
                    </div>
                ))}
            </div>
            <Link to="/contact" className="btn-cta-ourser">Let's Connect</Link>
        </div>
    );
}