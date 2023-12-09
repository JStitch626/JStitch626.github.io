const skillsItems = [
  {
    name: "HTML5",
    link: "../images/html5-original-wordmark.svg",
  },

  {
    name: "CSS3",
    link: "../images/css3-original-wordmark.svg",
  },

  {
    name: "JavaScript",
    link: "../images/javascript-original.svg",
  },
  {
    name: "Git",
    link: "../images/git-scm-icon.svg",
  },

  {
    name: "Github",
    link: "../images/github.svg",
  },

  {
    name: "VS Code",
    link: "../images/Visual_Studio_Code_1.35_icon.svg",
  },

  {
    name: "Figma",
    link: "../images/figma-icon.svg",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */

const skillsTemplate =
  document.querySelector("#skills-template").content.firstElementChild;
const skillsListElement = document.querySelector(".skills__list");

/* -------------------------------------------------------------------------- */
/*                                 Functions                                 */
/* -------------------------------------------------------------------------- */

function getSkillElement(skillData) {
  const skillElement = skillsTemplate.cloneNode(true);
  const skillIconElement = skillElement.querySelector(".skills__icon");
  const skillItemNameElement = skillElement.querySelector(".skills__item_name");
  skillIconElement.setAttribute("src", skillData.link);
  skillIconElement.setAttribute("alt", skillData.name);
  skillItemNameElement.textContent = skillData.name;
  return skillElement;
}

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

skillsItems.forEach((skillData) => {
  const skillElement = getSkillElement(skillData);
  console.log(skillElement);
  skillsListElement.append(skillElement);
});
