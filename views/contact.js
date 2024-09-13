import html from "html-literal";

export default () => html`
  <section id="contact" class="contact flex-col">
    <h2>Contact Us</h2>
    <div class="row">
      <div class="column">
        <div class="column-1">
          <img src="images/home/contact.jpg" alt="" />
        </div>
      </div>
      <div class="column">
        <div class="column-2 bg-light">
          <h2>Request Callback</h2>
          <form action="" class="callback-form">
            <div class="form-control">
              <label for="name"></label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
              />
            </div>
            <div class="form-control">
              <label for="email"></label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div class="form-control">
              <label for="phone"></label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter phone"
              />
            </div>
            <input type="submit" value="Send" id="submit" class="btn" />
          </form>
        </div>
      </div>
    </div>
  </section>
`;
