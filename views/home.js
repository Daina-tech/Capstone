import html from "html-literal";

export default state => html`
  <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>
  <section id="hero">
    <h1>
      fresh N fuel
    </h1>
    <h2>Find your next stop!</h2>
    <a href="index.html">Get Started</a>
  </section>
`;
