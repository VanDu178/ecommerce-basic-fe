import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Đóng dropdown khi click ngoài
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="header">
            <div className="logo">🍀 Rau Củ Tươi</div>

            <nav className="nav">
                <a href="/">Trang chủ</a>
                <a href="/products">Sản phẩm</a>
                <a href="/about">Giới thiệu</a>
                <a href="/contact">Liên hệ</a>
                <a href="/cart" className="cart">🛒</a>

                <div className="user-dropdown" ref={dropdownRef}>
                    <span className="user-icon" onClick={toggleDropdown}>👤</span>
                    {isOpen && (
                        <div className="dropdown-menu">
                            <a href="/login">Đăng nhập</a>
                            <a href="/register">Đăng ký</a>
                            {/* Nếu đã đăng nhập thì có thể thay bằng "Thông tin", "Đăng xuất" */}
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
