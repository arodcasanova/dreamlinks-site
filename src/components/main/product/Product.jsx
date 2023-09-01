import React from 'react';
import styled from 'styled-components';
import { HeaderLarge, HeaderMedium, Paragraph, CaptionMedium } from 'components/core/Type'; 
import cubeSpin from 'images/cube-spin.gif'
import makeSymbol from 'images/hand-open.svg'
import learnSymbol from 'images/hand-reading-braille.svg'
import playSymbol from 'images/hands-clap.svg'

const HeroSection = styled.section`
	display: flex;
	justify-content: center;
	background-color: white;
`;

const HeroImage = styled.img.attrs({ src: cubeSpin })`
	height: 20rem;
`

const ProductSection = styled.section`
	display: flex;
	justify-content: center;
	background-color: #F6F6F6;
`;

const StorySection = styled.section`
	display: flex;
	justify-content: center;
`;

const HeroContainer = styled.header`
	padding: 3rem 2rem;
	width: 100%;
	max-width: 50rem;
	text-align: center;
`;

const ProductContainer = styled.div`
	padding: 3.75rem 2rem;
	width: 100%;
	max-width: 50rem;
`;

const StoryContainer = styled.div`
	padding: 3.5rem 13rem;
	width: 100%;
	max-width: 50rem;
	@media (max-width: 700px) {
		padding: 3rem 2rem;
		grid-template-columns: 1fr;
		justify-items: center;
		grid-gap: 3.25rem;
	}
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
	widtH: 10rem;
	text-align: left;
	@media (max-width: 700px) {
		widtH: 13rem;
	}
`;

const CardSymbol = styled.div`
	margin-bottom: 2rem;
	height: 3.5rem;
	background-image: url(${props => props.bgSrc}); 
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
`

const StoryLabel = styled(CaptionMedium)`
	display: inline-block;
	padding: .2rem .4rem;
	background-color: #F8F6FC;
	border-radius: 6px;
	margin-bottom: 1rem;
`;

const StoryCopy = styled(Paragraph)`
	font-size: .79rem;
	max-width: 20rem;
`;

const Product = () => (
	<main>
		<HeroSection>
			<HeroContainer>
				<HeaderLarge style={{ marginBottom: '0.5rem' }}> What will you build? </HeaderLarge>
				<HeroImage />
			</HeroContainer>
		</HeroSection>
		<ProductSection>
			<ProductContainer>
				<HeaderMedium id="product-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>Magnetic blocks that bridge your head and your hands</HeaderMedium>
				<ProductCardsContainer>
					<ProductCard>
						<CardSymbol bgSrc={makeSymbol} />
						<Paragraph>Make</Paragraph>
						<CaptionMedium>Use your hands to crest virtual worlds and even real things</CaptionMedium>
					</ProductCard>
					<ProductCard>
						<CardSymbol bgSrc={learnSymbol} />
						<Paragraph>Learn</Paragraph>
						<CaptionMedium> Become a Master Builder through inclusive learning activities</CaptionMedium>
					</ProductCard>
					<ProductCard>
						<CardSymbol bgSrc={playSymbol} />
						<Paragraph>Play</Paragraph>
						<CaptionMedium> Share laughs and enjoy screen-free fun for everyone</CaptionMedium>
					</ProductCard>
				</ProductCardsContainer>
			</ProductContainer>
		</ProductSection>
		<StorySection>
			<StoryContainer>
				<StoryLabel id="story-header">Our story</StoryLabel>
				<HeaderMedium>Kids love to build things.</HeaderMedium>
				<StoryCopy>Kids love to build things, but today’s toys and tools leave a lot of people out. Our mission is to give everyone the opportunity to build their dreams.
Story: Adrian and Gabe have been best friends since they met as Freshman at Stanford. Adrian’s near total blindness and love of design inspired him to make creativity easy for everyone. Gabe’s passion for using computer science to impact society led him to build the magic that makes Dreamlinks possible. .</StoryCopy>
			</StoryContainer>
		</StorySection>
	</main>
);

export default Product;
