import React from "react";
import LayoutComponent from "../../components/Layout";
import ImagenLogin from "../../components/ImagenLogin";
import FormLogin from "../../components/FormLogin";

const Login = () => {
    return (

        <LayoutComponent
        leftColSize={{xs:0, sm:0, md:8, lg:6}}
        rightColSize={{xs:24, sm:24, md:16, lg:18}}
        leftContent={<ImagenLogin />}
        rightContent={<FormLogin />}
        />

    );
}

export default Login;