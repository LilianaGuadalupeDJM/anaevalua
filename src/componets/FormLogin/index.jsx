import React from "react";
import { Form, Input, Button, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";
import  "./FormLogin.css";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from 'react-router-dom';




const FormLogin = () => {
  const navigate = useNavigate();
  

  const [loginError, setLoginError ] = useState(false);

  const [loading, setLoading] = useState(false);//estado de carga

  const useAuthData = useAuth();
  console.log(useAuthData)

  const { login,getSession } = useAuthData;

  const onFinish = async (values) =>{
      setLoginError(false);
      setLoading(true);//establece el tiempo de carga
      try {
          const response = await auth.loginF(values.email,values.password);

          if (response && response.data) {
              
          
          console.log('Inicio de sesion exitoso:',response.data);
          localStorage.setItem('token',response.data.token);//guarda el token en el almacenamiento local
          login(response.data.token);
          getSession();
          
          navigate('/');
          }else{
              console.error('Error en el inicio de sesion: Respuesta inesperada');
              setLoginError(true);
          }
      } catch (error) {
          console.error('Error en el inicio de sesion', error.response ? error.response.data : error.message);
          setLoginError(true);
      } finally {
          setLoading(false)//establece el tiempo de carga a false
      }
  }

  const onFinishFailed = (errorInfo) => {
      console.log('Failed',errorInfo);
      setLoginError(true);
  }

  return (
      <>
      <Card
      title="Bienvenido de nuevo"
      bordered={false}
      className='responsive-card'
      >

          <Form
          name='normal_login'
          className='login-form'
          initialValues={{
              remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          >
              <Form.Item
              name="username"
              rules={[
                  {
                  required: true,
                  message: 'Por favor ingrese su usuario'
                  }
              ]}
              >
                  <Input prefix = {<UserOutlined/>} placeholder="usuario" />
              </Form.Item>

              <Form.Item
              name="password"
              rules={[
                  {
                  required: true,
                  message: 'Por favor ingrese su contraseña'
                  }
              ]}
              >
                  <Input.Password prefix = {<LockOutlined/>} placeholder="password" />
              </Form.Item>

              <Form.Item>
              {loginError && <p style={{ color: 'red' }}>Credenciales incorrectas. intentalo de nuevo</p>}
                  <Button type='primary' htmlType='submit' className='login-form-button' loading={loading}>
                      Iniciar Sesion
                  </Button>
              </Form.Item>

              Aun no tienes cuenta? <a href='/Register'>Registrate</a>

          </Form>
      </Card>

      </>
  );
}

export default FormLogin