import html from "html-literal";
import contactPic from "../public/contact-computer.jpg";

export default state => html`
  <section id="contact-fnf" class="contact">
    <h1>Contact US</h1>
    <div class="contact-items">
      <img src="${contactPic}" alt="" />

    <!-- <h4>
      Need help, have questions, or concerns?
    </h4>
    <p>Please complete the information below:</p> -->
    <form
      action="https://formspree.io/f/mblrndkw"
      method="POST"
      class="callback-form"
    >
      <div class="form-contact">
        <label for="email"></label>
        <input type="email" name="email" id="email-contact" placeholder="Enter email" />
      </div>
      <div class="form-contact">
        <label for="name"></label>
        <input type="text" name="name" id="name-contact" placeholder="Enter name" />
      </div>
      <div class="form-contact">
        <label for="message"></label>
        <input
          type="text"
          name="message"
          id="message-contact"
          placeholder="Enter message"
        />
      </div>
      <input type="submit" value="Send" id="submit-contact" class="btn-contact" />
</div>
    </form>
  </section>
`;
