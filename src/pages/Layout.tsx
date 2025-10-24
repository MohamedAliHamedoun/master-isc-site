import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { useI18n } from '../i18n';
import logo from '/logo.png';

export default function Layout() {
  const { lang, setLang } = useI18n();

  const NavItem = (to: string, label: string) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-2 py-1 rounded-md transition ${
          isActive ? 'font-semibold text-blue-600' : 'text-gray-700 hover:text-blue-600'
        }`
      }
    >
      {label}
    </NavLink>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo + établissement */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo MISC" className="h-10 w-auto" />
            <div className="leading-tight">
              <div className="font-semibold">Université de Lorraine</div>
              <div className="text-xs text-gray-600">Faculté des Sciences et Technologies</div>
            </div>
          </Link>

          {/* Menu */}
          <nav className="hidden md:flex items-center gap-6">
            {NavItem('/', 'Accueil')}
            {NavItem('/parcours', 'Parcours')}
            {NavItem('/admissions', 'Candidature')}
            {NavItem('/quiz', 'Quiz')}
            {NavItem('/contact', 'Contact')}
            {NavItem('/qr', 'QR')}
          </nav>

          {/* Langue + CTA */}
          <div className="flex items-center gap-3">
            <select
              aria-label="Langue"
              className="border rounded-md px-2 py-1 text-sm"
              value={lang}
              onChange={(e) => setLang(e.target.value as 'fr' | 'en')}
            >
              <option value="fr">FR</option>
              <option value="en">EN</option>
            </select>

            <Link
              to="/admissions"
              className="hidden sm:inline-block bg-blue-600 hover:bg-blue-700 transition text-white text-sm px-4 py-2 rounded-md"
            >
              Candidater
            </Link>
          </div>
        </div>
      </header>

      {/* CONTENU */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <p className="font-semibold">Université de Lorraine — FST</p>
          <p className="text-sm mt-1">54500 Vandœuvre-lès-Nancy</p>
          <p className="text-xs text-white/70 mt-6">
            © {new Date().getFullYear()} Master ISC — UL
          </p>
        </div>
      </footer>
    </div>
  );
}
