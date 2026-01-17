const RiskManagement = () => {
    return (
        <div className="page-container fade-in">
            <section className="section">
                <div className="container">
                    <h1>إدارة رأس المال والمخاطرة</h1>
                    <p className="subtitle">الحفاظ على رأس المال هو الأولوية الأولى</p>

                    <div className="risk-grid">
                        <div className="card risk-card">
                            <div className="icon-wrapper">🛑</div>
                            <h3>خسارة الصفقة الواحدة</h3>
                            <p className="highlight-value">1% - 2%</p>
                            <p className="desc">من الرصيد الحالي</p>
                            <div className="example">
                                مثال: رصيد 100$<br />
                                الخسارة المسموحة: 1$ - 2$
                            </div>
                        </div>

                        <div className="card risk-card">
                            <div className="icon-wrapper">⚠️</div>
                            <h3>الحد اليومي للخسارة</h3>
                            <p className="danger-value">5%</p>
                            <p className="desc">توقف عن التداول فوراً لهذا اليوم</p>
                            <div className="example">
                                مثال: رصيد 100$<br />
                                توقف عند خسارة 5$
                            </div>
                        </div>

                        <div className="card risk-card">
                            <div className="icon-wrapper">📅</div>
                            <h3>إعادة التقييم</h3>
                            <p className="highlight-value">أسبوعياً</p>
                            <p className="desc">ضبط حجم العقد (Lot) كل أسبوع</p>
                            <div className="example">
                                إذا ربحت وأصبح الرصيد 120$<br />
                                المخاطرة تصبح 1.2$ للصفقة
                            </div>
                        </div>
                    </div>

                    <div className="rules-section">
                        <h2>قواعد ذهبية</h2>
                        <ul>
                            <li>لا تحاول تعويض الخسائر في نفس اليوم إذا وصلت للحد الأقصى.</li>
                            <li>هدف الربح الأسبوعي هو 10-20% فقط. الطمع يقتل الحساب.</li>
                            <li>استخدم دائماً Stop Loss ولا تقم بإزالته أبداً أثناء الصفقة.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <style>{`
          .risk-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
          }
          .risk-card {
            text-align: center;
            padding: 2.5rem;
          }
          .icon-wrapper {
            font-size: 3rem;
            margin-bottom: 1rem;
          }
          .highlight-value, .danger-value {
            font-size: 2.5rem;
            font-weight: 800;
            margin: 0.5rem 0;
            display: block;
          }
          .desc {
            color: var(--text-secondary);
            margin-bottom: 1rem;
          }
          .example {
            background: rgba(255,255,255,0.05);
            padding: 1rem;
            border-radius: 8px;
            font-size: 0.9rem;
            line-height: 1.6;
          }
          .rules-section {
            background: var(--bg-card);
            padding: 2rem;
            border-radius: 12px;
            border-right: 5px solid var(--primary-gold);
          }
        `}</style>
        </div>
    );
};

export default RiskManagement;

