import React, { useState, useEffect, useRef } from 'react';
import './AdminHeader.css';

const AdminHeader = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setOpen(!open);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="admin-header">
            <div className="admin-logo">🥬 Admin - Rau Củ Tươi</div>
            <div className="admin-user" ref={dropdownRef}>
                <span className="user-icon" onClick={toggleDropdown}>👤</span>
                {open && (
                    <div className="admin-dropdown">
                        <button onClick={() => alert('Đã đăng xuất')}>Đăng xuất</button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default AdminHeader;
