import React from "react";
import styled from "styled-components";
// import { NavLink } from 'react-router-dom';
import { CaptionBold } from "components/core/Type";

// const PageLink = ({ to, children }) => (
// 	<NavLink to={to}>
// 		<CaptionBold>{children}</CaptionBold>
// 	</NavLink>
// );

const CaptionWithHover = styled(CaptionBold)`
  :hover {
    color: #5f00a9;
    transition: color ease-in-out 0.25s;
  }
`;

const PageLink = ({ to, children }) => (
  <a href={to}>
    <CaptionWithHover>{children}</CaptionWithHover>
  </a>
);

export default PageLink;
