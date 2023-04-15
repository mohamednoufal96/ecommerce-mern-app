import React from "react";
import styled from "styled-components";
import { mediumScreen, mobileDevice, smallScreen } from "../responsive";

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN </Title>
                <Form>
                    <Input placeholder="User name " />
                    <Input placeholder="Password" type="password" />

                    <Button>Sign In</Button>
                    <Link>Do not remember your password ?</Link>
                    <Link>Create a new account .</Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
        url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-size: cover;
    // background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    background: white;
    padding: 20px;

    ${mobileDevice({
        width: "75%",
        padding: "10px",
    })}
    ${smallScreen({
        width: "60%",
    })}
    ${mediumScreen({
        width: "60%",
    })}
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    flex: 1;
    // min-width: 40%;
    outline: none;

    border: 1px solid lightgray;
    padding: 10px;
    padding-left: 10px;
    font-size: 16px;
    margin: 10px 0;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    font-size: 20px;
    font-weight: 400;
    padding: 5px 15px;
    background: teal;
    color: white;
    cursor: pointer;
    margin: 10px 0;
`;

const Link = styled.a`
    text-decoration: underline;
    margin: 5px 0;
    cursor: pointer;
`;

export default Login;
