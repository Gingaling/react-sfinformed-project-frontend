import styled from 'styled-components';

export const DropdownWrapper = styled.form`
	display: flex;
  margin-left: 8rem;
	flex-flow: column;
	justify-content: center;
`;

export const StyledSelect = styled.select`
margin-left: 8rem;
margin-left: 8rem;
max-width: 50%;
height: 100%;
justify-content: center;
padding: 0.5rem;
margin-bottom: 1rem;`;

export const StyledOption = styled.option`
	color: ${props => (props.selected ? 'lightgrey' : 'black')};
`;

export const StyledLabel = styled.label`
margin-bottom: 1rem;
margin-left: 8rem;`;

export const StyledButton = styled.input`
  width: 50%;
  height: 100%;
  margin-left: 8rem;
  display: flex;
  justify-content: center;
  border: solid 2px blue;
  padding: 0.5rem;
  border-radius: 1rem;
`;