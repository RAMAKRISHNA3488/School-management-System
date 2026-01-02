import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <div className="auth-container">
            <div className="auth-card" style={{ maxWidth: '600px' }}>
                <div className="auth-header">
                    <h1 className="auth-title">School Management System</h1>
                    <p className="auth-subtitle">Choose how you'd like to get started</p>
                </div>

                <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
                    {/* Student Card */}
                    <div
                        className="role-card"
                        onClick={() => navigate('/register/student')}
                        style={{
                            padding: '2rem',
                            border: '2px solid var(--border)',
                            borderRadius: '1rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            background: 'rgba(15, 23, 42, 0.3)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--primary)';
                            e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
                            e.currentTarget.style.transform = 'translateY(-4px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border)';
                            e.currentTarget.style.background = 'rgba(15, 23, 42, 0.3)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{ fontSize: '3rem' }}>🎓</div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                                    I'm a Student
                                </h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0 }}>
                                    Access your courses, grades, attendance, and more
                                </p>
                            </div>
                            <div style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>→</div>
                        </div>
                    </div>

                    {/* Teacher Card */}
                    <div
                        className="role-card"
                        onClick={() => navigate('/register/teacher')}
                        style={{
                            padding: '2rem',
                            border: '2px solid var(--border)',
                            borderRadius: '1rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            background: 'rgba(15, 23, 42, 0.3)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--accent)';
                            e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                            e.currentTarget.style.transform = 'translateY(-4px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border)';
                            e.currentTarget.style.background = 'rgba(15, 23, 42, 0.3)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{ fontSize: '3rem' }}>👨‍🏫</div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                                    I'm a Teacher
                                </h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0 }}>
                                    Manage classes, track attendance, grade assignments
                                </p>
                            </div>
                            <div style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>→</div>
                        </div>
                    </div>
                </div>

                <div className="divider">
                    <span>OR</span>
                </div>

                <button
                    className="btn-secondary"
                    onClick={() => navigate('/login')}
                >
                    I Already Have an Account
                </button>
            </div>
        </div>
    );
};

export default Welcome;
