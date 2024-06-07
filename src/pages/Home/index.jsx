import React from "react";
import { useAuth } from "../../hooks/useAuth";

const Home = () => {
    const {logout,user} = useAuth();
    return (
        <>
        <h1>Hola</h1>
        <a href="/" onClick={logout}>logout</a>
        </>
    );
}

export default Home;