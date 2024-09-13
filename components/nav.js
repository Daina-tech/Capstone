import html from "html-literal";
import navItem from "./navItems.js";

export default state => {
  return html`
    <nav>
      <i class="fas fa-bars"></i>
      <ul class="nav-links">
        ${state.map(item => navItem(item)).join("")}
      </ul>
    </nav>
  `;
};

export function addNavButtonEventHandler() {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
}
