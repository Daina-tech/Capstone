import html from "html-literal";
export default state =>
  html`
    <table id="stops">
      <tr>
        <th scope="col">Name</th>
        <th scope="col">State</th>
        <th scope="col">Location</th>
        <th scope="col">Highway</th>
        <th scope="col">City Nearby</th>
        <th scope="col">Direction</th>
        <th scope="col">Mile Marker</th>
        <th scope="col">Amenities</th>
      </tr>
      ${state.stops
        .map(
          stop =>
            ` <tr> <td>${stop.name}</td> <td>${stop.state}</td> <td>${
              stop.location
            }</td> <td>${stop.highway}</td> <td>${stop.nearby}</td> <td>${
              stop.direction
            }</td> <td>${stop.mileMarker}</td> <td>${stop.amenities.join(
              ", "
            )}</td> </tr> `
        )
        .join("")}
    </table>
  `;
