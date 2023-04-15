import React from "react";
import styled from "styled-components";
import { mediumScreen, mobileDevice, smallScreen } from "../responsive";

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create an Account</Title>
                <Form>
                    <Input placeholder="First name" />
                    <Input placeholder="Last name" />
                    <Input placeholder="User name" />
                    <Input placeholder="Email" type="email" />
                    <Input placeholder="Password" type="password" autoComplete="off" />
                    <Input placeholder="Confirm password" type="password" autoComplete="off" />

                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the{" "}
                        <b>PRIVACY POLICY</b>
                    </Agreement>

                    <Button>Register</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
        url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-size: cover;
    // background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    background: white;
    padding: 20px;

    ${mobileDevice({
        width: "75%",
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
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    outline: none;
    border: 1px solid lightgray;
    padding: 10px;
    padding-left: 10px;
    font-size: 16px;
    margin: 10px 20px 0 0;
`;
const Agreement = styled.p`
    margin: 20px 0;
    font-size: 14px;
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
`;
export default Register;
