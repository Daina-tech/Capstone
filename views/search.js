import html from "html-literal";
export default state => html`
  <section id="search-container">
    <form id="search" method="POST" action="">
      <h2>Search For Stops</h2>
      <div>
        <label class="required" for="state">State:*</label>
        <select id="state" name="state" required>
          <option value="">Select a State</option>
          <option value="Alabama" disabled>Alabama</option>
          <option value="Alaska" disabled>Alaska</option>
          <option value="Arizona" disabled>Arizona</option>
          <option value="Arkansas" disabled>Arkansas</option>
          <option value="California" disabled>California</option>
          <option value="Colorado" disabled>Colorado</option>
          <option value="Connecticut" disabled>Connecticut</option>
          <option value="Delaware" disabled>Delaware</option>
          <option value="District of Columbia" disabled
            >District Of Columbia</option
          >
          <option value="Florida" disabled>Florida</option>
          <option value="Georgia" disabled>Georgia</option>
          <option value="Hawaii" disabled>Hawaii</option>
          <option value="Idaho" disabled>Idaho</option>
          <option value="Illinois" disabled>Illinois</option>
          <option value="Indiana" disabled>Indiana</option>
          <option value="Iowa" disabled>Iowa</option>
          <option value="Kansas" disabled>Kansas</option>
          <option value="Kentucky" disabled>Kentucky</option>
          <option value="Louisiana" disabled>Louisiana</option>
          <option value="Maine" disabled>Maine</option>
          <option value="Maryland" disabled>Maryland</option>
          <option value="Massachusetts" disabled>Massachusetts</option>
          <option value="Michigan" disabled>Michigan</option>
          <option value="Minnesota" disabled>Minnesota</option>
          <option value="Mississippi" disabled>Mississippi</option>
          <option value="Missouri" class="available">Missouri</option>
          <option value="Montana" disabled>Montana</option>
          <option value="Nebraska" disabled>Nebraska</option>
          <option value="Nevada" disabled>Nevada</option>
          <option value="New Hampshire" disabled>New Hampshire</option>
          <option value="New Jersey" disabled>New Jersey</option>
          <option value="New Mexico" disabled>New Mexico</option>
          <option value="New York" disabled>New York</option>
          <option value="North Carolina" disabled>North Carolina</option>
          <option value="North Dakota" disabled>North Dakota</option>
          <option value="Ohio" disabled>Ohio</option>
          <option value="Oklahoma" disabled>Oklahoma</option>
          <option value="Oregon" disabled>Oregon</option>
          <option value="Pennsylvania" disabled>Pennsylvania</option>
          <option value="Rhode Island" disabled>Rhode Island</option>
          <option value="South Carolina" disabled>South Carolina</option>
          <option value="South Dakota" disabled>South Dakota</option>
          <option value="Tennessee" disabled>Tennessee</option>
          <option value="Texas" disabled>Texas </option
          ><option value="Utah" disabled>Utah</option>
          <option value="Vermont" disabled>Vermont</option>
          <option value="Virginia" disabled>Virginia</option>
          <option value="Washington" disabled>Washington</option>
          <option value="West Virginia" disabled>West Virginia</option>
          <option value="Wisconsin" disabled>Wisconsin</option>
          <option value="Wyoming" disabled>Wyoming</option>
        </select>
      </div>
      <div>
        <label class="required" for="highway">Interstate Highway:*</label>
        <select name="highway" id="highway">
          <option value="">Select a Highway</option>
          ${state.highways && state.highways.length > 0
            ? state.highways
                .map(
                  highway => `<option value="${highway}">${highway}</option>`
                )
                .join("")
            : `<option disabled>No highways available</option>`}
        </select>
      </div>
      <div>
        <label for="city">City:</label>
        <input
          type="text"
          name="city"
          id="city"
          row="2"
          placeholder="Enter City"
        />
      </div>
      <input type="submit" value="Submit" class="btn btn-primary" />
    </form>
  </section>
`;
