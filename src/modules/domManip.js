import LocalStorage from "./LocalStorage";
import Project from "./Project";
import Task from "./Task";

const domManip = () => {
  function loadHome() {
    loadProjects();
    initDefaultBtns();
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
    initProjectDeleteBtn();
    initProjectPreviewBtns();
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
    initProjPopupBtns();
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
    const formatTitle = title.split(" ").join("");
    taskList.innerHTML += `
    <div class="task-ui" id=${formatTitle}>
      <p><input type="radio" name="radio"></input>${title}</p>
      <p>${description}</p>
      <p>${dueDate}</p>
      <p>${priority}</p>
    </div>
    `;
    initDeleteTask();
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
      initTaskModalBtn();
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
      clearInputField();
      return;
    }

    localStore.addTask(
      projectName,
      Task(taskTitle, description, dueDate, priority)
    );

    createTaskUI(taskTitle, description, dueDate, priority);

    clearInputField();
  }

  function initAddProjectBtn() {
    const create = document.getElementById("create");

    create.addEventListener("click", addProject);
  }

  function initProjPopupBtns() {
    const projPopupBtn = document.getElementById("create__project");
    const cancelBtn = document.getElementById("close");
    const addPopup = document.querySelector(".project-modal ");
    projPopupBtn.addEventListener("click", () => {
      addPopup.classList.add("active");
    });
    cancelBtn.addEventListener("click", () => {
      addPopup.classList.remove("active");
    });
  }

  function initProjectDeleteBtn() {
    const delProject = document.querySelectorAll(".delete_project");
    delProject.forEach((button) =>
      button.addEventListener("click", (e) => {
        const projectName = e.target.id;
        LocalStorage().deleteProject(projectName);
        clearProjectContent();
        loadProjects();
      })
    );
  }

  function clearProjectContent() {
    const container = document.querySelector(".project-list");
    container.textContent = "";
  }

  // Clears the projects tasks on the UI
  function clearProjectPreview() {
    const container = document.querySelector(".project__content");
    container.innerHTML = "";
  }

  function initTaskAddBtn() {
    const submit = document.getElementById("submit");
    const taskModal = document.querySelector(".task-modal");
    const overlay = document.getElementById("overlay");

    submit.addEventListener("click", addTask);
    submit.addEventListener("click", () => {
      taskModal.classList.remove("open");
      overlay.classList.remove("active");
    });
  }

  function clearTasks() {
    const container = document.querySelector(".task-list");
    container.innerHTML = "";
  }

  function initDeleteTask() {
    const projectName = document.getElementById("project-name").textContent;
    const taskUI = document.querySelectorAll(".task-ui");
    taskUI.forEach(
      (task) =>
        task.addEventListener("click", function (e) {
          e.stopPropagation();
          const taskName = this.getAttribute("id");
          LocalStorage().deleteTask(projectName, taskName, title);
          clearProjectPreview();
          loadProjectContent(projectName);
        }),
      {
        capture: true,
      }
    );
  }

  function initDefaultBtns() {
    const inbox = document.getElementById("all-tasks");
    const todayTasks = document.getElementById("today-tasks");
    const weekTasks = document.getElementById("week-tasks");

    inbox.addEventListener("click", handleProjectButton);
    todayTasks.addEventListener("click", updateTodayProject);
    todayTasks.addEventListener("click", handleProjectButton);
    weekTasks.addEventListener("click", handleProjectButton);
  }

  function initProjectPreviewBtns() {
    const projBtn = document.querySelectorAll(".side-proj h4");
    projBtn.forEach((button) =>
      button.addEventListener("click", handleProjectButton)
    );
  }

  function handleProjectButton(e) {
    const name = e.target.textContent;
    loadProjectContent(name);
  }

  function updateTodayProject() {
    LocalStorage().updateTodayProject();
  }

  function initTaskModalBtn() {
    const taskPopupBtn = document.getElementById("button-add-task");
    const taskModal = document.querySelector(".task-modal");
    const overlay = document.getElementById("overlay");

    const openModal = () => {
      taskModal.classList.add("open");
      overlay.classList.add("active");
    };

    const closeModal = () => {
      taskModal.classList.remove("open");
      overlay.classList.remove("active");
    };

    taskPopupBtn.onclick = openModal;
    overlay.onclick = closeModal;
  }

  function clearInputField() {
    let titleInput = document.getElementById("title");
    let descriptionInput = document.getElementById("description");
    let dueDateInput = document.getElementById("dueDate");
    let priorityInput = document.getElementById("priority");

    titleInput.value = "";
    descriptionInput.value = "";
    dueDateInput.value = "";
    priorityInput.value = "";
  }

  return { loadHome };
};

export default domManip;
