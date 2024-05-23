import {DatePicker, ConfigProvider, Button} from 'antd';
import './App.css'
import LayoutComponent from './components/Layout';

function App() {

  return (
   <ConfigProvider
   theme={{
    token: {
      colorPrimary: '#1DA57A',
    }
   }}
   >
    <LayoutComponent />
   </ConfigProvider>
  )
}

export default App
