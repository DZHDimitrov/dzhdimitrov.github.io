import { html } from "../../node_modules/lit-html/lit-html.js";

const experienceTemplate = () => html`
  <section class="experience">
    <div class="experience-wrapper u-fade-in">
      <h5>
        <span>
        <i class="fa-solid fa-briefcase"></i>
        </span>
        Experience
      </h5>
      <div class="education-timeline">
        <article>
          <h6 class="u-clear-margin">2N Soft</h6>
          <p>2021 - Present</p>
          <p class="u-clear-margin">
            Working as junior-web developer on back-end as well as on front-end on projects of a
            different nature.The main technologies are Node.js, MongoDb,
            Express.js, Angular
          </p>
        </article>
        <article>
          <h6 class="u-clear-margin">TVT - International</h6>
          <p>2019 - 2021</p>
          <p class="u-clear-margin">
            Being sales agent and responsible for maintaining a deep understanding of marketplace
            trends and competitor activity. Carrying out intense and detailed
            negotiations with clients.
          </p>
        </article>
        <article>
          <h6 class="u-clear-margin">Ministry of transport</h6>
          <p>2018 - 2019</p>
          <p class="u-clear-margin">
            Working as junior inspector. I was answering and helping clients with enquiries associated with
            internal and external transport. Furthermore, I was
            accepting,issuing and verifying licenses of drivers or annual
            technical inspections.
          </p>
        </article>
        <article>
          <h6 class="u-clear-margin">Fairplay Properties Management</h6>
          <p>2015 - 2018</p>
          <p class="u-clear-margin">
            Three consquetive years as a lifeguard and swimming teacher for
            kids. Responsible for guests' safety around the water areas.
          </p>
        </article>
      </div>
    </div>
  </section>
`;

export function experiencePage(render) {
    render(experienceTemplate());
}
