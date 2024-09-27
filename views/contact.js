import html from "html-literal";
import contactPic from "../public/contact-computer.jpg";

export default () => html`
  <section id="contact" class="contact flex-col">
    <h2>Contact Us</h2>
    <div class="row">
      <div class="column">
        <div class="column-1">
          <img src="${contactPic}" alt="" />
        </div>
      </div>
      <div class="column">
        <div class="column-2 bg-light">
          <h2>Request Callback</h2>
          <form
            action="https://formspree.io/f/mblrndkw"
            method="POST"
            class="callback-form"
          >
            <div class="form-control">
              <label for="email">Your email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div class="form-control">
              <label for="message">Your message:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
              />
            </div>
            <input type="submit" value="Send" id="submit" class="btn" />
          </form>
        </div>
      </div>
    </div>
  </section>
`;
