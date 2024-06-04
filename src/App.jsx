import {ConfigProvider} from 'antd';
import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './routes';
import cors from 'cors';
import './App.css';
import { AuthProvider } from '../src/context/AuthContext';



function App() {

  return (
    <AuthProvider>
   <ConfigProvider
   theme={{
    token: {
      colorPrimary: '#1DA57A',
    }
   }}
   >
    <BrowserRouter>
   <AppRoutes/>
   </BrowserRouter>
   </ConfigProvider>
   </AuthProvider>
  )
}

export default App
