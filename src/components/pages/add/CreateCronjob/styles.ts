import styled from 'styled-components';
import { motion } from 'framer-motion';

import Button from '@/components/common/Button';

export const Container = styled(motion.div)`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CronJobContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CronPreview = styled.p`
  font-size: 3.5rem;
`;

export const InputCron = styled.input`
  background-color: #ebebeb;
  transition: 0.2s;
  font-size: 2rem;
  padding: 15px 10px 15px 15px;
  border-radius: 7px;
  color: #b5b5b5;
  text-align: center;
  width: 80%;
  &::-webkit-input-placeholder {
    font-size: 2rem;
    color: #bdbdbd;
  }
  &:focus {
    background-color: #ffffff;
    color: #000000;
  }
  @media (min-width: 768px) {
    max-width: 250px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 80px;
`;

export const ButtonBack = styled(Button)`
  margin-right: 40px;
`;
