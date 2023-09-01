import React from "react";
import styled from "styled-components";
import {
  HeaderLarge,
  HeaderMedium,
  Paragraph,
  CaptionMedium,
} from "components/core/Type";
import cubeSpin from "images/cube-spin.gif";
import makeSymbol from "images/hand-open.svg";
import learnSymbol from "images/hand-reading-braille.svg";
import playSymbol from "images/hands-clap.svg";

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  background-color: white;
`;

const HeroImage = styled.img.attrs({ src: cubeSpin })`
  height: 20rem;
`;

const ProductSection = styled.section`
  display: flex;
  justify-content: center;
  background-color: #f6f6f6;
`;

const HeroContainer = styled.header`
  padding: 3rem 2rem;
  width: 100%;
  max-width: 50rem;
  text-align: center;
`;

const ProductContainer = styled.div`
  padding: 3.75rem 2rem;
  max-width: 50rem;
`;

const ProductCardsContainer = styled.div`
  display: grid;
  margin-top: 4rem;
  grid-template-columns: auto auto auto;
  column-gap: 4rem;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 3.25rem;
  }
`;

const ProductCard = styled.div`
  width: 10rem;
  text-align: left;
  @media (max-width: 700px) {
    width: 13rem;
  }
`;

const CardSymbol = styled.div`
  margin-bottom: 2rem;
  height: 3.5rem;
  background-image: url(${(props) => props.bgSrc});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const StorySection = styled.section`
  display: block;
  float: left;
  position: relative;
  left: 50%;
`;

const StoryContainer = styled.div`
  padding: 3rem 0;
  float: left;
  position: relative;
  left: -50%;
`;

const StoryLabel = styled(CaptionMedium)`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  padding: 0.2rem 0.4rem;
  background-color: #f8f6fc;
  border-radius: 6px;
  margin-bottom: 1rem;
`;

const StoryCopy = styled(Paragraph)`
  font-size: 0.79rem;
  max-width: 20rem;
  margin-bottom: 0;
`;

const Video = styled.iframe.attrs({
  src: "https://www.youtube.com/embed/tSKIn2G9oOQ",
  allowFullScreen: true,
})`
  height: 14.9rem;
  width: 26.5rem;
  margin-bottom: 3.5rem;
  border: none;
  text-align: center;
`;

const VideoSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Product = () => (
  <main>
    <HeroSection>
      <HeroContainer>
        <HeaderLarge style={{ marginBottom: "0.5rem" }}>
          {" "}
          What will you build?{" "}
        </HeaderLarge>
        <HeroImage />
      </HeroContainer>
    </HeroSection>
    <ProductSection>
      <ProductContainer>
        <HeaderMedium
          id="product-header"
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          Magnetic blocks that bridge your head and your hands
        </HeaderMedium>
        <ProductCardsContainer>
          <ProductCard>
            <CardSymbol bgSrc={makeSymbol} />
            <Paragraph>Make</Paragraph>
            <CaptionMedium>
              Use your hands to create virtual worlds and even printable objects
            </CaptionMedium>
          </ProductCard>
          <ProductCard>
            <CardSymbol bgSrc={learnSymbol} />
            <Paragraph>Learn</Paragraph>
            <CaptionMedium>
              {" "}
              Become a Master Builder through inclusive learning activities
            </CaptionMedium>
          </ProductCard>
          <ProductCard>
            <CardSymbol bgSrc={playSymbol} />
            <Paragraph>Play</Paragraph>
            <CaptionMedium>
              {" "}
              Share laughs and enjoy screen-free fun with everyone
            </CaptionMedium>
          </ProductCard>
        </ProductCardsContainer>
      </ProductContainer>
    </ProductSection>
    <StorySection>
      <StoryContainer>
        <StoryLabel id="story-header">Our story</StoryLabel>
        <HeaderMedium style={{ marginBottom: "1.68rem" }}>
          Everyone deserves a <br /> chance to create.
        </HeaderMedium>
        <StoryCopy>
          Kids love to build things, but today’s toys and tools leave a lot of
          people out. <br /> <br />
          Adrian Rodriguez, our co-founder, was one of these kids himself. Even
          though he was born almost entirely blind, Adrian grew up loving visual
          design. He found ways to make design tools work for him, but, when
          Adrian started teaching totally blind people how to design themselves,
          he realized that his students needed a hands-on approach. So he teamed
          up with his best friend to create Dreamlinks.
          <br />
          <br />
          Gabe Alvarez is an accomplished software engineer with a background in
          physics and artificial intelligence. He met Adrian when they were both
          freshmen at Stanford, and they have been working on projects related
          to Dreamlinks together ever since. Gabe has advised Adrian since he
          started teaching, and he builds the magic that makes Dreamlinks
          possible..
        </StoryCopy>
      </StoryContainer>
    </StorySection>
    <VideoSection>
      <Video />
    </VideoSection>
  </main>
);

export default Product;
