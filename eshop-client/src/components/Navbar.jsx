import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { largeScreen, mediumScreen, mobileDevice, smallScreen } from "../responsive";

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>English</Language>
                    <SearchContainer>
                        <Input placeholder="Search" /> <SearchIcon style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>ECOMM STORE.</Logo>
                </Center>
                <Right>
                    <MenuItem> REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    height: 60px;
    ${mobileDevice({
        height: "50px",
    })}
`;

const Wrapper = styled.div`
    max-width: 1200px;
    padding: 10px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${mobileDevice({
        padding: "10px 3px",
    })}

    ${smallScreen({
        padding: "10px 5px",
    })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    ${mobileDevice({
        justifyContent: "center",
    })}
    ${smallScreen({
        justifyContent: "center",
    })}
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;

    ${mobileDevice({
        display: "none",
    })}
    ${smallScreen({
        display: "none",
    })}
`;

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 20px;
    padding: 5px;

    ${mobileDevice({
        marginLeft: "0",
        padding: "2px 3px",
    })}
    ${smallScreen({
        marginLeft: "0",
    })}
`;

const Input = styled.input`
    border: none;
    outline: none;
    ${mobileDevice({
        width: "50px",
        fontSize: "12px",
    })}

    ${smallScreen({
        fontSize: "12px",
        maxWidth: "70px",
    })}
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;

    ${largeScreen({
        fontSize: "30px",
    })}
    ${mediumScreen({
        fontSize: "20px",
    })}
     ${smallScreen({
        fontSize: "16px",
    })}

      ${mobileDevice({
        fontSize: "14px",
    })}
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${mobileDevice({
        flex: "2",
        justifyContent: "center",
    })}

    ${smallScreen({
        flex: "2",
        justifyContent: "center",
    })}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 24px;

    ${mobileDevice({
        fontSize: "12px",
        marginLeft: "3px",
    })}

    ${smallScreen({
        fontSize: "12px",
        marginLeft: "12px",
    })}
`;

export default Navbar;
