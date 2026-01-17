import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Strategies from './pages/Strategies';
import RiskManagement from './pages/RiskManagement';
import WeeklyPlan from './pages/WeeklyPlan';
import Psychology from './pages/Psychology';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        {/* Navigation */}
        <nav className="navbar">
          <div className="container nav-content">
            <Link to="/" className="logo">TRADING<span style={{ color: 'var(--primary-gold)' }}>PLAN</span></Link>
            <ul className="nav-links">
              <li><Link to="/">الرئيسية</Link></li>
              <li><Link to="/strategies">الاستراتيجيات</Link></li>
              <li><Link to="/risk">المخاطرة</Link></li>
              <li><Link to="/weekly">الجدول</Link></li>
              <li><Link to="/psychology">النفسية</Link></li>
            </ul>
          </div>
        </nav>

        {/* Page Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/strategies" element={<Strategies />} />
            <Route path="/risk" element={<RiskManagement />} />
            <Route path="/weekly" element={<WeeklyPlan />} />
            <Route path="/psychology" element={<Psychology />} />
          </Routes>
        </div>

        <footer className="footer">
          <div className="container">
            <p>© 2026 خطة التداول الاحترافية - انضباط. صبر. ربح.</p>
          </div>
        </footer>

        {/* Global Components Styles */}
        <style>{`
          .navbar {
            background-color: rgba(10, 14, 23, 0.95);
            position: sticky;
            top: 0;
            z-index: 100;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            backdrop-filter: blur(10px);
          }
          .nav-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 70px;
          }
          .logo {
            font-weight: 800;
            font-size: 1.5rem;
            color: #fff;
          }
          .nav-links {
            display: flex;
            gap: 2rem;
          }
          .nav-links li {
            list-style: none;
          }
          .nav-links li::before { content: none; }
          .nav-links a {
            color: var(--text-secondary);
            font-weight: 500;
            transition: 0.3s;
          }
          .nav-links a:hover {
            color: var(--primary-gold);
          }

          .hero {
            text-align: center;
            padding: 6rem 0;
            background: radial-gradient(circle at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
          }
          .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
          }
          .subtitle {
            font-size: 1.5rem;
            margin-bottom: 3rem;
            text-align: center;
            color: var(--text-secondary);
          }
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            max-width: 900px;
            margin: 0 auto 3rem;
          }
          .stat-card {
            background: rgba(255,255,255,0.03);
            padding: 2rem;
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,0.05);
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .stat-card.main-target {
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(0,0,0,0));
            border-color: var(--primary-gold);
            transform: scale(1.1);
          }
          .stat-card .value {
            font-size: 2.5rem;
            font-weight: 800;
            color: #fff;
            margin-top: 0.5rem;
          }
          .stat-card .label {
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 0.9rem;
            color: var(--text-secondary);
          }

          .weekly-table {
            width: 100%;
            border-collapse: collapse;
            background: var(--bg-card);
            border-radius: 12px;
            overflow: hidden;
          }
          .weekly-table th, .weekly-table td {
            padding: 1.5rem;
            text-align: right;
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }
          .weekly-table th {
            background: rgba(0,0,0,0.3);
            color: var(--primary-gold);
            font-weight: bold;
          }
          .weekly-table tr:hover {
            background: rgba(255,255,255,0.02);
          }

          .footer {
            text-align: center;
            padding: 3rem;
            margin-top: 4rem;
            border-top: 1px solid rgba(255,255,255,0.05);
            color: var(--text-secondary);
          }
          
          /* Animation */
          .fade-in {
            animation: fadeIn 0.5s ease-in;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .strategy-tabs {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 2rem;
          }
          .tab-btn {
            background: transparent;
            border: 1px solid var(--text-secondary);
            color: var(--text-secondary);
            padding: 1rem 2rem;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1.1rem;
            transition: 0.3s;
          }
          .tab-btn.active, .tab-btn:hover {
            background: var(--primary-gold);
            border-color: var(--primary-gold);
            color: #000;
            font-weight: bold;
          }

          @media (max-width: 768px) {
            .nav-links { display: none; } /* Simplified for mobile, ideally specialized mobile menu */
            .hero h1 { font-size: 2.5rem; }
            .stats-grid { grid-template-columns: 1fr; }
            .stat-card.main-target { transform: scale(1); }
            .weekly-table { display: block; overflow-x: auto; }
          }
        `}</style>
      </div>
    </Router>
  )
}

export default App
