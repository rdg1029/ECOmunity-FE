import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const NavBase = () => {
    return(
        <>
            <BaseContainer>
                <Outlet/>
                <NavContainer>
                    <Nav/>
                </NavContainer>
            </BaseContainer>
        </>
    )
}

const BaseContainer = styled.div`
    height: 100%;
    width: 10%;
`;

const NavContainer = styled.div`
    width: 100%;
    position: fixed;
`;


export default NavBase;
