import Todo from "./Todo";

const LocalStorage = () => {
  const save = (data) => {
    window.localStorage.setItem("todo", JSON.stringify(data));
  };

  const getTodo = () => {
    const todo = Object.assign(
      Todo(),
      JSON.parse(localStorage.getItem("todo"))
    );
    console.log(todo);

    return todo;
  };
  getTodo();

  const addProject = (newProject) => {
    const todo = getTodo();
    todo.projects.push(newProject);
    save(todo);
  };

  const renameProject = (projectName, newName) => {
    const todo = getTodo();
    const project = todo.projects.find((proj) => proj.name === projectName);
    console.log(project);
    project.name = newName;
    save(todo);
  };

  const deleteProject = (projectName) => {
    const todo = getTodo();
    const project = todo.projects.find((proj) => proj.name === projectName);
    todo.projects.splice(todo.projects.indexOf(project), 1);
    save(todo);
  };

  const addTask = (projectName, task) => {
    const todo = getTodo();
    const getProject = (name) => {
      return todo.projects.find((project) => project.name === name);
    };
    getProject(projectName).tasks.push(task);
    console.log(todo.projects);
    save(todo);
  };

  const deleteTask = (projectName, taskName) => {
    const todo = getTodo();
    console.log(`taskName: ${taskName}`);

    const project = todo.projects.find((proj) => proj.name === projectName);
    console.log(project);
    const projectIndex = todo.projects.indexOf(project);
    console.log(projectIndex);

    const taskToDelete = todo.projects[projectIndex].tasks.find(
      (task) => task.name === taskName
    );

    console.log(taskToDelete);

    console.log(todo.projects[projectIndex].tasks.indexOf(taskToDelete));

    todo.projects[projectIndex].tasks.splice(
      todo.projects[projectIndex].tasks.indexOf(taskToDelete),
      1
    );

    save(todo);
  };

  return {
    save,
    getTodo,
    renameProject,
    addProject,
    deleteProject,
    addTask,
    deleteTask,
  };
};

export default LocalStorage;
