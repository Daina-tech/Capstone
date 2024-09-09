import html from "html-literal";

export default state =>
  html`
    <section id="create">
      <form id="create-post" method="POST" action="">
        <h2>Create a Stop</h2>
        <h3>Add a new stop to the database</h3>
        <div>
          <label class="required" for="state">State</label>
          <select id="state" name="state">
            <option value="">Select a State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>
        <div>
          <label for="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter name of stop"
            value="${state.form.name}"
            required
          />
        </div>

        <!-- Highways -->
        <div>
          <label for="highways">Highway:</label>
          <input list="highways" name="highways" id="highways" required />
          <datalist id="highways">
            <option value="I-29"></option>
            <option value="I-35"></option>
            <option value="I-44"></option>
            <option value="I-55"></option>
            <option value="I-57"></option>
            <option value="I-70"></option>
          </datalist>
        </div>
        <div>
          <label for="direction">Direction:</label>
          <input
            type="checkbox"
            id="id_of_checkbox1"
            class="items1"
            name="direction"
            value="${state.form.direction}"
          />
          <label for="direction">Eastbound:</label>
          <input
            type="checkbox"
            id="id_of_checkbox2"
            class="items1"
            name="direction"
            value="${state.form.direction}"
          />
          <label for="direction">Westbound:</label>
          <input
            type="checkbox"
            id="id_of_checkbox3"
            class="items1"
            name="direction"
            value="${state.form.direction}"
          />
          <label for="direction">Northbound:</label>
          <input
            type="checkbox"
            id="id_of_checkbox4"
            class="items1"
            name="direction"
            value="${state.form.direction}"
          />
          <label for="direction">Southbound:</label>
          <input
            type="checkbox"
            id="id_of_checkbox5"
            class="items1"
            name="direction"
            value="${state.form.direction}"
          />
          <label for="direction">Center:</label>
          <input
            type="checkbox"
            id="id_of_checkbox6"
            class="items1"
            name="direction"
            value="${state.form.direction}"
          />
        </div>
        <div>
          <label for="nearby">Nearby City:</label>
          <input
            type="text"
            name="nearby"
            id="nearby"
            placeholder="Enter nearby city"
            value="${state.form.nearby}"
            required
          />
        </div>
        <div>
          <label for="mile-marker">Mile marker:</label>
          <input
            type="number"
            name="mile-marker"
            id="mile-marker"
            placeholder="Enter
          Mile Marker"
            value="${state.form.mileMarker}"
            required
          />
        </div>
        <div>
          <label for="location">Location:</label>
          <input
            type="number"
            name="location"
            id="location"
            placeholder="Enter
          coordinates"
            value="${state.form.location}"
          />
        </div>
        <div>
          <label for="amenities">Amenities:</label>
          <input
            type="checkbox"
            id="id_of_checkbox1"
            class="items1"
            name="amenities"
            value="${state.form.amenities}"
          />
          <label for="amenity1">Food</label>
          <input
            type="checkbox"
            id="id_of_checkbox2"
            class="items1"
            name="amenities"
            value="${state.form.amenities}"
          />
          <label for="amenity2">Vending Machines</label>
          <input
            type="checkbox"
            id="id_of_checkbox3"
            class="items1"
            name="amenities"
            value="${state.form.amenities}"
          />
          <label for="amenity3">Restroom</label>
          <input
            type="checkbox"
            id="id_of_checkbox4"
            class="items1"
            name="amenities"
            value="${state.form.amenities}"
          />
          <label for="amenity4">Shower</label>
          <input
            type="checkbox"
            id="id_of_checkbox5"
            class="items1"
            name="amenities"
            value="${state.form.amenities}"
          />
          <label for="amenity5">Family Restroom</label>
          <input
            type="checkbox"
            id="id_of_checkbox6"
            class="items1"
            name="amenities"
            value="${state.form.amenities}"
          />
          <label for="amenity6">Children Play Area</label>
          <input
            type="checkbox"
            id="id_of_checkbox7"
            class="items1"
            name="amenities"
            value="${state.form.amenities}"
          />
          <label for="amenity7">Pet Area</label>
          <input
            type="checkbox"
            id="id_of_checkbox8"
            class="items1"
            name="amenities"
            value="${state.form.amenities}"
          />
          <label for="amenity8">Parking</label>
          <input
            type="checkbox"
            id="id_of_checkbox9"
            class="items1"
            name="amenities"
            value="${state.form.amenities}"
          />
        </div>
        <div>
          <label for="type">Type of Stop:</label>
          <input
            type="checkbox"
            id="id_of_checkbox1"
            class="items1"
            name="type"
            value="${state.form.type}"
          />
          <label for="type">Rest Stop:</label>
          <input
            type="checkbox"
            id="id_of_checkbox2"
            class="items1"
            name="type"
            value="${state.form.type}"
          />
          <label for="type">Gas Station:</label>
          <input
            type="checkbox"
            id="id_of_checkbox1"
            class="items1"
            name="type"
            value="${state.form.type}"
          />
        </div>
        <input type="submit" name="create" value="Create A Stop" />
      </form>
    </section>
  `;
