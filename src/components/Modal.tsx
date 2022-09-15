import React from "react";
import styled, { css } from "styled-components";

interface Props {
    show: boolean;
    header: React.ReactNode;
    main: React.ReactNode;
    footer: React.ReactNode;
    width: string;
}

const ModalStyle = styled.div<{show: boolean}>`
    display: ${props => props.show ? 'flex' : 'none'};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
    ${props => 
        props.show &&
        css`
            align-items: center;
        `
    }
`;

const ModalSectionStyle = styled.section<{width: string}>`
    width: 90%;
    max-width: ${props => props.width};
    max-height: 80%;
    margin: 0 auto;
    border-radius: 1rem;
    background-color: #fff;
    overflow: hidden;
`;

const ModalHeaderStyle = styled.header`
    position: relative;
    padding: 8px 8px 8px 8px;
    background-color: #f1f1f1;
    font-weight: 700;
`;

const ModalMainStyle = styled.main`
    max-height: 30rem;
    padding: 16px;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
    overflow: scroll;
`;

const ModalFooterStyle = styled.footer`
    padding: 12px 16px;
    text-align: right;
`;

const Modal: React.FC<Props> = (props) => {
    return (
        <ModalStyle show={props.show}>
            <ModalSectionStyle width={props.width}>
                <ModalHeaderStyle>
                    {props.header}
                </ModalHeaderStyle>
                <ModalMainStyle>
                    {props.main}
                </ModalMainStyle>
                <ModalFooterStyle>
                    {props.footer}
                </ModalFooterStyle>
            </ModalSectionStyle>
        </ModalStyle>
    );
}
export default Modal;