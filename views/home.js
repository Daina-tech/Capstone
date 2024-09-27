import html from "html-literal";
import logoPic from "../public/freshNFuelLogo.jpg";
import box1Pic from "../public/road-trip.jpg";
import box2Pic from "../public/rv-roadster.jpg";
import box3Pic from "../public/truck-driver.jpg";
import box4Pic from "../public/van-life.jpg";

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
      <section class="container">
        <div class="box box-1">
          <img src="${box1Pic}" alt="home-box1 image" />
          <p>Road Trip Adventurers</p>
        </div>
        <div class="box box-2">
          <img src="${box2Pic}" alt="home-box2 image" />
          <p>RV Roadsters</p>
        </div>
        <div class="box box-3">
          <img src="${box3Pic}" alt="home-box3 image" />
          <p>Long Haul Drivers</p>
        </div>
        <div class="box box-4">
          <img src="${box4Pic}" alt="home-box4 image" />
          <p>Van-life Dwellers</p>
        </div>
      </section>
      <h2 id="home-heading">
        <img src="${logoPic}" alt="home image" />
      </h2>
      <h1 id="hero-heading">
        Welcome To fresh N fuel
      </h1>
      <h2 id="start">Find your next stop to reFRESH & reFUEL!</h2>
      <a href="/search">Get Started</a>
    </section>
    <div class="hero-attribution">
      <a href="https://www.freepik.com" target="_blank">
        Images designed by Freepik
      </a>
    </div>
  </section>
`;
