import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CreateAccount from './components/CreateAccount'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App

