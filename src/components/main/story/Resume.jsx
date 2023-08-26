import React from 'react';
import styled from 'styled-components';
import { 
	CaptionLight,
	CaptionBold,
	Paragraph,
	HeaderSmall,
	HeaderMedium,
	HeaderLarge
 } from 'components/core/Type';

const ResumeSection = styled.section`
	display: flex;
	justify-content: center;
	padding: 2rem;
`;

const ResumeSubsection = styled.div`
	margin-bottom: 1.59rem;
`;

const ResumeGrid = styled.article`
	display: grid;
	width: 100%;
	max-width: 50rem;
`;

const ResumeHeader = () => (
	<header>
		<HeaderLarge>Resume</HeaderLarge>
	</header>
);

const JobHeader = styled(HeaderSmall)`
	margin-bottom: 0;
`;

const WorkExperience = () => (
	<ResumeSubsection>
		<HeaderMedium>Work Experience</HeaderMedium>
		<JobHeader>Job 1</JobHeader>
		<Paragraph>Description of job.</Paragraph>
		<JobHeader>Job 1</JobHeader>
		<Paragraph>Description of job.</Paragraph>
	</ResumeSubsection>
);

const Awards = () => (
	<ResumeSubsection>
		<HeaderMedium>Awards</HeaderMedium>
		<JobHeader>Award 1</JobHeader>
		<Paragraph>Description of award.</Paragraph>
		<JobHeader>Award 2</JobHeader>
		<Paragraph>Description of award.</Paragraph>
	</ResumeSubsection>
);

const Talks = () => (
	<ResumeSubsection>
		<HeaderMedium>Talks</HeaderMedium>
		<JobHeader>Talk 1</JobHeader>
		<Paragraph>Description of talk.</Paragraph>
		<JobHeader>Talk 2</JobHeader>
		<Paragraph>Description of talk.</Paragraph>
	</ResumeSubsection>
);

const Education = () => (
	<ResumeSubsection>
		<HeaderMedium>Education</HeaderMedium>
		<JobHeader>Stanford University</JobHeader>
		<Paragraph>Description of activites.</Paragraph>
	</ResumeSubsection>
);
 
const Resume = () => (
	<ResumeSection>
		<ResumeGrid>
			<ResumeHeader />
			<WorkExperience />
			<Awards />
			<Talks />
			<Education />
		</ResumeGrid>
	</ResumeSection>
);

export default Resume;
