const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

for (let i = 0; i < 3; i++) {
  
 
  let title = prompt(`Enter task ${i + 1} title:`);

  let description = prompt(`Enter task ${i + 1} description:`);

  let status = prompt(
    `Enter task ${i + 1} status (todo, doing, done):`
  ).toLowerCase();

  while (
    status !== "todo" &&
    status !== "doing" &&
    status !== "done"
  ) {
    status = prompt(
      "Invalid input. Please enter: todo, doing, or done"
    ).toLowerCase();
  }

  let newId = initialTasks[initialTasks.length - 1].id + 1;

  let newTask = {
    id: newId,
    title: title,
    description: description,
    status: status,
  };

  initialTasks.push(newTask);
}

alert(
  "There are enough tasks on your board, please check them in the console."
);

let completedTasks = initialTasks.filter(function (task) {
  return task.status === "done";
});

console.log("All Tasks:"); 
console.log(initialTasks);

console.log("Completed Tasks:");
console.log(completedTasks);