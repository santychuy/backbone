import styled from 'styled-components';

export const Button = styled.button<{ hoverColor?: string }>`
  border: none;
  background-color: #000000;
  transition: 0.2s;
  width: 45px;
  height: 45px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  margin-right: 10px;
  -webkit-box-shadow: 0px 3px 6px 0px rgb(47, 47, 47, 0.35);
  box-shadow: 0px 3px 6px 0px rgb(47, 47, 47, 0.35);

  &:hover {
    background-color: ${props => props.hoverColor};
    -webkit-box-shadow: 0px 2px 6px 0px ${props => props.hoverColor};
    box-shadow: 0px 2px 6px 0px ${props => props.hoverColor};
  }
`;

export const Icon = styled.img`
  width: 21px;
  height: 21px;
`;
