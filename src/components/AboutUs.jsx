import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
// import InstagramIcon from '@mui/icons-material/Instagram';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { color } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const founders = [

    {
        name: 'Himanshu Auditto',
        designation: 'Design & Creative Head',
        subtitle: 'Filmmaker & Motion Graphics Specialist',
        bio: (
            <>
                <strong style={{ color: "var(--bg--beige)" }}>Himanshu</strong>, a bachelor's in multimedia undergraduate based in Hyderabad, is a <strong style={{ color: "var(--bg--beige)" }}>filmmaker</strong> and <strong style={{ color: "var(--bg--beige)" }}>motion graphics specialist</strong> focused on purpose-driven visuals. With a sharp cinematic eye and technical precision, he has directed <strong style={{ color: "var(--bg--beige)" }}>2+ award-winning short films</strong> and crafts content designed to deliver impact.
            </>
        ),
        image: '/himanshu.png',
    },
    {
        name: 'Gourav Yadav',
        designation: 'Head of Content & Operations',
        subtitle: 'Content Creator | 16K+ YouTube Subscribers',
        bio: (
            <>
                <strong style={{ color: "var(--bg--beige)" }}>Gourav Yadav</strong>, an engineering undergraduate based in Indore, is a content creator and growth strategist with <strong style={{ color: "var(--bg--beige)" }}>16K+ YouTube subscribers</strong> and <strong style={{ color: "var(--bg--beige)" }}>4 years</strong> of hands - on experience building digital brands.He has worked with multiple clients to scale their presence through creative storytelling and <strong style={{ color: "var(--bg--beige)" }}>performance - driven content</strong>.
            </>
        ),
        image: '/gourav.png',
    }
];

export default function AboutUs() {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const section = sectionRef.current;
        if (!section) return;

        const title = section.querySelector('.about-title');
        const text = section.querySelector('.about-text');

        gsap.fromTo(title,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 65%',
                    toggleActions: 'restart none none reverse',
                },
            }
        );

        gsap.fromTo(text,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                delay: 0.3,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 60%',
                    toggleActions: 'restart none none reverse',
                },
            }
        );

        // Founder cards — cinematic reveal
        const founderCards = section.querySelectorAll('.founder-card');
        founderCards.forEach((card, i) => {
            const imgWrap = card.querySelector('.founder-image-wrap');
            const info = card.querySelector('.founder-info');

            gsap.fromTo(imgWrap,
                { x: i === 0 ? -60 : 60, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 65%',
                        toggleActions: 'restart none none reverse',
                    },
                }
            );

            gsap.fromTo(info,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 60%',
                        toggleActions: 'restart none none reverse',
                    },
                }
            );
        });
    }, { scope: sectionRef });

    return (
        <section className="about-section" id="about" ref={sectionRef}>
            <h2 className="about-title">About Us</h2>
            <p className="about-text">
                The Kontent Company is a full-stack, end-to-end post-production and content-first marketing agency.
                We help brands and creators build strong personal brands through strategic storytelling and high-impact content.
                Our edits don't just look good — they communicate, connect, and convert.
            </p>

            <div className="founders-container">
                {founders.map((founder, i) => (
                    <div
                        className={`founder-card ${i % 2 !== 0 ? 'founder-card--reversed' : ''}`}
                        key={i}
                    >
                        <div className="founder-image-wrap">
                            <img
                                src={founder.image}
                                alt={founder.name}
                                className="founder-image"
                            />
                            <div className="founder-overlay">
                                <h3 className="founder-name">{founder.name}</h3>
                                <p className="founder-designation">{founder.designation}</p>
                            </div>
                        </div>
                        <div className="founder-info">
                            <span className="founder-subtitle">{founder.subtitle}</span>
                            <p className="founder-bio">{founder.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* <button className="btn-cta-ourser">Ready to Revamp your Brand Image? </button> */}

            {/* ── CTA ── */}
            <div className="about-cta-wrap">
                <p className="about-cta-tagline" style={{ lineHeight: "1" }}>
                    Lets create something that<em> grows your brand.</em>
                </p>
                <Link to="/contact" className="btn-cta">Connect with Us</Link>
            </div>
        </section >
    );
}
