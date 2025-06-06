import React from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import './Home.css';

const Home = () => {
    return (
        <>
            <Header />
            <main className="home">
                <section className="hero">
                    <h1>Chào mừng đến với Rau Củ Tươi</h1>
                    <p>Chuyên cung cấp rau củ quả sạch, tươi ngon từ nông trại đến bàn ăn.</p>
                </section>

                <section className="products-preview">
                    <h2>Sản phẩm nổi bật</h2>
                    <div className="product-grid">
                        <div className="product-card">
                            <img src="../../../assets/images/carot.webp" alt="Cà rốt" />
                            <h3>Cà rốt Đà Lạt</h3>
                            <p>25.000đ / kg</p>
                        </div>
                        <div className="product-card">
                            <img src="../../../assets/images/carot.webp" alt="Cà rốt" />
                            <h3>Rau cải xanh</h3>
                            <p>15.000đ / bó</p>
                        </div>
                        <div className="product-card">
                            <img src="../../../assets/images/cachua.webp" alt="Cà chua" />
                            <h3>Cà chua bi</h3>
                            <p>20.000đ / kg</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;
