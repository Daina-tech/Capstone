import html from "html-literal";
export default state =>
  html`
    <table id="stops">
      <tr>
        <th>Name</th>
        <th>State</th>
        <th>Location</th>
        <th>Highway</th>
        <th>City Nearby</th>
        <th>Direction</th>
        <th>Mile Marker</th>
        <th>Amenities</th>
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
