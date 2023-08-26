import React from 'react';
// import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { CaptionBold } from 'components/core/Type';

const PageLink = ({ to, children }) => (
	<NavLink to={to}>
		<CaptionBold>{children}</CaptionBold>
	</NavLink>
);

export default PageLink;
