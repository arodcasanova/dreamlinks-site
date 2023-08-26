import React from 'react';
import styled from 'styled-components';
import { CaptionBold } from 'components/core/Type';

const HomeContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const HomeLink = () => (
	<a href=".">
		<HomeContainer>
			<CaptionBold>Dreamlinks</CaptionBold>
		</HomeContainer>
	</a>
);

export default HomeLink;
