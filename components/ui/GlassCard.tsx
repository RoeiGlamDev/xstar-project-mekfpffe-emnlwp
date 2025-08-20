import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background: rgba(255, 255, 255, 0.1); // semi-transparent white
  border-radius: 15px;
  backdrop-filter: blur(10px); // glass effect
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 20px;
  color: #fff; // text color
`;

const Title = styled.h2`
  font-size: 24px;
  color: #ff69b4; // pink color
`;

const Description = styled.p`
  font-size: 16px;
  color: #fff; // white color
`;

const GlassCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default GlassCard;