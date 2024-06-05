import { Route, Routes } from 'react-router-dom'
import './App.css'

import Layout from './components/Layout'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'
import { UserContextProvider } from './contexts/userContext'
import TaskPage from './pages/TaskPage'

//axios.defaults.baseURL = "https://tasksps-api.vercel.app";
axios.defaults.withCredentials = true
axios.defaults.headers.get['Accepts'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';


function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/tasks" element={<TaskPage />}></Route>
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
