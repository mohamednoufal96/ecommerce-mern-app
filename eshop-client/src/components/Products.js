import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import { mobileDevice } from "../responsive";
import Product from "./Product";

const Products = ({ category, filters, sort }) => {
    console.log(category, filters, sort);

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {}, [category]);
    return (
        <Container>
            {popularProducts.map((item) => (
                <Product key={item.id} item={item} />
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
`;

export default Products;
