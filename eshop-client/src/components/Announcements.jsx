import React from "react";
import styled from "styled-components";

const Announcements = () => {
    return <Container>Super deal. Offer is closing soon 70 % sale</Container>;
};

const Container = styled.div`
    height: 30px;
    background: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500px;
    font-size: 14px;
`;

export default Announcements;
