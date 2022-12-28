import React from 'react';
import {
	DropdownWrapper,
	StyledSelect,
	StyledOption,
	StyledLabel,
	StyledButton
} from './styles.js';

export function Dropdown(props) {
	return (
		<DropdownWrapper action={props.action}>
			<StyledLabel htmlFor="services">
				{props.formLabel}
			</StyledLabel>
			<StyledSelect id="services" name="services">
				{props.children}
			</StyledSelect>
			<StyledButton type="submit" value={props.buttonText} />
		</DropdownWrapper>
	);
}

export function Option(props) {
	return (
		<StyledOption selected={props.selected}>
			{props.value}
		</StyledOption>
	);
}    
    
    
    // <form>
    //     <label>
    //         <h3 className="label">Incident Category</h3>
    //         <br />
    //         <select onChange={handleIncidentChange}>
    //             <option value="Lost Property">Lost Property</option>
    //             <option value="Burglary">Burglary</option>
    //             <option value="Larceny Theft">Larceny Theft</option>
    //             <option value="Missing Person">Missing Person</option>
    //             <option value="Drug Offense">Drug Offense</option>
    //         </select>
    //     </label>;
    // </form>;
