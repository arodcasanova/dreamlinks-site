import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Paragraph } from 'components/core/Type';
import signature from 'images/signature.png';

const LetterSection = styled.section`
	display: flex;
	justify-content: center;
	padding: 2rem;
	margin: -.1rem;
	background-color: grey;
`;

const LetterBackground = styled.article`
	max-width: 50rem;
	padding: 2rem;
	background-color: white;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

const LetterHeader = () => (
	<header>
		<Paragraph>Dear Apple,</Paragraph>
	</header>
);

const LetterSignature = styled.img`
	height: 4rem;
	margin-top: -.6rem;
	margin-bottom: .2rem;
`;

const LetterSignaturePrint = styled(Paragraph)`
	margin-bottom: 0;
`;

const LetterCopy = () => (
	<Fragment>
		<LetterHeader />
		<Paragraph>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet. Posuere ac ut consequat semper viverra nam libero. Non enim praesent elementum facilisis leo vel fringilla. Quam quisque id diam vel quam elementum pulvinar. Eget mi proin sed libero enim sed faucibus turpis. Gravida in fermentum et sollicitudin. Sem viverra aliquet eget sit amet. Nibh ipsum consequat nisl vel pretium lectus quam. Lectus nulla at volutpat diam ut. 
		</Paragraph>
		<Paragraph>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet. Posuere ac ut consequat semper viverra nam libero. Non enim praesent elementum facilisis leo vel fringilla. Quam quisque id diam vel quam elementum pulvinar. Eget mi proin sed libero enim sed faucibus turpis. Gravida in fermentum et sollicitudin. Sem viverra aliquet eget sit amet. Nibh ipsum consequat nisl vel pretium lectus quam. Lectus nulla at volutpat diam ut. 
		</Paragraph>
		<Paragraph>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet. Posuere ac ut consequat semper viverra nam libero. Non enim praesent elementum facilisis leo vel fringilla. Quam quisque id diam vel quam elementum pulvinar. Eget mi proin sed libero enim sed faucibus turpis. Gravida in fermentum et sollicitudin. Sem viverra aliquet eget sit amet. Nibh ipsum consequat nisl vel pretium lectus quam. Lectus nulla at volutpat diam ut. 
		</Paragraph>
		<Paragraph>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet. Posuere ac ut consequat semper viverra nam libero. Non enim praesent elementum facilisis leo vel fringilla. Quam quisque id diam vel quam elementum pulvinar. Eget mi proin sed libero enim sed faucibus turpis. Gravida in fermentum et sollicitudin. Sem viverra aliquet eget sit amet. Nibh ipsum consequat nisl vel pretium lectus quam. Lectus nulla at volutpat diam ut. 
		</Paragraph>
		<Paragraph>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet. Posuere ac ut consequat semper viverra nam libero. Non enim praesent elementum facilisis leo vel fringilla. Quam quisque id diam vel quam elementum pulvinar. Eget mi proin sed libero enim sed faucibus turpis. Gravida in fermentum et sollicitudin. Sem viverra aliquet eget sit amet. Nibh ipsum consequat nisl vel pretium lectus quam. Lectus nulla at volutpat diam ut. 
		</Paragraph>
		<Paragraph>Sincerely,</Paragraph>
		<LetterSignature 
			src={signature}
			alt="Adrian's signature, handwritten as 'A Rodriguez' in black ink." />
		<LetterSignaturePrint>Adrian Rodriguez</LetterSignaturePrint>
	</Fragment>
);

const Letter = () => (
	<LetterSection>
		<LetterBackground>
			<LetterCopy />
		</LetterBackground>
	</LetterSection>
);

export default Letter;
