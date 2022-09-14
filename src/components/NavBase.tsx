import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const NavBase: React.FC = () => {
    return (
        <NavContainer>
            <Nav/>
        </NavContainer>
    )
}

const NavContainer = styled.div`
    width: 100%;
    // position: fixed;
    z-index: 300;
`;

export default NavBase;