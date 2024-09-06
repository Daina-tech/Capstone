import html from "html-literal";
export default () =>
  html`
    <section id="create">
      <form id="create" method="POST" action="">
        <h2>Create a Stop</h2>
        <div>
          <label for="highway">Highway:</label>
          <input
            type="text"
            name="highway"
            id="highway"
            placeholder="Enter
          Highway"
            required
          />
        </div>
        <div>
          <label for="direction">Direction:</label>
          <input
            type="text"
            name="direction"
            id="direction"
            placeholder="Enter Direction ex: East"
            required
          />
        </div>
        <div>
          <label for="sauce">Sauce:</label>
          <input
            type="text"
            name="sauce"
            id="sauce"
            placeholder="Enter Sauce"
            required
          />
        </div>
        <div>
          <label for="amenities">Amenities:</label>
          <input
            type="checkbox"
            id="id_of_checkbox1"
            class="items1"
            name="amenities"
            value="food"
          />
          <label for="amenity1">vending machines</label>
          <input
            type="checkbox"
            id="id_of_checkbox2"
            class="items1"
            name="amenities"
            value="food"
          />
          <label for="amenity2">restroom</label>
          <input
            type="checkbox"
            id="id_of_checkbox3"
            class="items1"
            name="amenities"
            value="restroom"
          />
          <label for="amenity3">showers</label>
          <input
            type="checkbox"
            id="id_of_checkbox4"
            class="items1"
            name="amenities"
            value="showers"
          />
          <label for="amenity4">rest stop</label>
          <input
            type="checkbox"
            id="id_of_checkbox5"
            class="items1"
            name="amenities"
            value="restStop"
          />
          <label for="amenity5">fuel</label>
          <input
            type="checkbox"
            id="id_of_checkbox6"
            class="items1"
            name="amenities"
            value="fuel"
          />
          <label for="amenity6">children play area</label>
          <input
            type="checkbox"
            id="id_of_checkbox7"
            class="items1"
            name="amenities"
            value="playArea"
          />
          <label for="amenity7">pet area</label>
          <input
            type="checkbox"
            id="id_of_checkbox8"
            class="items1"
            name="amenities"
            value="petArea"
          />
          <label for="amenity8">parking</label>
          <input
            type="checkbox"
            id="id_of_checkbox9"
            class="items1"
            name="amenities"
            value="spaces"
          />
          <label for="amenity9">family restroom</label>
        </div>
        <input
          type="checkbox"
          id="id_of_checkbox10"
          class="items1"
          value="restroom"
        />
        <input type="create" name="create" value="createStop" />
      </form>
    </section>
  `;
