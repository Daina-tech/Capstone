import html from "html-literal";
import logopic from "../public/freshNFuelLogo.jpg";

export default () => html`
  <footer>
    <div class="footer-social">
      <a href="#"><i class="fab fa-github fa-2x"></i></a>
      <a href="#"><i class="fab fa-linkedin fa-2x"></i></a>
    </div>
    <div class="footer-logo">
      <a href="/home" data-navigo><img src="${logopic}" alt="footer-link"/></a>
      <p class="copyright">
        Copyright &copy; 2024 fresh N fuel
      </p>
    </div>
  </footer>
`;
