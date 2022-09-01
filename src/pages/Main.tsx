import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Title from "../components/Title";
import MyPoint from "../components/MyPoint";

const Main: React.FC = () => {
    return (
        <div>
            <Nav/>
            <h1>Main page</h1>
            <Title/>
            <MyPoint/>
        </div>
    );
}

export default Main;