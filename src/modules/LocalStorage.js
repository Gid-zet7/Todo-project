import { isToday, toDate } from "date-fns";
import Task from "./Task";
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

  const getFormattedDate = (dueDate) => {
    // console.log(dueDate);
    const day = dueDate.split("-")[2];
    const month = dueDate.split("-")[1];
    const year = dueDate.split("-")[0];
    return `${month}/ ${day}/ ${year}`;
  };

  const updateTodayProject = () => {
    const todo = getTodo();

    const exists = (taskName) => {
      return todo.projects[1].tasks.some((task) => task.name === taskName);
    };

    const getTodayTask = () => {
      let todayTasks = [];
      todo.projects.forEach((project) => {
        project.tasks.filter((task) => {
          const taskDate = new Date(getFormattedDate(task.dueDate));
          if (isToday(toDate(taskDate)) && !exists(task.name)) {
            todayTasks.push(task);
          }
        });
      });
      return todayTasks;
    };

    todo.projects.forEach((project) => {
      if (project.name === "Today Tasks" || project.name === "Upcoming Tasks")
        return;

      todo.projects[1].tasks = [];

      const todayTasks = getTodayTask();
      console.log(todayTasks);
      todayTasks.forEach((task) => {
        todo.projects[1].tasks.push(
          Task(task.name, task.description, task.dueDate, task.priority)
        );
      });
    });
    console.log(todo.projects[1].tasks);
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
    updateTodayProject,
  };
};

export default LocalStorage;
