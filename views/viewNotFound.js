import html from "html-literal";
import oops404 from "../public/oops-404.jpg";
export default () => html`
  <div id="oops">
    <img id="oops404" src="${oops404}" alt="View not found!" />
    <div class="attribution">
      <a
        href="https://www.freepik.com/free-vector/flat-404-error-template_1588548.htm#fromView=search&page=2&position=8&uuid=ddd23b7c-da53-4a6d-81ec-03bd47b6425a"
        target="_blank"
      >
        Image designed by Freepik
      </a>
    </div>
  </div>
`;
