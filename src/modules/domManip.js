import LocalStorage from "./LocalStorage";
import Project from "./Project";

const domManip = () => {
  function loadHome() {
    loadProjects();
  }
  function createProjectUI(projectName) {
    const projectContainer = document.querySelector(".project-list");
    projectContainer.innerHTML += `
    <div class="side-proj">
      <h4>${projectName}</h4>
        <svg xmlns="http://www.w3.org/2000/svg" class="delete_project" id="${projectName}"
        height="15" viewBox="0 96 960 960" width="20" fill="#8054FF">
        <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
        </svg>
      </div>
    </div>
    `;
  }

  //   Loads projects from the localStorage and creates the project UI with the data retrieved
  function loadProjects() {
    LocalStorage()
      .getTodo()
      .projects.forEach((project) => {
        if (
          project.name !== "Inbox" &&
          project.name !== "Today Tasks" &&
          project.name !== "Upcoming Tasks"
        ) {
          createProjectUI(project.name);
        }
      });
    initAddProjectBtn();
  }

  function addProject() {
    const createProjectInput = document.getElementById("project-input");
    const projectName = createProjectInput.value;

    if (projectName === "") {
      alert("Please enter a name for your project");
      return;
    }

    const loalStore = LocalStorage();
    const exists = (name) => {
      return loalStore
        .getTodo()
        .projects.some((project) => project.name === name);
    };

    if (exists(projectName)) {
      createProjectInput.value = "";
      alert("Project already exist");
      return;
    }

    loalStore.addProject(Project(projectName));

    createProjectUI(projectName);

    createProjectInput.value = "";
  }

  function initAddProjectBtn() {
    const create = document.getElementById("create");

    create.addEventListener("click", addProject);
  }

  return { loadHome };
};

export default domManip;
