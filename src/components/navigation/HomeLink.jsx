import React from 'react';
import styled from 'styled-components';
import dreamlinksLogo from 'images/dreamlinks-logo-type.svg'

const HomeContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const DreamlinksLogo = styled.img.attrs({
	src: dreamlinksLogo,
	alt: 'Dreamlinks'
})`
	height: 2rem; 
`;

const HomeLink = () => (
	<a href=".">
		<HomeContainer>
			<DreamlinksLogo />
		</HomeContainer>
	</a>
);

export default HomeLink;
