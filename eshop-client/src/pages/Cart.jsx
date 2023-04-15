import React from "react";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { mobileDevice } from "../responsive";

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcements />
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton type="filled">CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag ( 4 )</TopText>
                        <TopText>Your Wishlist ( 12 )</TopText>
                    </TopTexts>
                    <TopButton>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src="data:image/jpeg;base64,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" />
                                <Details>
                                    <ProductName>
                                        <b>Product : </b>Lorem ipsum dolor sit amet.
                                    </ProductName>
                                    <ProductId>
                                        <b>Id : </b>6465464644684
                                    </ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize>
                                        <b>Size : </b>M
                                    </ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <AddIcon />
                                    <ProductAmount>5</ProductAmount>
                                    <RemoveIcon />
                                </ProductAmountContainer>

                                <ProductPrice>$ 443</ProductPrice>
                            </PriceDetails>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetails>
                                <Image src="data:image/jpeg;base64,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" />
                                <Details>
                                    <ProductName>
                                        <b>Product : </b>Navy blue shirt phantom
                                    </ProductName>
                                    <ProductId>
                                        <b>Id : </b>6465464644684
                                    </ProductId>
                                    <ProductColor color="yellow" />
                                    <ProductSize>
                                        <b>Size : </b>S
                                    </ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <AddIcon />
                                    <ProductAmount>5</ProductAmount>
                                    <RemoveIcon />
                                </ProductAmountContainer>

                                <ProductPrice>$ 443</ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 235</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.3</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ 4</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 235</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;

    ${mobileDevice({
        padding: "10px",
    })}
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;

    ${mobileDevice({
        fontSize: "24px",
    })}
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;

    ${mobileDevice({})}
`;

const TopButton = styled.button`
    padding: 10px 15px;
    font-weight: 600;
    cursor: pointer;

    border: ${(props) => props.type === "filled" && "none"};
    background: ${(props) => (props.type === "filled" ? "black" : "transparent")};
    color: ${(props) => props.type === "filled" && "white"};

    ${mobileDevice({
        padding: "3px 5px",
        fontSize: "12px",
        fontWeight: "400",
    })}
`;

const TopTexts = styled.div`
    ${mobileDevice({
        display: "flex",
        flexDirection: "column",
    })}
`;

const TopText = styled.span`
    text-decoration: underline;
    margin: 0 10px;
    cursor: pointer;
    font-size: 18px;

    ${mobileDevice({
        fontSize: "14px",
        margin: "0 4px",
    })}
`;

const Bottom = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;

    ${mobileDevice({
        flexDirection: "column",
        alignItems: "center",
    })}
`;

const Info = styled.div`
    flex: 3;

    ${mobileDevice({
        marginBottom: "10px",
    })}
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;

    ${mobileDevice({
        width: "150px",
    })}
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    ${mobileDevice({ padding: "5px" })}
`;

const ProductName = styled.span`
    ${mobileDevice({
        fontSize: "14px",
    })}
`;
const ProductId = styled.span`
    ${mobileDevice({
        fontSize: "14px",
    })}
`;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${(props) => props.color};
`;

const ProductSize = styled.span`
    ${mobileDevice({
        fontSize: "14px",
    })}
`;

const PriceDetails = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${mobileDevice({
        padding: "5px",
    })}
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;

    ${mobileDevice({
        margin: "5px 0",
    })}
`;
const ProductAmount = styled.h3`
    font-size: 28px;
    margin: 5px;

    ${mobileDevice({
        fontSize: "16px",
    })}
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 300;

    ${mobileDevice({
        fontSize: "24px",
    })}
`;

const Hr = styled.hr`
    background: #eee;
    border: none;
    height: 2px;
    margin: 5px 0;
`;

const Summary = styled.div`
    flex: 1;
    padding: 20px;

    border: 0.5px solid lightgray;
    border-radius: 5px;
    height: 50vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const SummaryTitle = styled.h1`
    font-size: 28px;
    font-weight: 300;
    margin-bottom: 20px;
    text-align: center;

    ${mobileDevice({
        fontSize: "18px",
    })}
`;
const SummaryItem = styled.div`
    padding: 5px;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;

    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => (props.type === "total" ? "24px" : "18px")};
`;
const SummaryItemText = styled.span`
    ${mobileDevice({
        fontSize: "16px",
    })}
`;
const SummaryItemPrice = styled.span``;

const Button = styled.button`
    padding: 10px;
    background: black;
    color: white;
    font-weight: 600;
`;

export default Cart;
