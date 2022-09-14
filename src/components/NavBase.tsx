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
    z-index: 400;
`;

export default NavBase;