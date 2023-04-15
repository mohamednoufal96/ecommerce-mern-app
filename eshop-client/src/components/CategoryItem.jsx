import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobileDevice, smallScreen } from "../responsive";

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Link to={`/products/${item.category}`}>
                    <Button> SHOP NOW </Button>
                </Link>
            </Info>
        </Container>
    );
};
const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 100%;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${mobileDevice({
        height: "30vh",
    })}

    ${smallScreen({
        height: "30vh",
    })}
`;

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    color: white;
    font-weight: bold;
    margin-bottom: 20px;

    ${mobileDevice({
        fontSize: "24px",
        marginBotton: "8px",
    })}
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    font-weight: 600;
    background: white;
    color: gray;
    cursor: pointer;

    ${mobileDevice({
        padding: "4px 6px",
    })}
`;

export default CategoryItem;
