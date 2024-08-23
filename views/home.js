import html from "html-literal";
import logoPic from "../public/freshNFuelLogo.png";

export default state => html`
  <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>
  <section id="hero">
    <h1>
      <img src="${logoPic}" alt="hero image" />
      <span>Welcome to</span>
      fresh N fuel
    </h1>
    <h2>Find your next stop!</h2>
    <a href="index.html">Get Started</a>
  </section>
`;
