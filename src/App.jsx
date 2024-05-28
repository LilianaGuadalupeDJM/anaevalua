import {DatePicker, ConfigProvider, Button} from 'antd';
import './App.css'
import LayoutComponent from './components/Layout';
import ImagenLogin from '.components/ImageLogin';
import FormLogin from '.components/FormLogin';


function App() {

  return (
   <ConfigProvider
   theme={{
    token: {
      colorPrimary: '#1DA57A',
    }
   }}
   >
    <LayoutComponent
    leftColSize={{xs:0, sm:0, md:8, lg:6}}
    rightColSize={{xs:24, sm:24, md:16, lg:18}}
    leftContent={<ImagenLogin />}
    rightContent={<FormLogin />}
    />
   </ConfigProvider>
  )
}

export default App
