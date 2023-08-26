import React from 'react';
import styled from 'styled-components';

const VideoFrame = styled.iframe` 
	width: 100%;
	height: 50rem;
	border: none;
	margin-bottom: -0.1rem;
	margin-right: 0;
`; 

const Video = () => (
	<section>
		<VideoFrame src="https://www.youtube.com/embed/WY1ptfuqWa8" />
	</section>
);

export default Video;
