import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Form, Input, Button, Card } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import authService from '../../services/auth';
import './FormRegister.css'

const FormRegister = () => {
    const navigate = useNavigate();

    //Estado de error de registro
    const [registerError, setRegisterError] = useState(false);
    //Estado de carga
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            await authService.register(values.name, values.lasname, values.email, values.password)
            console.log('Registro exitoso: ');
            navigate('/login');
        } catch (error) {
            console.error('Error en el registro:', error.response.data);
            setRegisterError(true);
        } finally {
            setLoading(false);
        }
        //console.log('Success: ', values);
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed: ', errorInfo);
        setRegisterError(true);
    }
    const validatePassword = ({ getFieldValue }) => ({
        validator(_, value) {
            if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
            }
            return Promise.reject(new Error('Las contraseñas no coinciden'));
        },
    });
    return (
        <>
            <Card
                title="Registro!"
                bordered={false}
                className='responsive-card'
            >
                <Form
                    name="normal_register"
                    className="register-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese su usuario'
                        }]}
                    >
                        <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Usuario' />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese su email'
                        }]}
                    >
                        <Input prefix={<LockOutlined className='site-form-item-icon' />} placeholder='Email' />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese su contraseña'
                        }]}
                    >
                        <Input.Password prefix={<LockOutlined className='site-form-item-icon' />} placeholder='Contraseña' />
                    </Form.Item>
                    <Form.Item
                        name="password-repet"
                        rules={[{
                            required: true,
                            message: 'Por favor repita su contraseña'
                        },
                        ({ getFieldValue }) => validatePassword({ getFieldValue }),
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined className='site-form-item-icon' />} placeholder='Contraseña' />
                    </Form.Item>

                    <Form.Item>
                        {registerError && <p style={{ color: 'red' }}>Falló el registro</p>}
                        <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
                            Registrar
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </>
    );
}

export default FormRegister;