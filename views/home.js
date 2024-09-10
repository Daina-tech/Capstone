import html from "html-literal";
import logoPic from "../public/freshNFuelLogo.jpg";

export default state => html`
  <section id="home">
    <h2>
      <img src="${logoPic}" alt="home image" />
    </h2>
    <section id="weather">
      <h3>
        The weather in ${state.weather.city} is ${state.weather.description}.
        Temperature is ${state.weather.temp}F, and it feels like
        ${state.weather.feelsLike}F.
      </h3>
    </section>
    <section id="hero">
      <h1>
        <span>Welcome to</span>
        fresh N fuel
      </h1>
      <h2>Find your next stop!</h2>
      <a href="index.html">Get Started</a>
    </section>
  </section>
`;
