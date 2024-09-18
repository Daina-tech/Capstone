import html from "html-literal";
import logoPic from "../public/freshNFuelLogo.jpg";

export default state => html`
  <section id="home">
    <section id="weather">
      <div>
        <h3>
          <i class="fa-solid fa-temperature-half" style="color: #b91604;"></i
          >The weather in ${state.weather.city} is ${state.weather.description}.
          Temperature is ${state.weather.temp}F, and it feels like
          ${state.weather.feelsLike}F.
        </h3>
      </div>
    </section>
    <section id="hero">
      <h2 id="home-heading">
        <img src="${logoPic}" alt="home image" />
      </h2>
      <h1 id="hero-heading">
        Welcome To fresh N fuel
      </h1>
      <h2 id="start">Find your next stop to reFRESH & reFUEL!</h2>
      <a href="/search">Get Started</a>
    </section>
  </section>
`;
