import html from "html-literal";
import navItem from "./navItems.js";
import logoPic from "../public/freshNFuelLogo.jpg";

export default state => {
  return html`
    <header id="nav-header">
      <nav>
        <i class="fas fa-bars"></i>
        <ul class="nav-links">
          ${state.map(item => navItem(item)).join("")}
        </ul>
      </nav>
    </header>
  `;
};

export function addNavButtonEventHandler() {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
}
