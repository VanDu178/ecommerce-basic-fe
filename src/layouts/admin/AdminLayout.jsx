import React from 'react';
import { Outlet } from "react-router-dom";
import AdminHeader from '../../components/AdminHeader/AdminHeader';
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar';
import './AdminLayout.css';

const AdminLayout = () => {
    return (
        <div className="admin-container">
            <AdminHeader />
            <div className="admin-main">
                <AdminSidebar />
                <div className="admin-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
