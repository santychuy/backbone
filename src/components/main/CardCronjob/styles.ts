import styled from 'styled-components';

import BtnIcon from '@/components/common/IconButton';

export const CardContainer = styled.div`
  background-color: #ffffff;
  padding: 20px 30px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  -webkit-box-shadow: 0px 2px 5px 0px rgb(178, 178, 178, 0.1);
  box-shadow: 0px 2px 5px 0px rgb(178, 178, 178, 0.1);
`;

export const LabelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #c1c1c1;
`;

export const Cronjob = styled.p`
  font-size: 0.9rem;
  color: #000000;
  margin: 30px 0 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonIcon = styled(BtnIcon)`
  width: 40px;
  height: 40px;
`;
