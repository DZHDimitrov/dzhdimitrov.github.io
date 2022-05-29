import { html } from "../../node_modules/lit-html/lit-html.js";

const skillsTemplate = html`
  <section class="skills">
    <h3>Skills</h3>
    <div class="skills-container u-fade-in">
      <div class="skills__box">
        <div class="skills__box-text">
          <h6>.NET</h6>
          <hr class="o-separator" />
          <p>
            Experience in personal projects only with the following
            technologies:
          </p>
          <ul class="technology-details">
            <li>
              <img src="./assets/svgs/mssql.svg" alt="" />
              <span>MS SQL</span>
            </li>
            <li>
              <img src="./assets/svgs/efcore.svg" alt="" />
              <span>EF Core</span>
            </li>
            <li>
              <img src="./assets/svgs/aspnet.svg" alt="" />
              <span>ASP.NET Core</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="skills__box">
        <div class="skills__box-text">
          <h6>Front-end</h6>
          <hr class="o-separator" />
          <p>
            Experience in personal projects as well as professional experiece
            with:
          </p>
          <ul class="technology-details">
            <li>
              <img src="./assets/svgs/html.svg" alt="" />
              <span>HTML</span>
            </li>
            <li>
              <img src="./assets/svgs/sass.svg" alt="" />
              <span>Sass</span>
            </li>
            <li>
              <img src="./assets/svgs/css3.svg" alt="" />
              <span>CSS</span>
            </li>
            <li>
              <img src="./assets/svgs/js.svg" alt="" />
              <span>Javascript</span>
            </li>
            <li>
              <img src="./assets/svgs/angular.svg" alt="" />
              <span>Angular</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="skills__box">
        <div class="skills__box-text">
          <h6>Other</h6>
          <hr class="o-separator" />
          <p>
            Experience in personal projects as well as professional experiece
            with:
          </p>
          <ul class="technology-details">
            <li>
              <img src="./assets/svgs/mongo.svg" alt="" />
              <span>MongoDb</span>
            </li>
            <li>
              <img src="./assets/svgs/nodejs.svg" alt="" />
              <span>Node.js</span>
            </li>
            <li>
              <img src="" alt="" />
              <span>Express.js</span>
            </li>
            <li>
              <img src="./assets/svgs/typescript.svg" alt="" />
              <span>Typescript</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
`;

export async function skillsPage(render) {
  render(skillsTemplate);
}
