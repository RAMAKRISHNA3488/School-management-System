import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
<<<<<<< HEAD
    const [role, setRole] = useState('student');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
=======
    const [role, setRole] = useState('admin');
    const [email, setEmail] = useState(''); // using email for student/teacher
    const [password, setPassword] = useState('');
>>>>>>> 5275d5695f3ce52e16f80362a1fb0bb3568fd146
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
<<<<<<< HEAD
        setLoading(true);
        setError('');
=======

        // Quick admin bypass as requested to match "fixed logins" behavior if API is down or just for simplicity
        // But implementation plan says use API. So we try API first.
>>>>>>> 5275d5695f3ce52e16f80362a1fb0bb3568fd146

        try {
            const res = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, role })
            });

            const data = await res.json();

            if (res.ok) {
<<<<<<< HEAD
                localStorage.setItem('user', JSON.stringify(data));
                navigate(`/${data.role}/dashboard`);
            } else {
                setError(data.message || "Login Failed. Please check your credentials.");
            }
        } catch (err) {
            console.error("Login error", err);
            // Fallback for Admin if backend not running
=======
                // Store user info if needed
                localStorage.setItem('user', JSON.stringify(data));
                navigate(`/${data.role}/dashboard`);
            } else {
                alert(data.message || "Login Failed");
            }
        } catch (err) {
            console.error("Login error", err);
            // Fallback for Admin if backend not running (Development convenience, optional)
>>>>>>> 5275d5695f3ce52e16f80362a1fb0bb3568fd146
            if (role === 'admin' && email === 'admin' && password === 'admin') {
                navigate('/admin/dashboard');
                return;
            }
<<<<<<< HEAD
            setError("Unable to connect to server. Please try again later.");
        } finally {
            setLoading(false);
=======
            alert("Error connecting to server");
>>>>>>> 5275d5695f3ce52e16f80362a1fb0bb3568fd146
        }
    };

    return (
<<<<<<< HEAD
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h1 className="auth-title">Welcome Back</h1>
                    <p className="auth-subtitle">Sign in to continue to your dashboard</p>
                </div>

                {error && (
                    <div className="alert alert-error">
                        <span>⚠️</span>
                        <span>{error}</span>
                    </div>
                )}

                <form onSubmit={handleLogin}>
                    {/* Role Selection */}
                    <div className="input-group">
                        <label>Login As</label>
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

                    {/* Email/Username Input */}
                    <div className="input-group">
                        <label htmlFor="email">
                            {role === 'admin' ? 'Username' : 'Email Address'}
                        </label>
                        <input
                            id="email"
                            type={role === 'admin' ? 'text' : 'email'}
                            placeholder={role === 'admin' ? 'Enter your username' : 'Enter your email'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="input-group">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <label htmlFor="password">Password</label>
                            {role !== 'admin' && (
                                <Link to="/forgot-password" className="auth-link" style={{ fontSize: '0.875rem' }}>
                                    Forgot Password?
                                </Link>
                            )}
                        </div>
                        <div style={{ position: 'relative' }}>
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn-primary"
                        disabled={loading}
                        style={{ marginTop: '0.5rem' }}
                    >
                        {loading ? (
                            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                <span className="spinner"></span>
                                Signing in...
                            </span>
                        ) : (
                            'Sign In'
                        )}
                    </button>

                    {/* Register Link */}
                    {role !== 'admin' && (
                        <>
                            <div className="divider">
                                <span>OR</span>
                            </div>
                            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                Don't have an account?{' '}
                                <Link
                                    to={role === 'teacher' ? '/register/teacher' : '/register/student'}
                                    className="auth-link"
                                >
                                    Create Account
                                </Link>
                            </p>
                        </>
=======
        <div className="h-screen w-full flex items-center justify-center bg-dark">
            <div className="card w-full max-w-md glass">
                <h1 className="text-2xl font-bold text-center mb-6">Welcome Back</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-muted mb-2">Login As</label>
                        <select
                            className="input"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="admin">Admin</option>
                            <option value="teacher">Teacher</option>
                            <option value="student">Student</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-muted mb-2">{role === 'admin' ? 'Username' : 'Email'}</label>
                        <input
                            type="text"
                            className="input"
                            placeholder={role === 'admin' ? 'admin' : 'user@example.com'}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-muted mb-2">Password</label>
                        <input
                            type="password"
                            className="input"
                            placeholder="Enter password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn w-full mb-4">Login</button>

                    {role !== 'admin' && (
                        <p className="text-center text-muted text-sm">
                            Don't have an account? <Link to="/register" className="text-primary hover:underline">Register here</Link>
                        </p>
>>>>>>> 5275d5695f3ce52e16f80362a1fb0bb3568fd146
                    )}
                </form>
            </div>
        </div>
    );
};

export default Login;
