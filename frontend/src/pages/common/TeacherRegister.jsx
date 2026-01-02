import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const TeacherRegister = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        qualification: '',
        subject: '',
        experience: '',
        phone: '',
        dateOfBirth: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const subjects = [
        'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English',
        'History', 'Geography', 'Computer Science', 'Physical Education', 'Arts'
    ];

    const calculatePasswordStrength = (password) => {
        if (password.length < 6) return '';
        if (password.length < 8) return 'weak';
        if (password.length < 12 && /[A-Z]/.test(password) && /[0-9]/.test(password)) return 'medium';
        if (password.length >= 12 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) return 'strong';
        return 'medium';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'password') {
            setPasswordStrength(calculatePasswordStrength(value));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Validation
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters long!");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch('http://localhost:8080/api/auth/register/teacher', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                setSuccess("Registration successful! Please wait for admin approval before logging in.");
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            } else {
                setError(data.message || "Registration failed. Please try again.");
            }
        } catch (err) {
            console.error("Registration error", err);
            setError("Unable to connect to server. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card" style={{ maxWidth: '520px' }}>
                <div className="auth-header">
                    <h1 className="auth-title">Teacher Registration</h1>
                    <p className="auth-subtitle">Join our team of educators</p>
                </div>

                {error && (
                    <div className="alert alert-error">
                        <span>⚠️</span>
                        <span>{error}</span>
                    </div>
                )}

                {success && (
                    <div className="alert alert-success">
                        <span>✅</span>
                        <span>{success}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    {/* Name Fields */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="input-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                id="firstName"
                                type="text"
                                name="firstName"
                                placeholder="Jane"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                id="lastName"
                                type="text"
                                name="lastName"
                                placeholder="Smith"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="input-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="jane.smith@teacher.school.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Phone and Date of Birth */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="input-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                id="phone"
                                type="tel"
                                name="phone"
                                placeholder="+1 234 567 8900"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="dateOfBirth">Date of Birth</label>
                            <input
                                id="dateOfBirth"
                                type="date"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Qualification and Subject */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="input-group">
                            <label htmlFor="qualification">Highest Qualification</label>
                            <select
                                id="qualification"
                                name="qualification"
                                value={formData.qualification}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Qualification</option>
                                <option value="Bachelor's">Bachelor's Degree</option>
                                <option value="Master's">Master's Degree</option>
                                <option value="PhD">PhD</option>
                                <option value="Diploma">Teaching Diploma</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label htmlFor="subject">Subject Specialization</label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Subject</option>
                                {subjects.map(subject => (
                                    <option key={subject} value={subject}>{subject}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="input-group">
                        <label htmlFor="experience">Years of Experience</label>
                        <input
                            id="experience"
                            type="number"
                            name="experience"
                            placeholder="e.g., 5"
                            min="0"
                            max="50"
                            value={formData.experience}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Create a strong password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: 'absolute',
                                    right: '1rem',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    cursor: 'pointer',
                                    color: 'var(--text-muted)',
                                    fontSize: '1.25rem'
                                }}
                            >
                                {showPassword ? '👁️' : '👁️‍🗨️'}
                            </span>
                        </div>
                        {passwordStrength && (
                            <div className="password-strength">
                                <div className={`password-strength-bar strength-${passwordStrength}`}></div>
                            </div>
                        )}
                        {passwordStrength && (
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                                Password strength: <span style={{ textTransform: 'capitalize' }}>{passwordStrength}</span>
                            </p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            placeholder="Re-enter your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn-primary"
                        disabled={loading}
                    >
                        {loading ? (
                            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                <span className="spinner"></span>
                                Creating Account...
                            </span>
                        ) : (
                            'Create Account'
                        )}
                    </button>

                    {/* Links */}
                    <div className="divider">
                        <span>OR</span>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                            Already have an account?{' '}
                            <Link to="/login" className="auth-link">Sign In</Link>
                        </p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                            Are you a student?{' '}
                            <Link to="/register/student" className="auth-link">Register as Student</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TeacherRegister;
