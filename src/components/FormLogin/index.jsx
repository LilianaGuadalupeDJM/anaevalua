import React,{useState} from "react";
import { Form, Input, Button, Card } from "antd";
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import './FormLogin.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import authService from '../../services/auth';
import { useAuth } from '../../hooks/useAuth';

const FormLogin = () => {
    const navigate = useNavigate();
       //Estado de error de registro
       const [loginError, setLoginError] = useState(false);
       //Estado de carga
       const [loading, setLoading] = useState(false);
       //Manejo de estado de autenticación
       const useAuthData = useAuth();
       console.log(useAuthData);

       const { login } = useAuthData

    const onFinish = async (values) => { 
       setLoading(true);
       setLoginError(false);
       try{
            const response = await authService.loginF(values.username, values.password);
            if(response && response.data){
                console.log('Inicio de sesión exitoso:', response.data.token);
                localStorage.setItem('token', response.data.token); //Guarda el token el almacenamiento local
                login(response.data.token);
                navigate('/'); //Redirige al user a la página principal
            } else {
                console.error('Error en el inicio de sesión: Respuesta inesperada');
                setLoginError(true);
            }
       } catch (error){
        console.log('Error en el inicio se sesión:', error.response ? error.response.data : error.message);
        setLoading(true);
       } finally {
        setLoading(false); //Establece el estado de carga a falsedespués de recibir la respuesta
       }
    }

    const onFinishFalided = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setLoadingError(true);
    }

    return (
        <>
        <Card 
        title="Bienvenido de nuevo!"
        bordered={false}
        className="responsive-card">
            <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember:true,
            }}
            onFinish={onFinish}
            onFinishFalided={onFinishFalided}
            >
                <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Por favor ingrese su usuario',
                    }
                ]}
                >
                    <Input prefix={<UserOutlined/>} placeholder="Usuario" />
                </Form.Item>

                <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Por favor ingrese su password',
                    }
                ]}
                >
                    <Input.Password prefix={<LockOutlined/>} placeholder="Password" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Iniciar Sesión
                    </Button>
                </Form.Item>
                ¿Aún no tienes cuenta? <a href="">Regístrate</a>
            </Form>
        </Card>
        </>
    );
}

export default FormLogin;