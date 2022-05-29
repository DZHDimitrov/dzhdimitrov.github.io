import { skillsPage } from "./views/skills.js";
import { educationPage } from "./views/education.js";
import { experiencePage } from "./views/experience.js";
import { interestsPage } from './views/interests.js';

import { varToString } from "./utilities/format.js";

const containerToRender = document.querySelector(".dynamic-content");
const renderFunction = (template) => {
  containerToRender.appendChild(template);
};

const skills = document.getElementById("skills");
const education = document.getElementById("education");
const experience = document.getElementById("experience");
const interests = document.getElementById("interests");

const pages = setMap();

setLinks(skills, education, experience, interests);

function setLinks(...allPages) {
  allPages.forEach((el) => {
    if (el.id == "skills") {
      const skillsPage = pages.get("skills" + "Page");
      skillsPage(renderFunction);
    }

    el.addEventListener("click", (e) => {
      e.preventDefault();

      if (el.classList.contains("active-nav")) {
        return;
      }
      
      clearNavLinks(allPages);
      el.classList.add("active-nav");

      const pageName = el.id;
      const func = pages.get(pageName + "Page");
      if (func) {
        if (removeSection(containerToRender, pageName)) {
          func(renderFunction);
        }
      }
    });
  });
}

function clearNavLinks(links) {
  links.forEach((el) => {
    if (el.classList.contains("active-nav")) {
      el.classList.remove("active-nav");
    }
  });
}

function removeSection(id) {
  const section = containerToRender.lastChild;
  
  if (section.classList.contains(id)) {
    return false;
  }
  
  containerToRender.removeChild(section);

  return true;
}

function setMap() {
  const pagesMap = new Map();

  pagesMap.set(varToString({ skillsPage }), skillsPage);
  pagesMap.set(varToString({ educationPage }), educationPage);
  pagesMap.set(varToString({ experiencePage }), experiencePage);
  pagesMap.set(varToString({ interestsPage }), interestsPage);

  return pagesMap;
}
