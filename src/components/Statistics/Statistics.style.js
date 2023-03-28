import styled from 'styled-components';


export const List = styled.ul`
  margin: 0;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 10px;

  & li {
    font-weight: 600;
    font-size: 18px;
  }
`;