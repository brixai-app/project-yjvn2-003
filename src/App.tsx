import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import MenuPage, { MenuPageProps } from '@/pages/MenuPage';

export interface AppProps {
  initialCategory?: MenuPageProps['initialCategory'];
}

export function App(props: AppProps = { initialCategory: 'All' }) {
  const { initialCategory = 'All' } = props ?? {};
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#222222]">
      <HashRouter>
        <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-8 sm:px-6 lg:px-8">
          <header className="mb-8 flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#5F6368] uppercase">
                Grimyard
              </span>
              <h1 className="text-2xl font-semibold tracking-tight text-[#222222]">
                GrimyardCafe
              </h1>
            </div>
            <span className="text-xs font-medium tracking-[0.25em] text-[#5F6368] uppercase">
              All day menu
            </span>
          </header>
          <main className="flex-1 pb-12">
            <Routes>
              <Route path="/" element={<MenuPage initialCategory={initialCategory} />} />
            </Routes>
          </main>
          <footer className="border-t border-[#E5E7EB] pt-6 text-xs text-[#5F6368]">
            <div className="flex items-center justify-between">
              <span>© {new Date().getFullYear()} GrimyardCafe.</span>
              <span className="tracking-[0.25em] uppercase">Quietly brewed.</span>
            </div>
          </footer>
        </div>
      </HashRouter>
      <Toaster position="top-center" richColors theme="light" />
    </div>
  );
}

export default App;