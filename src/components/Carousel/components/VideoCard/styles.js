import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }


`;

export const VideoCardList = styled.ul`
&::-webkit-scrollbar-track {
  background-color: #414141;
  border-radius: 5px;
}

&::-webkit-scrollbar {
  height: 12px;
}

&::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: ${props => props.color};
}
margin: 0;
padding-left: 0;
padding-bottom: 32px;
list-style: none;
display: flex;
overflow-x: auto;
flex-direction: row;

li {
  margin-right: 16px;
}
`;