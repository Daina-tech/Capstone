import html from "html-literal";

export default state =>
  html`
    <section id="create">
      <form id="create-post" method="POST" action="">
        <h2>Add A New Stop</h2>
        <div>
          <label class="required" for="state">State:*</label>
          <select id="state" name="state">
            <option value="">Select a State</option>
            <option value="Alabama">Alabama</option>
            <option value="Arkansas">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="Arkansas">Arkansas</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="District of Columbia">District Of Columbia</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Idaho">Idaho</option>
            <option value="Illinois">Illinois</option>
            <option value="Indiana">Indiana</option>
            <option value="Iowa">Iowa</option>
            <option value="Kansas">Kansas</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Maine">Maine</option>
            <option value="Maryland">Maryland</option>
            <option value="Massachusetts">Massachusetts</option>
            <option value="Michigan">Michigan</option>
            <option value="Minnesota">Minnesota</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Missouri">Missouri</option>
            <option value="Montana">Montana</option>
            <option value="Nebraska">Nebraska</option>
            <option value="Nevada">Nevada</option>
            <option value="New Hampshire">New Hampshire</option>
            <option value="New Jersey">New Jersey</option>
            <option value="New Mexico">New Mexico</option>
            <option value="New York">New York</option>
            <option value="North Carolina">North Carolina</option>
            <option value="North Dakota">North Dakota</option>
            <option value="Ohio">Ohio</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Oregon">Oregon</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Rhode Island">Rhode Island</option>
            <option value="South Carolina">South Carolina</option>
            <option value="South Dakota">South Dakota</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="Utah">Utah</option>
            <option value="Vermont">Vermont</option>
            <option value="Virginia">Virginia</option>
            <option value="Washington">Washington</option>
            <option value="West Virginia">West Virginia</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
          </select>
        </div>
        <div>
          <label class="required" for="name">Name:*</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name of Stop"
            value="${state.form.name}"
            required
          />
        </div>
        <!-- Highways -->
        <div>
          <label class="required" for="highways">Highway:*</label>
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
          <label class="required">Direction:</label>
          <label for="direction">Eastbound:</label>
          <input
            type="checkbox"
            id="id_of_checkbox1"
            class="items1"
            name="direction"
            value="${state.form.direction}"
          />
          <label for="direction">Westbound:</label>
          <input
            type="checkbox"
            id="id_of_checkbox2"
            class="items1"
            name="direction"
            value="${state.form.direction}"
          />
          <label for="direction">Northbound:</label>
          <input
            type="checkbox"
            id="id_of_checkbox3"
            class="items1"
            name="direction"
            value="${state.form.direction}"
          />
          <label for="direction">Southbound:</label>
          <input
            type="checkbox"
            id="id_of_checkbox4"
            class="items1"
            name="direction"
            value="${state.form.direction}"
          />
          <label for="direction">Center:</label>
          <input
            type="checkbox"
            id="id_of_checkbox5"
            class="items1"
            name="direction"
            value="${state.form.direction}"
          />
        </div>
        <div>
          <label class="required" for="nearby">Nearby City:*</label>
          <input
            type="text"
            name="nearby"
            id="nearby"
            placeholder="Enter Nearby City"
            value="${state.form.nearby}"
            required
          />
        </div>
        <div>
          <label class="required" for="mile-marker">Mile marker:</label>
          <input
            type="number"
            name="mile-marker"
            id="mile-marker"
            placeholder="Enter Mile Marker"
            value="${state.form.mileMarker}"
          />
        </div>
        <div>
          <label class="required" for="location">Location:</label>
          <input
            type="number"
            name="location"
            id="location"
            placeholder="Enter Coordinates"
            value="${state.form.location}"
          />
        </div>
        <div>
          <label class="required">Amenities:*</label>
          <label for="amenity1">Food</label>
          <input
            type="checkbox"
            id="id_of_checkbox1"
            class="items1"
            name="amenities"
            value="${state.form.amenities}"
          />
          <label for="amenity2">Vending Machines</label>
          <input
            type="checkbox"
            id="id_of_checkbox2"
            class="items1"
            name="amenities"
            value="${state.form.amenities}"
          />
          <label for="amenity3">Restroom</label>
          <input
            type="checkbox"
            id="id_of_checkbox3"
            class="items1"
            name="amenities"
            value="${state.form.amenities}"
          />
          <label for="amenity4">Shower</label>
          <input
            type="checkbox"
            id="id_of_checkbox4"
            class="items1"
            name="amenities"
            value="${state.form.amenities}"
          />
          <label for="amenity5">Family Restroom</label>
          <input
            type="checkbox"
            id="id_of_checkbox5"
            class="items1"
            name="amenities"
            value="${state.form.amenities}"
          />
          <label for="amenity6">Children Play Area</label>
          <input
            type="checkbox"
            id="id_of_checkbox6"
            class="items1"
            name="amenities"
            value="${state.form.amenities}"
          />
          <label for="amenity7">Pet Area</label>
          <input
            type="checkbox"
            id="id_of_checkbox7"
            class="items1"
            name="amenities"
            value="${state.form.amenities}"
          />
          <label for="amenity8">Parking</label>
          <input
            type="checkbox"
            id="id_of_checkbox8"
            class="items1"
            name="amenities"
            value="${state.form.amenities}"
          />
          <label for="amenity9">Fuel</label>
          <input
            type="checkbox"
            id="id_of_checkbox9"
            class="items1"
            name="amenities"
            value="${state.form.amenities}"
          />
        </div>
        <!-- <div>
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
        </div> -->
        <input type="submit" value="create" />
      </form>
    </section>
  `;
