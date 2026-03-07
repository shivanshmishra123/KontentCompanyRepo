import { memo } from 'react';
import { motion } from 'framer-motion';

import img1 from '../../public/graphics3d/1.jpg';
import img2 from '../../public/graphics3d/2.jpg';
import img3 from '../../public/graphics3d/3.jpg';
import img4 from '../../public/graphics3d/4.jpg';
import img5 from '../../public/graphics3d/5.jpg';
import img6 from '../../public/graphics3d/6.jpg';
import img7 from '../../public/graphics3d/7.jpg';
import img8 from '../../public/graphics3d/8.jpg';
import img9 from '../../public/graphics3d/9.jpg';
import img10 from '../../public/graphics3d/10.jpg';
import img11 from '../../public/graphics3d/11.jpg';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }
};

/* ── Grid item with hover effects ── */
const GridImage = ({ src, alt, style }) => (
    <motion.div
        variants={fadeInUp}
        className="relative group overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
        style={style}
    >
        <img
            src={src}
            alt={alt}
            className="w-full h-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-[1.04]"
            loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
    </motion.div>
);

const GraphicsGallery = () => {
    return (
        <div className="graphics-gallery-wrap">
            <motion.div
                className="w-full max-w-7xl mx-auto px-4 py-8 space-y-32"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                variants={{
                    visible: {
                        transition: { staggerChildren: 0.12 }
                    }
                }}
            >
                {/* ════════ SECTION 1: Branding & Mock ════════ */}
                <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
                    {/* Left: Title */}
                    <motion.div variants={fadeInUp} className="md:w-1/4 flex flex-col space-y-4">
                        <div className="h-[1px] w-16 bg-primary/40"></div>
                        <h3
                            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter leading-[1.1]"
                            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-beige)' }}
                        >
                            Branding & Mockups
                        </h3>
                    </motion.div>

                    {/* Right: Grid — Row 1: 2 images, Row 2: 3 images */}
                    <div className="md:w-3/4 flex flex-col gap-3">
                        {/* Top row — 2 images */}
                        <div className="grid grid-cols-2 gap-3">
                            <GridImage src={img10} alt="Branding 1" />
                            <GridImage src={img7} alt="Branding 2" />
                        </div>
                        {/* Bottom row — 3 images */}
                        <div className="grid grid-cols-3 gap-3">
                            <GridImage src={img11} alt="Branding 3" />
                            <GridImage src={img6} alt="Branding 4" />
                            <GridImage src={img8} alt="Branding 5" />
                        </div>
                    </div>
                </div>

                {/* ════════ SECTION 2: 3D Renders Collage ════════ */}
                <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
                    {/* Left: Title */}
                    <motion.div variants={fadeInUp} className="md:w-1/4 flex flex-col space-y-4">
                        <div className="h-[1px] w-16 bg-primary/40"></div>
                        <h3
                            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter leading-[1.1]"
                            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-beige)' }}
                        >
                            3D Renders
                        </h3>
                    </motion.div>

                    {/* Right: Collage Grid */}
                    <div className="md:w-3/4 flex flex-col gap-3">
                        {/* Row 1 — square (4.jpg) + landscape (1.jpg) */}
                        <div className="grid gap-3" style={{ gridTemplateColumns: '1fr 2fr' }}>
                            <GridImage src={img4} alt="3D Render 1" />
                            <GridImage src={img1} alt="3D Render 2" />
                        </div>
                        {/* Row 2 — wide banner (5.jpg) full width */}
                        <div>
                            <GridImage src={img5} alt="3D Render 3" />
                        </div>
                        {/* Row 3 — three landscape images */}
                        <div className="grid grid-cols-3 gap-3">
                            <GridImage src={img3} alt="3D Render 4" />
                            <GridImage src={img2} alt="3D Render 5" />
                            <GridImage src={img9} alt="3D Render 6" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default memo(GraphicsGallery);
