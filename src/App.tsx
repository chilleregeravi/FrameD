
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DocsLayout from '@/pages/DocsLayout';
import Index from '@/pages/Index';
import { LanguageProvider } from '@/contexts/LanguageContext';
import NotFound from '@/pages/NotFound';

// Lazy-loaded components
const DocPage = lazy(() => import('@/pages/docs/DocPage'));
const MicrosoftStyleGenerator = lazy(() => import('@/pages/MicrosoftStyleGenerator'));

// Define the base URL for GitHub Pages
const baseUrl = import.meta.env.BASE_URL || '/';

function App() {
  return (
    <BrowserRouter basename={baseUrl}>
      <LanguageProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Documentation Routes - with version support */}
            <Route path="/docs" element={<DocsLayout />}>
              {/* Default route (latest version) */}
              <Route index element={
                <Suspense fallback={<div>Loading...</div>}>
                  <DocPage />
                </Suspense>
              } />
              
              {/* Versioned paths */}
              <Route path=":version/*" element={
                <Suspense fallback={<div>Loading...</div>}>
                  <DocPage />
                </Suspense>
              } />

              {/* Legacy path format without explicit version */}
              <Route path="*" element={
                <Suspense fallback={<div>Loading...</div>}>
                  <DocPage />
                </Suspense>
              } />
            </Route>
            
            {/* Microsoft Style Guide Generator */}
            <Route path="/tools/microsoft-style" element={
              <Suspense fallback={<div>Loading...</div>}>
                <MicrosoftStyleGenerator />
              </Suspense>
            } />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
