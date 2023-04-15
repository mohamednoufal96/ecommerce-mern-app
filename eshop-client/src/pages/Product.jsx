import React from "react";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcements />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Lorem, ipsum dolor.</Title>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Enim sequi voluptate omnis alias! Impedit similique nihil alias officia sit
                        numquam! Alias, excepturi!
                    </Description>

                    <Price>$ 100</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="red" />
                            <FilterColor color="black" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveIcon style={{ cursor: "pointer" }} />
                            <Amount>1</Amount>
                            <AddIcon style={{ cursor: "pointer" }} />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
};

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const ImageContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`;

const Title = styled.h1`
    font-weight: 200;
`;
const Description = styled.p`
    margin: 20px 0;
`;
const Price = styled.h1`
    font-weight: 200;
`;

const FilterContainer = styled.div`
    width: 40%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
`;
const FilterTitle = styled.div`
    font-size: 20px;
    font-weight: 400;
`;
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    cursor: pointer;
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 10px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    transition: all 0.5s ease;
    font-weight: 500;

    &:hover {
        background-color: teal;
        color: white;
    }
`;
export default Product;
