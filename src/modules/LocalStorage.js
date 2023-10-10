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

  return {
    save,
    getTodo,
    renameProject,
    addProject,
    deleteProject,
  };
};

export default LocalStorage;
