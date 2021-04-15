import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 40px;
  justify-content: space-between;
  color: #ffffff;
  background-color: #fcfcfc;
  -webkit-box-shadow: 0px 5px 11px 0px rgb(215, 215, 215, 0.25);
  box-shadow: 0px 5px 11px 0px rgb(215, 215, 215, 0.25);
  height: 80px;
  width: 100%;
  @media (min-width: 768px) {
    padding: 0 100px;
  }
`;
