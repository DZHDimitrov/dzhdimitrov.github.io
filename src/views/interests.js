import { html } from "../../node_modules/lit-html/lit-html.js";

const interestsTemplate = () => html`
  <section class="interests">
    <div class="interests-wrapper u-fade-in">
      <h5>
        <span>
          <i class="fa-solid fa-book-open-reader"></i>
        </span>
        Interests
      </h5>
      <p>
        I like spending most of my time on watching videos, reading books,
        building projects associated with self-developement in software. I am
        also a traveller, curious to see and learn about different cultures.
        During the rest of my spare time I usually train or enjoy playing
        computer games.
      </p>
      <div class="interests-container">
        <div class="interests-box">
          <i class="fa-solid fa-book-open-reader"></i>
        </div>
        <div class="interests-box">
          <i class="fa-solid fa-plane"></i>
        </div>
        <div class="interests-box">
          <i class="fa-solid fa-volleyball"></i>
        </div>
        <div class="interests-box">
          <i class="fa-solid fa-gamepad"></i>
        </div>
      </div>
    </div>
  </section>
`;

export function interestsPage(render) {
    render(interestsTemplate());
}
