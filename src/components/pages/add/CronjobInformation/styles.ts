import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.form`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CronJobInfoContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    align-items: center;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  @media (min-width: 768px) {
    max-width: 450px;
  }
`;

export const InputErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelInput = styled.label`
  font-size: 1.1rem;
  font-family: 'NotoSansJPMedium';
  color: #4f4f4f;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  background-color: #ebebeb;
  transition: 0.2s;
  font-size: 0.9rem;
  padding: 15px 10px 15px 15px;
  min-width: 250px;
  border-radius: 7px;
  color: #565656;
  &::-webkit-input-placeholder {
    font-size: 0.9rem;
    color: #bdbdbd;
  }
  &:focus {
    background-color: #ffffff;
  }
`;

export const InputDescription = styled.textarea`
  background-color: #ebebeb;
  transition: 0.2s;
  font-size: 0.9rem;
  padding: 15px 10px 15px 15px;
  min-width: 250px;
  border-radius: 7px;
  color: #565656;
  border: none;
  &::-webkit-input-placeholder {
    font-size: 0.9rem;
    color: #bdbdbd;
  }
  &:focus {
    background-color: #ffffff;
  }
  height: 100px;
  outline: none;
`;

export const InputSelect = styled.select`
  background-color: #ebebeb;
  transition: 0.2s;
  font-size: 0.9rem;
  padding: 15px 10px 15px 15px;
  min-width: 250px;
  border-radius: 7px;
  color: #565656;
  border: none;
  &::-webkit-input-placeholder {
    font-size: 0.9rem;
    color: #bdbdbd;
  }
  outline: none;
  margin: 20px 0 30px;
`;

export const ErrorMessage = styled.h2`
  font-size: 1.5rem;
  color: #c1c1c1;
`;
