import styled from 'styled-components';

export const MyEditorWrapper = styled.div`
  width: 1000px;
  display: flex;
  height: fit-content;
  flex-direction: column;
  margin-top: 3em;
`;

export const MyEditorContainer = styled.div`
  display: flex;
  min-height: 9em;
  border-radius: 0 0 3px 3px;
  background-color: #fff;
  padding: 5px;
  margin: 10px 0;
  font-size: 17px;
  font-weight: 300;
  box-shadow: 0 0 3px 1px rgba(15, 15, 15, 0.17);
`;

export const MyEditorOutput = styled.div`
  min-height: 9em;
  border-radius: 0 0 3px 3px;
  background-color: #fff;
  padding: 5px;
  margin: 10px 0;
  font-size: 17px;
  font-weight: 300;
  box-shadow: 0 0 3px 1px rgba(15, 15, 15, 0.17);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 7px;
  margin-bottom: 8px;
`;

export const Button = styled.div`
width: 75px;
height: 25px;
display: flex;
justify-content: center;
align-items: center;
margin-right: 10px;
border: 1px solid #34495e;
background-color: #fff;
font-size: 16px;
font-family: Oxygen, sans-serif;
transition: all 0.3s ease-in-out;
cursor: pointer;

${props => props.isActive
    && `transform: translateY(1px);
    background-color: #9bc1f7;
    box-shadow: none;
    border: none;
    box-shadow: 0 1px 11px 1px rgba(15, 15, 15, 0.2);`}
    
&:hover {
  transform: translateY(1px);
  background-color: #9bc1f7;
  border: none;
  box-shadow: 0 1px 11px 1px rgba(15, 15, 15, 0.2);
}
`;
