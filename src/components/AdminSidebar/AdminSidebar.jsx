import { Link } from "react-router-dom"
import './AdminSidebar.css';

const AdminSidebar = () => {
    return (
        <aside className="admin-sidebar">
            <nav>
                <Link to="/admin">🏠 Dashboard</Link>
                <Link to="/admin/orders">📦 Đơn hàng</Link>
                <Link to="/admin/products">🥕 Sản phẩm</Link>
                <Link to="/admin/customers">👥 Khách hàng</Link>
                <Link to="/admin/reports">📈 Báo cáo</Link>
                <Link to="/admin/settings">⚙️ Cài đặt</Link>
            </nav>
        </aside>
    );
};

export default AdminSidebar;
