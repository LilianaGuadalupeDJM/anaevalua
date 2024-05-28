import {ConfigProvider} from 'antd';
import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './routes';
import './App.css'



function App() {

  return (
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

  )
}

export default App
