import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Loader2 } from 'lucide-react';
import logoSrc from '../../public/logo.svg';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxQ5aO7h30jAgOYajNld6AllF0-X3-Ux_4SG_Aw3U9fmdEpJJNTFcKO7KndN3MHyJA9/exec';

const serviceOptions = [
    'End to End Content Production',
    'Video Editing & Post Production',
    '3D VFX & Motion Graphics',
    'Shoot and Film Production',
    'Website Design',
    'Graphic Design',
    'Social Media Management',
];

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        otherService: '',
        description: '',
        budget: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleServiceChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            service: value,
            otherService: value === 'Other' ? prev.otherService : '',
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            service: formData.service === 'Other'
                ? `Other: ${formData.otherService}`
                : formData.service,
            description: formData.description,
            budget: formData.budget,
        };

        try {
            await fetch(APPS_SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: { 'Content-Type': 'text/plain' },
            });
        } catch (err) {
            console.warn('Form submit network note:', err);
        } finally {
            setSubmitting(false);
        }

        setSubmitted(true);
    };

    return (
        <div className="contact-page">
            {/* Background grid overlay */}
            <div className="contact-grid-overlay" />

            {/* Ambient glow */}
            <div className="contact-glow" />

            {/* Top bar */}
            <header className="contact-header">
                <Link to="/" className="contact-back-link" aria-label="Back to Home">
                    <ArrowLeft size={18} />
                    <span>Back</span>
                </Link>
                <Link to="/" className="contact-logo" aria-label="Kontent Company Home">
                    <img src={logoSrc} alt="Kontent Company Logo" />
                </Link>
            </header>

            <main className="contact-main">
                {!submitted ? (
                    <div className="contact-card">
                        {/* Orange accent line */}
                        <div className="contact-card-accent" />

                        <div className="contact-card-header">
                            <h1 className="contact-card-title">
                                Let's <span>Connect</span>
                            </h1>
                            <p className="contact-card-subtitle">
                                Tell us about your project and we'll get back to&nbsp;you.
                            </p>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                            {/* Name */}
                            <div className="form-group">
                                <label className="form-label" htmlFor="name">
                                    Name <span className="form-required">*</span>
                                </label>
                                <input
                                    className="form-input"
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    autoComplete="name"
                                />
                            </div>

                            {/* Email */}
                            <div className="form-group">
                                <label className="form-label" htmlFor="email">
                                    Email Address <span className="form-required">*</span>
                                </label>
                                <input
                                    className="form-input"
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    autoComplete="email"
                                />
                            </div>

                            {/* Contact Number */}
                            <div className="form-group">
                                <label className="form-label" htmlFor="phone">
                                    Contact Number <span className="form-required">*</span>
                                </label>
                                <input
                                    className="form-input"
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="+91 00000 00000"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    autoComplete="tel"
                                />
                            </div>

                            {/* Company / Brand */}
                            <div className="form-group">
                                <label className="form-label" htmlFor="company">
                                    Company / Brand Name
                                    <span className="form-optional">(if applicable)</span>
                                </label>
                                <input
                                    className="form-input"
                                    type="text"
                                    id="company"
                                    name="company"
                                    placeholder="Your company or brand"
                                    value={formData.company}
                                    onChange={handleChange}
                                    autoComplete="organization"
                                />
                            </div>

                            {/* Services Required */}
                            <fieldset className="form-group form-fieldset">
                                <legend className="form-label">
                                    Services Required <span className="form-required">*</span>
                                </legend>
                                <div className="form-radio-grid">
                                    {serviceOptions.map((option) => (
                                        <label className="form-radio-label" key={option}>
                                            <input
                                                type="radio"
                                                name="service"
                                                className="form-radio"
                                                value={option}
                                                checked={formData.service === option}
                                                onChange={() => handleServiceChange(option)}
                                                required={formData.service === ''}
                                            />
                                            <span className="form-radio-custom" />
                                            <span className="form-radio-text">{option}</span>
                                        </label>
                                    ))}
                                    {/* Other */}
                                    <label className="form-radio-label">
                                        <input
                                            type="radio"
                                            name="service"
                                            className="form-radio"
                                            value="Other"
                                            checked={formData.service === 'Other'}
                                            onChange={() => handleServiceChange('Other')}
                                        />
                                        <span className="form-radio-custom" />
                                        <span className="form-radio-text">Other</span>
                                    </label>
                                </div>
                                {formData.service === 'Other' && (
                                    <input
                                        className="form-input form-input-other"
                                        type="text"
                                        name="otherService"
                                        placeholder="Please specify the service"
                                        value={formData.otherService}
                                        onChange={handleChange}
                                    />
                                )}
                            </fieldset>

                            {/* Project Description */}
                            <div className="form-group">
                                <label className="form-label" htmlFor="description">
                                    Project Description
                                </label>
                                <textarea
                                    className="form-input form-textarea"
                                    id="description"
                                    name="description"
                                    placeholder="Brief about your project, goals, and timeline…"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows={4}
                                />
                            </div>

                            {/* Estimated Budget */}
                            <div className="form-group">
                                <label className="form-label" htmlFor="budget">
                                    Estimated Budget
                                </label>
                                <input
                                    className="form-input"
                                    type="text"
                                    id="budget"
                                    name="budget"
                                    placeholder="e.g. ₹50,000 – ₹1,00,000"
                                    value={formData.budget}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Submit */}
                            <button type="submit" className="btn-cta contact-submit" id="contact-submit" disabled={submitting}>
                                {submitting ? (
                                    <>
                                        <Loader2 size={16} className="form-spinner" />
                                        <span>Submitting…</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Submit</span>
                                        <Send size={16} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                ) : (
                    /* ── Success State ── */
                    <div className="contact-card contact-success">
                        <div className="contact-card-accent" />
                        <div className="contact-success-inner">
                            <div className="contact-success-icon">✓</div>
                            <h2 className="contact-card-title">
                                Thank <span>You!</span>
                            </h2>
                            <p className="contact-card-subtitle">
                                We've received your details and will get back to you within 24 hours.
                            </p>
                            <Link to="/" className="btn-cta" style={{ marginTop: '1.5rem', display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}>
                                <ArrowLeft size={16} />
                                Back to Home
                            </Link>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
