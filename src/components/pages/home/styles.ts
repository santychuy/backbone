import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LoadingContainer = styled.div`
  height: 90vh;
  display: grid;
  place-items: center;
`;

export const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 30px;
  padding: 50px 0;
  grid-auto-rows: minmax(210px, auto);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 80px 0;
    gap: 40px;
  }

  @media (min-width: 1024px) {
    column-gap: 80px;
    row-gap: 60px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 80px;
  }
`;

export const ErrorMessage = styled.h2`
  font-size: 1.5rem;
  color: #c1c1c1;
`;
