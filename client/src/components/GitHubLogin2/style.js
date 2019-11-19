import styled from "styled-components";

const Button = styled.button`
    padding: 0 30px;
    width: 280px;
    height: 43px;
    background: #221E1B;
    border-radius: 9px;
    display: flex;
    opacity: 0.9;
    
    &:hover {
        opacity: 1;
        cursor: pointer;
    }
`;

const Logo = styled.img`
    width: 18px;
    height: 18px;
    display: block;
    padding-top: 10px;
    padding-right: 14px;
`;

const Link = styled.a`
    font-family: source sans pro;
    font-size: 16px;
    font-weight: 400;
    line-height: 37px;
    color: #FFFFFF;
    display: block;
`;

export {
    Button,
    Logo,
    Link
}