import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('student');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await fetch('http://localhost:8080/api/auth/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, role })
            });

            const data = await res.json();

            if (res.ok) {
                setSuccess(true);
            } else {
                setError(data.message || "Failed to send reset link. Please try again.");
            }
        } catch (err) {
            console.error("Forgot password error", err);
            setError("Unable to connect to server. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-header">
                        <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1rem' }}>📧</div>
                        <h1 className="auth-title">Check Your Email</h1>
                        <p className="auth-subtitle">
                            We've sent a password reset link to <strong>{email}</strong>
                        </p>
                    </div>

                    <div className="alert alert-info">
                        <span>ℹ️</span>
                        <span>Please check your inbox and spam folder. The link will expire in 24 hours.</span>
                    </div>

                    <Link to="/login">
                        <button className="btn-primary">
                            Back to Login
                        </button>
                    </Link>

                    <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                            Didn't receive the email?{' '}
                            <span
                                className="auth-link"
                                onClick={() => {
                                    setSuccess(false);
                                    setEmail('');
                                }}
                            >
                                Try again
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1rem' }}>🔑</div>
                    <h1 className="auth-title">Forgot Password?</h1>
                    <p className="auth-subtitle">No worries! We'll send you reset instructions</p>
                </div>

                {error && (
                    <div className="alert alert-error">
                        <span>⚠️</span>
                        <span>{error}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    {/* Role Selection */}
                    <div className="input-group">
                        <label>Account Type</label>
                        <div className="role-selector">
                            <div
                                className={`role-option ${role === 'student' ? 'active' : ''}`}
                                onClick={() => setRole('student')}
                            >
                                <div className="role-option-icon">🎓</div>
                                <div className="role-option-label">Student</div>
                            </div>
                            <div
                                className={`role-option ${role === 'teacher' ? 'active' : ''}`}
                                onClick={() => setRole('teacher')}
                            >
                                <div className="role-option-icon">👨‍🏫</div>
                                <div className="role-option-label">Teacher</div>
                            </div>
                        </div>
                    </div>

                    {/* Email Input */}
                    <div className="input-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your registered email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                            Enter the email address associated with your account
                        </p>
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
                                Sending Reset Link...
                            </span>
                        ) : (
                            'Send Reset Link'
                        )}
                    </button>

                    {/* Back to Login */}
                    <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                        <Link to="/login" className="auth-link" style={{ fontSize: '0.95rem' }}>
                            ← Back to Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
