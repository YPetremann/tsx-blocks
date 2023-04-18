import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <Suspense fallback={<h2>Loading…</h2>}>
      <App />
    </Suspense>
  </StrictMode>
)
