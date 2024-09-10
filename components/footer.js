import html from "html-literal";

export default () => html`
  <footer>
    <div class="social">
      <a href="#"><i class="fab fa-github fa-2x"></i></a>
      <a href="#"><i class="fab fa-linkedin fa-2x"></i></a>
    </div>
    <p>
      Copyright &copy; 2024 fresh N fuel
    </p>
    <div class="footer-logo">
      <a href="/home" data-navigo
        ><img src="../public/freshNFuelLogo.jpg" alt=""
      /></a>
    </div>
  </footer>
`;
