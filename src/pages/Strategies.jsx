import { useState } from 'react';

const Strategies = () => {
    const [activeStrategy, setActiveStrategy] = useState('scalping');

    return (
        <div className="page-container fade-in">
            <section className="section">
                <div className="container">
                    <h1>استراتيجيات التداول</h1>
                    <p className="subtitle">اختر الاستراتيجية المناسبة لظروف السوق</p>

                    <div className="strategy-tabs">
                        <button
                            className={`tab-btn ${activeStrategy === 'scalping' ? 'active' : ''}`}
                            onClick={() => setActiveStrategy('scalping')}
                        >
                            سكالبينغ (الذهب XAUUSD)
                        </button>
                        <button
                            className={`tab-btn ${activeStrategy === 'swing' ? 'active' : ''}`}
                            onClick={() => setActiveStrategy('swing')}
                        >
                            يومي / Swing (عملات)
                        </button>
                    </div>

                    <div className="card strategy-content">
                        {activeStrategy === 'scalping' ? (
                            <div className="strategy-details fade-in">
                                <h3>⚡ استراتيجية الذهب (XAUUSD)</h3>
                                <div className="details-grid">
                                    <div className="detail-item">
                                        <strong>الإطار الزمني:</strong> M1 – M5
                                    </div>
                                    <div className="detail-item">
                                        <strong>إشارات الدخول:</strong>
                                        <ul>
                                            <li>انعكاسات عند الدعوم والمقاومات المحلية</li>
                                            <li>الشموع الانعكاسية (Pin Bar, Engulfing) على M1</li>
                                            <li>RSI: شراء عند &lt; 30، بيع عند &gt; 70</li>
                                        </ul>
                                    </div>
                                    <div className="detail-item">
                                        <strong>إدارة الصفقة:</strong>
                                        <ul>
                                            <li>ستوب لوس: 1% من الرصيد</li>
                                            <li>تيك بروفيت: 2-3 مرات المخاطرة</li>
                                            <li>Trailing Stop: حرك للتعادل عند نصف الهدف</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="example-block">
                                    <h4>مثال عملي (شراء)</h4>
                                    <p>الرصيد: 100$ | المخاطرة: 1$</p>
                                    <ol>
                                        <li>السعر يلامس دعم قوي + RSI تحت 30.</li>
                                        <li>دخول صفقة شراء، ستوب لوس بقيمة 1$.</li>
                                        <li>تحرك السعر لصالحك، وصل الربح 1.5$ &rarr; حرك الستوب لنقطة الدخول.</li>
                                        <li>ضرب الهدف عند ربح 3$.</li>
                                    </ol>
                                </div>
                            </div>
                        ) : (
                            <div className="strategy-details fade-in">
                                <h3>🌊 استراتيجية العملات (Swing/Intraday)</h3>
                                <div className="details-grid">
                                    <div className="detail-item">
                                        <strong>الأزواج:</strong> EURUSD, GBPUSD, USDJPY
                                    </div>
                                    <div className="detail-item">
                                        <strong>الإطار الزمني:</strong> H1 – H4
                                    </div>
                                    <div className="detail-item">
                                        <strong>إشارات الدخول:</strong>
                                        <ul>
                                            <li>تحديد الاتجاه العام بمتوسطات EMA50 و EMA200</li>
                                            <li>انتظار تصحيح (Pullback) لمستويات فيبوناتشي 38.2% - 61.8%</li>
                                            <li>تأكيد الإشارة مع تشبع RSI</li>
                                        </ul>
                                    </div>
                                    <div className="detail-item">
                                        <strong>إدارة الصفقة:</strong>
                                        <ul>
                                            <li>ستوب لوس: 1-2% من الرصيد</li>
                                            <li>تيك بروفيت: 2-3 أضعاف المخاطرة</li>
                                            <li>العدد اليومي: 1-3 صفقات فقط</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="example-block">
                                    <h4>مثال عملي (شراء)</h4>
                                    <p>الرصيد: 100$ | المخاطرة: 1.5$</p>
                                    <ol>
                                        <li>السعر فوق المتوسطات (اتجاه صاعد).</li>
                                        <li>السعر يصحح إلى فيبوناتشي 50%.</li>
                                        <li>ظهور شمعة ابتلاعية صاعدة &rarr; شراء.</li>
                                        <li>وصول السعر للهدف عند ربح 4.5$.</li>
                                    </ol>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <style>{`
        .example-block {
          margin-top: 2rem;
          padding: 1.5rem;
          background: rgba(255,255,255,0.03);
          border-left: 4px solid var(--primary-gold);
          border-radius: 4px;
        }
        .example-block ol {
          margin-right: 1.5rem;
          margin-top: 1rem;
        }
        .example-block li {
          margin-bottom: 0.5rem;
        }
      `}</style>
        </div>
    );
};

export default Strategies;
