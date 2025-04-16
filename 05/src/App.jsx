import React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from './components/Register';
import Login from './components/Login';

function App() {

  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Router>

      </QueryClientProvider>
    </>
  )
}

export default App