import React, { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';

const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const calculatePasswordStrength = (password) => {
        if (password.length < 6) return '';
        if (password.length < 8) return 'weak';
        if (password.length < 12 && /[A-Z]/.test(password) && /[0-9]/.test(password)) return 'medium';
        if (password.length >= 12 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) return 'strong';
        return 'medium';
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordStrength(calculatePasswordStrength(e.target.value));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Validation
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters long!");
            return;
        }

        if (!token) {
            setError("Invalid or expired reset link!");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch('http://localhost:8080/api/auth/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, newPassword: password })
            });

            const data = await res.json();

            if (res.ok) {
                setSuccess(true);
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            } else {
                setError(data.message || "Failed to reset password. Link may be expired.");
            }
        } catch (err) {
            console.error("Reset password error", err);
            setError("Unable to connect to server. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    if (!token) {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-header">
                        <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1rem' }}>⚠️</div>
                        <h1 className="auth-title">Invalid Link</h1>
                        <p className="auth-subtitle">This password reset link is invalid or has expired</p>
                    </div>

                    <Link to="/forgot-password">
                        <button className="btn-primary">
                            Request New Link
                        </button>
                    </Link>

                    <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                        <Link to="/login" className="auth-link">
                            Back to Login
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    if (success) {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-header">
                        <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1rem' }}>✅</div>
                        <h1 className="auth-title">Password Reset Successful!</h1>
                        <p className="auth-subtitle">Your password has been successfully reset</p>
                    </div>

                    <div className="alert alert-success">
                        <span>✅</span>
                        <span>You can now login with your new password</span>
                    </div>

                    <Link to="/login">
                        <button className="btn-primary">
                            Go to Login
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1rem' }}>🔐</div>
                    <h1 className="auth-title">Reset Your Password</h1>
                    <p className="auth-subtitle">Enter your new password below</p>
                </div>

                {error && (
                    <div className="alert alert-error">
                        <span>⚠️</span>
                        <span>{error}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    {/* New Password */}
                    <div className="input-group">
                        <label htmlFor="password">New Password</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Create a strong password"
                                value={password}
                                onChange={handlePasswordChange}
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
                        <label htmlFor="confirmPassword">Confirm New Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            placeholder="Re-enter your new password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password Requirements */}
                    <div className="alert alert-info" style={{ fontSize: '0.85rem' }}>
                        <div>
                            <strong>Password must contain:</strong>
                            <ul style={{ marginTop: '0.5rem', marginLeft: '1.25rem', marginBottom: 0 }}>
                                <li>At least 6 characters</li>
                                <li>Uppercase and lowercase letters (recommended)</li>
                                <li>Numbers and special characters (recommended)</li>
                            </ul>
                        </div>
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
                                Resetting Password...
                            </span>
                        ) : (
                            'Reset Password'
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

export default ResetPassword;
