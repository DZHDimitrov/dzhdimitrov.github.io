import { html } from "../../node_modules/lit-html/lit-html.js";

const educationTemplate = () => html`
  <section class="education">
    <div class="education-wrapper u-fade-in">
      <h5>
        <span>
          <i class="fa-solid fa-graduation-cap"></i>
        </span>
        Education
      </h5>
      <div class="education-timeline">
        <article>
          <h6 class="u-clear-margin">Software University</h6>
          <p>2020 - 2022</p>
          <p class="u-clear-margin">Software Engineering</p>
        </article>
        <article>
          <h6 class="u-clear-margin">University of Economics Varna</h6>
          <p>2013 - 2017</p>
          <p class="u-clear-margin">International Economic Relations</p>
        </article>
        <article>
          <h6 class="u-clear-margin">GRE - Rakovski, Burgas</h6>
          <p>2008 - 2013</p>
          <p class="u-clear-margin">Foreign Languages</p>
        </article>
      </div>
    </div>
  </section>
`;

export async function educationPage(render) {
    render(educationTemplate());
}
