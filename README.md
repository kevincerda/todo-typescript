# To Do App FUN

## General

Create a todo app with a `React` frontend and a `Node + Typescript` backend

## Requirements

Create an app where a user can create an assignment and steps (tasks) to complete each assignments.

Each `Assignment` has a list of `Tasks`.

### Frontend

- Input `Assignments` and corresponding `Tasks` - Check each `Assignment` and `Task` after completion

### Backend

- Using [Typescript](https://www.typescriptlang.org/docs/home.html), create an application server to store `Assignments` and `Tasks` **in-memory** - No database! Choose a data structure that would work for your particular needs!
- Things to use for typescript: - Classes - `private`, `protected`, `public`, etc methods - Interfaces - Strongly typed functions, variables (there's such a thing as Type Inference but let's get used to just writing the type of everything for now) - Let's start with these but there are many many more! Don't be afraid to research and implement something that wasn't mentioned above! I know ya scribes.

### Things to Look Out For

- There's quite a bit of setup needed - Docs are very detailed in how to do it - Ping me if you need help! I don't want you to get bogged down by just setting up the project.
- For **every** dependency, you need to download the `@types/` version too. - Example:
  `bash yarn add bluebird yarn add -D @types/bluebird` - Some dependencies will have the types built in. So, check the documentation first.
- If you create an instance of a class, then the type of the argument, variable, etc is the class - Example:
  `javascript class Animal { constructor(name) { this.name = name; }; } const Dog: Animal = new Animal('Dog');`
