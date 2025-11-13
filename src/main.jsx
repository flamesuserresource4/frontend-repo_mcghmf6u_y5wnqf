import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import CloudDevOps from './pages/CloudDevOps'
import Fullstack from './pages/Fullstack'
import DataAI from './pages/DataAI'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/services/cloud-devops" element={<CloudDevOps />} />
        <Route path="/services/fullstack" element={<Fullstack />} />
        <Route path="/services/data-ai" element={<DataAI />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
