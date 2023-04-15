import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { mediumScreen, mobileDevice, smallScreen } from "../responsive";

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>ECOMM STORE.</Logo>
                <Description>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised words which don’t look even slightly
                    believable.
                </Description>
                <SocialContainer>
                    <SocialIcon bgcolor="3B5999">
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon bgcolor="E4405F">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon bgcolor="55ACEE">
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon bgcolor="E60023">
                        <PinterestIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <LocationOnIcon style={{ marginRight: "10px" }} /> 622 Dixie Path , South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                    <LocalPhoneIcon style={{ marginRight: "10px" }} /> +94 9458 72578
                </ContactItem>
                <ContactItem>
                    <MailOutlineIcon style={{ marginRight: "10px" }} /> contact@ecommstore@mail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    ${mobileDevice({
        flexDirection: "column",
    })}

    ${smallScreen({
        flexDirection: "column",
    })}
`;
const Left = styled.div`
    flex: 1;
    padding: 20px;

    ${mobileDevice({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    })}
    ${smallScreen({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    })}
`;

const Logo = styled.h1`
    ${mobileDevice({
        fontSize: "24px",
    })}

    ${smallScreen({
        fontSize: "24px",
    })}
    ${mediumScreen({
        fontSize: "24px",
    })}
`;

const Description = styled.div`
    margin: 20px 0;
`;

const SocialContainer = styled.div`
    display: flex;
    align-items: center;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #${(props) => props.bgcolor};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;

    ${mobileDevice({
        width: "30px",
        height: "30px",
        margin: "3px",
    })}
    ${smallScreen({
        width: "30px",
        height: "30px",
        margin: "5px",
    })}
    ${mediumScreen({
        width: "30px",
        height: "30px",
        margin: "5px",
    })}
`;

const Center = styled.div`
    align-self: start;
    flex: 1;
    padding: 20px;

    ${mobileDevice({
        display: "none",
    })}
    ${smallScreen({
        display: "none",
    })}
    ${mediumScreen({
        display: "none",
    })}
`;

const Title = styled.h3`
    margin-bottom: 20px;
`;
const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    align-self: start;
    padding: 20px;
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const Payment = styled.img``;
export default Footer;
