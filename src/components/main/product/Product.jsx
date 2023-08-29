import React from 'react';
import styled from 'styled-components';
import { HeaderLarge } from 'components/core/Type'; 

const PageContainer = styled.div`
	display: flex;
	justify-content: center;
	background-color: white;
`;

const ProductContainer = styled.div`
	padding: 2rem;
	width: 100%;
	max-width: 50rem;
`;

const Product = () => (
	<PageContainer>
		<ProductContainer>
			<HeaderLarge>Unleash your <br /> imagination. </HeaderLarge>
		</ProductContainer>
	</PageContainer>
);

export default Product;
