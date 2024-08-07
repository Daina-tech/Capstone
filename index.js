import { header, nav, main, footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase } from "lodash";

const router = new Navigo("/");
router.on("/", () => render(store.home)).resolve();
router
.on({
  "/": () => render(),
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
router.updatePageLinks();
return html`<li><a href="${item.url}" title="${item.text}" data-navigo>${item.text}</a></li>`;

// adding one route
router.on("/", () => console.log("Visiting Home Page")).resolve();

// adding more than one route
router.on({
  routeOne: () => console.log("Visiting Route One"),
  routeTwo: () => console.log("Visiting Route Two"),
});

router.on(":x", (defaultParam) => defaultParam);
// returns:
// {x: "<route entered in URL>"}

// When the route http://localhost:1234/home is hit then match.data.view will return "home"
router.on(":view", (match) => match.data.view);
// returns:
// "<route entered in URL>"
