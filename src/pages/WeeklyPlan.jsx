const WeeklyPlan = () => {
    return (
        <div className="page-container fade-in">
            <section className="section">
                <div className="container">
                    <h1>الخطة الأسبوعية</h1>
                    <p className="subtitle">التنظيم هو نصف النجاح. التزم بالجدول.</p>

                    <div className="table-responsive">
                        <table className="weekly-table">
                            <thead>
                                <tr>
                                    <th>اليوم</th>
                                    <th>التركيز</th>
                                    <th>الهدف المتوقع</th>
                                    <th>ملاحظات هامة</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>الإثنين</td>
                                    <td>سكالبينغ (الذهب XAUUSD)</td>
                                    <td className="highlight-value">5 - 10$</td>
                                    <td>الذهب فقط. تجنب العملات لتركيز أفضل.</td>
                                </tr>
                                <tr>
                                    <td>الثلاثاء</td>
                                    <td>EURUSD (Swing H1)</td>
                                    <td className="highlight-value">5 - 10$</td>
                                    <td>تحليل الاتجاه العام. 1-2 صفقة بحد أقصى.</td>
                                </tr>
                                <tr>
                                    <td>الأربعاء</td>
                                    <td>سكالبينغ (M1 / M5)</td>
                                    <td className="highlight-value">5 - 10$</td>
                                    <td>البحث عن الانعكاسات القوية فقط.</td>
                                </tr>
                                <tr>
                                    <td>الخميس</td>
                                    <td>GBPUSD (Swing H1)</td>
                                    <td className="highlight-value">5 - 10$</td>
                                    <td>حذر من الأخبار الاقتصادية القوية.</td>
                                </tr>
                                <tr>
                                    <td>الجمعة</td>
                                    <td>مراجعة وتقييم</td>
                                    <td>-</td>
                                    <td>تقييم أداء الأسبوع وتعديل حجم المخاطرة للأسبوع القادم.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="notes-section">
                        <h3>📝 ملاحظات التقييم الأسبوعي</h3>
                        <p>في نهاية كل جمعة، اسأل نفسك:</p>
                        <ul>
                            <li>هل التزمت بقواعد إدارة المخاطر؟ (نعم/لا)</li>
                            <li>كم عدد الصفقات الرابحة مقابل الخاسرة؟</li>
                            <li>هل كان هناك صفقات "انتقامية"؟</li>
                            <li>هل تعدت الخسارة 5% في أي يوم؟</li>
                        </ul>
                    </div>
                </div>
            </section>

            <style>{`
            .notes-section {
                margin-top: 3rem;
                padding: 2rem;
                background: var(--bg-card);
                border: 1px dashed var(--text-secondary);
                border-radius: 12px;
            }
        `}</style>
        </div>
    );
};

export default WeeklyPlan;

