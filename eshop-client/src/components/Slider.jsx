import React, { useState } from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { sliderItems } from "../data";
import { largeScreen, mediumScreen, mobileDevice, smallScreen } from "../responsive";

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlinedIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(({ id, img, title, desc, bg }) => (
                    <Slide key={id} bg={bg}>
                        <ImageContainer>
                            <Image src={img} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{title}</Title>
                            <Description>{desc}</Description>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")} slideIndex={slideIndex}>
                <ArrowRightOutlinedIcon />
            </Arrow>
        </Container>
    );
};

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;

    ${mobileDevice({
        height: "30vh",
    })}
    ${smallScreen({
        height: "50vh",
    })}
    ${mediumScreen({
        height: "60vh",
    })}
    

    ${largeScreen({
        height: "70vh",
    })}
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f0eeee;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 1;

    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};

    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};

    ${mobileDevice({
        height: "30vh",
    })}
    ${smallScreen({
        height: "50vh",
    })}

    ${mediumScreen({
        height: "60vh",
    })}

      ${largeScreen({
        height: "70vh",
    })}
`;

const ImageContainer = styled.div`
    height: 100%;
    flex: 1;

    ${mobileDevice({
        display: "none",
    })}
    ${smallScreen({
        display: "none",
    })}
`;

const Image = styled.img`
    height: 100%;

    ${mediumScreen({
        height: "75%",
    })}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;

    ${mobileDevice({
        padding: "10px 5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    })}
    ${smallScreen({
        padding: "10px 5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    })}

    ${mediumScreen({
        textAlign: "left",
        padding: "10px",
    })}

    ${largeScreen({
        padding: "20px",
    })}
`;

const Title = styled.h1`
    font-size: 70px;
    font-weight: 600px;

    ${mobileDevice({
        fontSize: "24px",
    })}
    ${smallScreen({
        fontSize: "30px",
    })}
    ${mediumScreen({
        fontSize: "30px",
    })}

      ${largeScreen({
        fontSize: "30px",
    })}
`;

const Description = styled.p`
    font-size: 20px;
    margin: 50px 0;
    letter-spacing: 5px;

    ${mobileDevice({
        fontSize: "12px",
        margin: "16px 0",
        letterSpacing: "2px",
    })}
    ${smallScreen({
        fontSize: "14px",
        margin: "16px 8px",
        letterSpacing: "2px",
    })}
    ${mediumScreen({
        fontSize: "14px",
        letterSpacing: "2px",
    })}

      ${largeScreen({
        fontSize: "18px",
        letterSpacing: "3px",
    })}
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;

    ${mobileDevice({
        fontSize: "14px",
        padding: "4px 6px",
    })}
    ${smallScreen({
        fontSize: "14px",
        padding: "4px 6px",
    })}
    ${mediumScreen({
        fontSize: "14px",
        padding: "4px 6px",
    })}
`;

export default Slider;
