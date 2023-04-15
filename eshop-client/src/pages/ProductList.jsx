import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];

    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilter = (event) => {
        let value = event.target.value;

        setFilters({ ...filters, [event.target.name]: value });
    };

    useEffect(() => {
        console.log(filters);
    });
    return (
        <Container>
            <Navbar />
            <Announcements />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter products </FilterText>
                    <Select name="color" onChange={handleFilter}>
                        <Option disabled>Color</Option>
                        <Option>White</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                        <Option>Orange</Option>
                        <Option>Black</Option>
                    </Select>

                    <Select name="size" onChange={handleFilter}>
                        <Option disabled>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort products</FilterText>{" "}
                    <Select onChange={(event) => setSort(event.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products filters={filters} sort={sort} category={cat} />
            <Newsletter />
            <Footer />
        </Container>
    );
};

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
`;

const FilterText = styled.h3`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    margin-right: 20px;
    padding: 10px;
`;
const Option = styled.option``;

export default ProductList;
