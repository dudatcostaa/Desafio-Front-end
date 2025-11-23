// CSS e JS do GOV.BR
import '@govbr-ds/core/dist/core-tokens.min.css'
import '@govbr-ds/webcomponents/dist/index.js'

// Iconografia
import '@fortawesome/fontawesome-free/css/all.min.css';


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <App />
  </StrictMode>
)
