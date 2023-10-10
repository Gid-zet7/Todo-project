import Project from "./Project";

const Todo = () => {
  let projects = [];
  projects.push(Project("Inbox"));
  projects.push(Project("Today Tasks"));
  projects.push(Project("Upcoming Tasks"));

  return {
    projects,
  };
};

export default Todo;
