import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="page-container fade-in">
            <header className="hero">
                <div className="container hero-content">
                    <h1>خطة التداول الاحترافية</h1>
                    <p className="subtitle">رحلة الوصول من 100$ إلى 1490$</p>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <span className="label">رأس المال المبدئي</span>
                            <span className="value">100$</span>
                        </div>
                        <div className="stat-card main-target">
                            <span className="label">الهدف النهائي</span>
                            <span className="value">1490$</span>
                        </div>
                        <div className="stat-card">
                            <span className="label">هدف الأسبوع</span>
                            <span className="value highlight-value">10-20%</span>
                        </div>
                    </div>

                    <div className="cta-group">
                        <Link to="/strategies" className="btn">ابدأ التداول الآن</Link>
                        <Link to="/risk" className="btn btn-outline">قواعد إدارة المخاطر</Link>
                    </div>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <h2>مرحباً بك أيها المتداول</h2>
                    <p>
                        هذه المنصة صممت خصيصاً لمساعدتك على الالتزام بخطتك التداولية.
                        تذكر دائماً أن الانضباط هو مفتاح النجاح في الأسواق المالية.
                    </p>

                    <div className="features-grid">
                        <Link to="/weekly" className="feature-card">
                            <span className="icon">📅</span>
                            <h3>الخطة الأسبوعية</h3>
                            <p>جدول مهام يومي واضح لتحقيق الأهداف.</p>
                        </Link>
                        <Link to="/psychology" className="feature-card">
                            <span className="icon">🧠</span>
                            <h3>نفسية التداول</h3>
                            <p>نصائح للسيطرة على العواطف والتوتر.</p>
                        </Link>
                        <Link to="/strategies" className="feature-card">
                            <span className="icon">📈</span>
                            <h3>الاستراتيجيات</h3>
                            <p>شرح مفصل لاستراتيجيات السكالبينغ والسوينغ.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <style>{`
        .cta-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 2rem;
        }
        .btn-outline {
          background: transparent;
          border: 2px solid var(--primary-gold);
          color: var(--primary-gold);
        }
        .btn-outline:hover {
          background: var(--primary-gold);
          color: #000;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .feature-card {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.05);
          text-align: center;
          transition: 0.3s;
          display: block;
        }
        .feature-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary-gold);
        }
        .feature-card .icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }
        .feature-card h3 { color: var(--text-primary); }
      `}</style>
        </div>
    );
};

export default Home;
