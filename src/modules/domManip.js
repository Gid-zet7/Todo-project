import LocalStorage from "./LocalStorage";
import Project from "./Project";
import Task from "./Task";

const domManip = () => {
  function loadHome() {
    loadProjects();
    loadProjectContent("Inbox");
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

  function loadProjectContent(projectName) {
    const projectContainer = document.querySelector(".project__content");
    projectContainer.innerHTML = `
      <h1 id="project-name">${projectName}</h1>
      <div class="tasks-list" id="tasks-list"></div>`;

    if (projectName !== "Today Tasks" && projectName !== "Upcoming Tasks") {
      projectContainer.innerHTML += `
      <button class="btn-add-task" id="button-add-task">
        Add Task
      </button>`;
    }

    loadTasks(projectName);
  }

  function createTaskUI(title, description, dueDate, priority) {
    const taskList = document.querySelector(".tasks-list");
    // const text = title
    const formatTitle = title.split(" ").join("");
    taskList.innerHTML += `
    <div class="task-ui" id=${formatTitle}>
      <p><input type="radio" name="radio"></input>${title}</p>
      <p>${description}</p>
      <p>${dueDate}</p>
      <p>${priority}</p>
    </div>
    `;
  }

  function loadTasks(projectName) {
    const projects = LocalStorage().getTodo().projects;
    const getProject = (projectName) => {
      return projects.find((project) => project.name === projectName);
    };
    console.log(getProject(projectName));
    getProject(projectName).tasks.forEach((task) =>
      createTaskUI(task.name, task.description, task.dueDate, task.priority)
    );
    if (projectName !== "Today Tasks" && projectName !== "Upcoming Tasks") {
      initTaskAddBtn();
    }
  }

  function addTask() {
    const projectName = document.getElementById("project-name").textContent;
    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");
    const dueDateInput = document.getElementById("dueDate");
    const priorityInput = document.getElementById("priority");

    const taskTitle = titleInput.value;
    const description = descriptionInput.value;
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;

    if (taskTitle === "") {
      alert("Title cannot be empty");
      return;
    }

    const localStore = LocalStorage();
    const getProject = (projectName) => {
      return localStore
        .getTodo()
        .projects.find((project) => project.name === projectName);
    };

    const projectTasks = getProject(projectName).tasks;
    const exists = (taskName) => {
      return projectTasks.some((task) => task.name === taskName);
    };

    if (exists(taskTitle)) {
      alert("Task already exists");
      // Create a function to clear all input fields
      return;
    }

    localStore.addTask(
      projectName,
      Task(taskTitle, description, dueDate, priority)
    );

    createTaskUI(taskTitle, description, dueDate, priority);

    // Create a function to clear all input fields
  }

  function initAddProjectBtn() {
    const create = document.getElementById("create");

    create.addEventListener("click", addProject);
  }

  function initTaskAddBtn() {
    const submit = document.getElementById("submit");

    submit.addEventListener("click", addTask);
  }

  return { loadHome };
};

export default domManip;