import './Dashboard.css';

const Dashboard = () => {
    return (
        <div>
            <h1>📊 Bảng điều khiển</h1>
            <div className="dashboard-cards">
                <div className="card">
                    <h2>Đơn hàng</h2>
                    <p>120</p>
                </div>
                <div className="card">
                    <h2>Khách hàng</h2>
                    <p>58</p>
                </div>
                <div className="card">
                    <h2>Sản phẩm</h2>
                    <p>34</p>
                </div>
                <div className="card">
                    <h2>Doanh thu</h2>
                    <p>12.500.000đ</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
