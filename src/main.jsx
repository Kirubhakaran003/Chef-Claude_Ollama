import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ClaudeApp from "./ClaudeApp"
import "./ChefClaude.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClaudeApp />
  </StrictMode>,
)
