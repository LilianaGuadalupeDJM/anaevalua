import React,{useState} from "react";
import { Form, Input, Button, Card } from "antd";
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import './FormRegister.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const FormRegister = () => {

    const navigate = useNavigate();
    
    const onFinish = async (values) => { 
        //console.log('Succes:', values);
        setLoading(true); //Establece el estado de carga a true al enviar el form
        try{
            const response = await axios.post('https://api-books-omega.vercel.app/getin/signup',{
                readername: values.username,
                email: values.email,
                password: values.password,
                roles: ['MasterLibrarian']
            });
            console.log('Registro exitoso:', response.data);
            navigate('/login');
        } catch (error) {
            console.error('Error en el registro:', error.response.data);
            setRegisterError(true);
        } finally {
            setLoading(false); //Establece el estado de carga a false después de la respuesta
        }
    }

    const onFinishFalided = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }

    //Estado de error de registro
    const [registerError, setRegisterError] = useState(false);
    //Estado de carga
    const [loading, setLoading] = useState(false);

    const validatePassword = ({getFieldValue}) => ({
       validator(_,value) {
        if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
        }
        return Promise.reject(new Error('Las contraseñas no coinciden'));
       },
    });

    return (
        <>
        <Card 
        title="Regístrate!"
        bordered={false}
        className="responsive-card">
            <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember:true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFalided}
            
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
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Por favor ingrese su email',
                    }
                ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Email" />
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
                    <Input.Password 
                    prefix={<LockOutlined/>} 
                    type="password"
                    placeholder="Contraseña" />
                </Form.Item>

                <Form.Item
                name="password-repet"
                rules={[
                    {
                        required: true,
                        message: 'Por favor ingrese su password',
                    },
                    ({getFieldValue}) => validatePassword({getFieldValue}),
                ]}
                >
                    <Input.Password 
                    prefix={<LockOutlined/>} 
                    type="password"
                    placeholder="Confirmar contraseña" />
                </Form.Item>

                <Form.Item>
                    {registerError && <p style={{color: 'red'}}>Falló el registro</p>}
                    <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
                        Registrar
                    </Button>
                </Form.Item>

                ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
            </Form>
        </Card>
        </>
    );
}

export default FormRegister;