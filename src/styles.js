import styled from 'styled-components';

export const DropdownWrapper = styled.form`
    margin: 1rem 0 0 1rem;
    text-align: center;
    max-width: 50%;
    height: 100%;
    display: flex;
	flex-flow: column;
	justify-content: flex-start;
`;

export const StyledSelect = styled.select`
  max-width: 20%;
  text-align: center;
  height: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

export const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "lightgrey" : "black")};
  text-align: center;
`;

export const StyledLabel = styled.label`margin-bottom: 1rem;
	text-align: center;`;

export const StyledButton = styled.input`
  max-width: 50%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  border: solid 2px blue;
  padding: 0.5rem;
  border-radius: 1rem;
`;

export const StyledContainer = styled.div`
  display: flex;
  color: red;
`};