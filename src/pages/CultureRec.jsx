import React from "react"

export default function CultureRec() {
    return (
        <div className="wrapper">
        <h1 style="color: rgb(171, 6, 171)">
            CULTURE & RECREATION</h1>
        <table>

        <tr>
            <th>Resource</th>
            <th>Additional Information</th>
            <th>TBD</th>
        </tr>

        <tr>
            <td className="one"><a href="https://sfplanning.org" target="_blank" rel="noopener noreferrer">San Francisco Recreation and Parks Department</a></td>
            <td><a href="mailto:phil.ginsburg@sfrecpark.org">Send Email to Phil Ginsburg, RPD General Manager</a></td>
            <td>TBD</td>
        </tr>

        <tr>
            <td> <p><a href="https://sfsymphony.org" target="_blank" rel="noopener noreferrer">San Francisco Symphony</a></p> </td>
            <td className="PIMPic"></td>
            <td>TBD</td>
        </tr>

        <tr>
            <td><p> <a href="https://sfballet.org" target="_blank" rel="noopener noreferrer">San Francisco Ballet</a></p></td>
            <td className="ballet"></td>
            <td>TBD</td>
        </tr>

        <tr>
            <td><p> <a href="" target="_blank" rel="noopener noreferrer">Public Art in Your Neighborhood</a></p></td>
            <td>
                <div className="factoidQ">Would you like to know what City-funded public art is in your area?</div>
            {/* <container> */}
                <form className="form">
                <label for="zipcode-search">Number of Art Pieces to View:</label>
                <input
                    id="zipcode-search"
                    name="zipcode-search"
                    type="number"
                    className="zipcode-search"
                    placeholder="number"
                />
                 <label for="zipcode">zipcode: </label>
                <input
                    id="zipcode"
                    name="zipcode"
                    type="number"
                    className="zipcode"
                    placeholder="enter zipcode"
                />
            <button type="submit">Submit</button>>
            </form>
            {/* </container> */}
            <ul className="arts-list">
            </ul>
            <div className="proxy" id="myData">
            <script src="sf-data/scripts/cul-rec.script.js"></script>
            </div></td>
            <td>TBD</td>
        </tr>
        </table>
        
        <div className="factoidQ">Would you like to know what City-funded public art is in your area?</div>

        <form className="form">
              
            <label for="zipcode-search">Number of Art Pieces to View: </label>
            <input
                id="zipcode-search"
                name="zipcode-search"
                type="number"
                className="zipcode-search"
                placeholder="number"/>

            <label for="zipcode">zipcode:</label>
            <input
                id="zipcode"
                name="zipcode"
                type="number"
                className="zipcode"
                placeholder="enter zipcode"/>

                <button type="submit">Submit</button>
            
            </form>
            
            <ul className="arts-list"></ul>
            
            <div className="proxy" id="myData"></div>
            
            <script src="sf-data/scripts/cul-rec.script.js"></script>
    </div>
    );
}
