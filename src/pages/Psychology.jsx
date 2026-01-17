const Psychology = () => {
    return (
        <div className="page-container fade-in">
            <section className="section">
                <div className="container">
                    <h1>نفسية التداول</h1>
                    <p className="subtitle">80% من التداول هو علم نفس، و 20% فقط استراتيجية.</p>

                    <div className="psych-grid">
                        <div className="card tip-card">
                            <span className="icon">🛑</span>
                            <h3>الانتقام من السوق</h3>
                            <p>
                                "خسرت صفقة، سأدخل فوراً لأعوضها وبحجم أكبر!"
                                <br />
                                <strong>النتيجة:</strong> خسارة الحساب بالكامل. تقبل الخسارة كجزء من العمل.
                            </p>
                        </div>

                        <div className="card tip-card">
                            <span className="icon">😌</span>
                            <h3>إدارة التوتر</h3>
                            <p>
                                إذا شعرت برغبة قوية في التداول أو الخوف، أغلق الشاشة وابتعد.
                                لا تتداول وأنت في حالة عاطفية غير مستقرة.
                            </p>
                        </div>

                        <div className="card tip-card">
                            <span className="icon">🎯</span>
                            <h3>الانضباط</h3>
                            <p>
                                الخطة موجودة لسبب. كسر القواعد مرة واحدة يفتح الباب لكسرها دائماً.
                                "خسارة اليوم مقبولة، الانضباط أهم من الربح السريع".
                            </p>
                        </div>

                        <div className="card tip-card">
                            <span className="icon">🐢</span>
                            <h3>الصبر</h3>
                            <p>
                                أنت لست بحاجة للتداول كل دقيقة. انتظر الفرصة المثالية التي تتوافق مع شروطك 100%.
                                "أن تكون خارج السوق هو وضع (Position) بحد ذاته".
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
            .psych-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                gap: 2rem;
            }
            .tip-card {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                padding: 3rem 2rem;
            }
            .tip-card p {
                color: var(--text-secondary);
                line-height: 1.8;
                margin-top: 1rem;
            }
        `}</style>
        </div>
    );
};

export default Psychology;

