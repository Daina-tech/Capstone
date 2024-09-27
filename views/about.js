import html from "html-literal";
import logoPic from "../public/freshNFuelLogo.jpg";
import slackProfile from "../public/slackProfile.jpg";

export default () => html`
  <section id="about">
    <img src="${logoPic}" alt="" id="logoPic" />
    <h2>About fresh N fuel:</h2>
    <p>
      With experience I have in the logistics industries and working directly
      with long haul drivers I understand the importance of having a place to
      stop refresh and refuel. Although the initial idea for this app was to
      help truck drivers find a place to stop, rest, eat, shower, use the
      restroom, and refuel, I hope this app can be used by anyone who is on the
      road whether it is traveling for work, with family or friends on road
      trip, or for those whom are living in their vehicles, or it could be a
      combination of the things above and they just need a place to stop reFRESH
      and reFUEL.
    </p>
  </section>
  <section id="aboutMe">
    <img src="${slackProfile}" alt="" id="profilePic" />
    <h2>About Me:</h2>
    <p>
      Hi there! I am Daina Dorsey, wife and mother of three born and raised in
      Kansas City MO, Go CHIEFS!! My venture into the tech industry began as a
      tech support specialist in wireless communications, satellite
      communications, and commercial surveillance industries. I managed
      authorized dealers, and professional installers trouble shoot devices for
      our clients. This gave me great insight and interest on user interactions
      and user experiences with various devices. I am now working in tech as a
      full stack developer and actively expanding my knowledge and growth with
      in this scope. Along with working in tech I also enjoy: riding bikes,
      swimming, live music, traveling, baking, sewing and spending time with my
      family.
    </p>
  </section>
`;
