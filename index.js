import { header, nav, main, footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.home) {
  console.log("state", state);
  document.querySelector("#root").innerHTML = `
      ${header(state)}
      ${nav(store.nav)}
      ${main(state)}
      ${footer()}
    `;

  router.updatePageLinks();
}

// add menu toggle to bars icon in nav bar
// document.querySelector(".fa-bars").addEventListener("click", () => {
//   document.querySelector("nav > ul").classList.toggle("hidden--mobile");
// });

router.hooks({
  // We pass in the `done` function to the before hook handler to allow the function to tell Navigo we are finished with the before hook.
  // The `match` parameter is the data that is passed from Navigo to the before hook handler with details about the route being accessed.
  // https://github.com/krasimir/navigo/blob/master/DOCUMENTATION.md#match
  before: (done, match) => {
    // We need to know what view we are on to know what data to fetch
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // Add a case for each view that needs data from an API
      // New Case for the Home View
      case "home":
        axios
        // New Axios get request utilizing already made environment variable
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=imperial&q=st%20louis`
          )
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            store.home.weather = {
              city: response.data.name,
              temp: response.data.main.temp,
              feelsLike: response.data.main.feels_like,
              description: response.data.weather[0].main,
            };
            done();
          })
          .catch((error) => {
            console.log(error);
            done();
          });
          break;
      case "stops" :

        // New Axios get request utilizing already made environment variable
        axios
          .get(`${process.env.FRESH_N_FUEL_API_URL}/stops`)
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            console.log("response", response);
            store.stops.stops = response.data;
            done();
          })
          .catch((error) => {
            console.log("It puked", error);
            done();
          });
          break;
        case "search" :
          axios
          .get(`${process.env.FRESH_N_FUEL_API_URL}/stops/values/highway`)
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            console.log("response", response);
            store.search.highways = response.data;
            done();
          })
          .catch((error) => {
            console.log("It puked", error);
            done();
          });
          break;
      default:
        // We must call done for all views so we include default for the views that don't have cases above.
        done();
        // break is not needed since it is the last condition, if you move default higher in the stack then you should add the break statement.
    }
  },
  already: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    render(store[view]);
  },
  after: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    router.updatePageLinks();

    // add menu toggle to bars icon in nav bar
    document.querySelector(".fa-bars").addEventListener("click", () => {
        document.querySelector("nav > ul").classList.toggle("hidden--mobile");
    });
    if (view === "search") {
      document.querySelector("form").addEventListener("submit", (event) => {
        event.preventDefault();
        const inputList = event.target.elements;
        let queryParams = [];
        queryParams.push(inputList.state.value.length ? `state=${inputList.state.value}` : "");
        queryParams.push(inputList.highway.value.length ? `highway=${inputList.highway.value}` : "");
        let queryString = queryParams.join("&");
          axios.get(`${process.env.FRESH_N_FUEL_API_URL}/stops?${queryString}`).then(response => {
          store.stops.stops = response.data;
          console.log(response);
          router.navigate("/stops");
        });

      });
    }
  }
});

router
.on({
  "/": () => render(store.home),
  // Use object destructuring assignment to store the data and (query)params from the Navigo match parameter
  // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
  // This reduces the number of checks that need to be performed
  ":view": (match) => {
    // Change the :view data element to camel case and remove any dashes (support for multi-word views)
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    // Determine if the view name key exists in the store object
    if (view in store) {
      render(store[view]);
    } else {
      render(store.viewNotFound);
      console.log(`View ${view} not defined`);
    }
  },
})
.resolve();
