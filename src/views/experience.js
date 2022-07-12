import { e } from "../utilities/dom.js";

const experienceTemplate = () =>
  e("section", { className: "experience" }, [
    e("div", { className: "experience-wrapper u-fade-in" }, [
      e(
        "h5",
        {},
        [e("span", {}, [e("i", { className: "fa-solid fa-briefcase" }, [])])],
        "Exeperience"
      ),
      e("div", { className: "education-timeline" }, [
        e("article", {}, [
          e("h6", { className: "u-clear-margin" }, "2N Soft"),
          e("p", {}, "2021 - 2022"),
          e(
            "p",
            { className: "u-clear-margin" },
            "Working as a junior-web developer on back-end and front-end on projects of a different nature.The main technologies are Node.js, MongoDb, Express.js, Angular."
          ),
        ]),
        e("article", {}, [
          e("h6", { className: "u-clear-margin" }, "TVT - International"),
          e("p", {}, "2019 - 2021"),
          e(
            "p",
            { className: "u-clear-margin" },
            "Being a sales agent and responsible for maintaining a deep understanding of marketplace trends and competitor activity. Carrying out intense and detailed negotiations with clients."
          ),
        ]),
        e("article", {}, [
          e("h6", { className: "u-clear-margin" }, "Ministry of transport"),
          e("p", {}, "2018 - 2019"),
          e(
            "p",
            { className: "u-clear-margin" },
            "Working as a junior inspector. I was answering and helping clients with enquiries associated with internal and external transport. Furthermore, I was accepting,issuing and verifying licenses of drivers or annual technical inspections."
          ),
        ]),
        e("article", {}, [
          e("h6", { className: "u-clear-margin" }, "Fairplay Properties Management"),
          e("p", {}, "2015 - 2018"),
          e(
            "p",
            { className: "u-clear-margin" },
            "Three consquetive years as a lifeguard and swimming teacher for kids. Responsible for guests' safety around the water areas."
          ),
        ]),
      ]),
    ]),
  ]);

export function experiencePage(render) {
  render(experienceTemplate());
}
