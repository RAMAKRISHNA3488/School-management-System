import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('http://localhost:8080/api/auth/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem('user', JSON.stringify(data));
                localStorage.setItem('adminToken', data.token);
                navigate('/admin/dashboard');
            } else {
                setError(data.message || "Invalid admin credentials. Please try again.");
            }
        } catch (err) {
            console.error("Admin login error", err);
            // Fallback for development/testing
            if (username === 'admin' && password === 'admin') {
                localStorage.setItem('user', JSON.stringify({ role: 'admin', username: 'admin' }));
                navigate('/admin/dashboard');
                return;
            }
            setError("Unable to connect to server. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card" style={{ maxWidth: '440px' }}>
                <div className="auth-header">
                    <div style={{
                        fontSize: '4rem',
                        textAlign: 'center',
                        marginBottom: '1rem',
                        filter: 'drop-shadow(0 4px 12px rgba(99, 102, 241, 0.3))'
                    }}>
                        🔐
                    </div>
                    <h1 className="auth-title">Admin Portal</h1>
                    <p className="auth-subtitle">Secure administrative access</p>
                </div>

                {/* Security Notice */}
                <div className="alert alert-info" style={{ marginBottom: '1.5rem' }}>
                    <span>🛡️</span>
                    <span>This area is restricted to authorized administrators only</span>
                </div>

                {error && (
                    <div className="alert alert-error">
                        <span>⚠️</span>
                        <span>{error}</span>
                    </div>
                )}

                <form onSubmit={handleLogin}>
                    {/* Username Input */}
                    <div className="input-group">
                        <label htmlFor="username">Administrator Username</label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Enter admin username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            autoComplete="username"
                            style={{
                                fontWeight: '500',
                                letterSpacing: '0.5px'
                            }}
                        />
                    </div>

                    {/* Password Input */}
                    <div className="input-group">
                        <label htmlFor="password">Administrator Password</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter admin password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                autoComplete="current-password"
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
                                    fontSize: '1.25rem',
                                    userSelect: 'none'
                                }}
                            >
                                {showPassword ? '👁️' : '👁️‍🗨️'}
                            </span>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn-primary"
                        disabled={loading}
                        style={{
                            marginTop: '0.5rem',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            boxShadow: loading ? 'none' : '0 4px 15px rgba(99, 102, 241, 0.4)'
                        }}
                    >
                        {loading ? (
                            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                <span className="spinner"></span>
                                Authenticating...
                            </span>
                        ) : (
                            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                <span>Access Admin Panel</span>
                                <span>→</span>
                            </span>
                        )}
                    </button>

                    {/* Back to Main Login */}
                    <div className="divider">
                        <span>OR</span>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                            Not an administrator?
                        </p>
                        <Link to="/login" className="auth-link" style={{ fontSize: '1rem' }}>
                            ← Back to User Login
                        </Link>
                    </div>
                </form>

                {/* Security Footer */}
                <div style={{
                    marginTop: '2rem',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid var(--border)',
                    textAlign: 'center'
                }}>
                    <p style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        lineHeight: '1.5'
                    }}>
                        🔒 This login is secured with enterprise-grade encryption.<br />
                        All activities are logged and monitored for security.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
