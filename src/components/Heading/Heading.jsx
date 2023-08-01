import styled from 'styled-components';

import React from 'react';

const HeadingBase = () => {
  return <h1>Heading</h1>;
};

//this heading automaticly changes display depending on width so its always there, but visible only when needed
export const Heading = styled(HeadingBase)`
  display: none;
  color: var(--font-color-dark);
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
  }
`;

//example ussage for h1,h2 headings <Heading as="h1">Finance App</Heading> <Heading as="h2">Finance App</Heading>
