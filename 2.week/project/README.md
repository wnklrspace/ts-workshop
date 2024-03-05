# 2-DOITNOW

Congratulations! You are officially a junior software developer at 2-doit. We're a startup that are going to change the way Todos are being approached. Your first exercise will give you in introduction into our codebase with a few small tasks.

## Architecture

### client (frontend)

- `App.jsx`: Wraps the whole application.
- `store/todos.jsx`: Provides a useContext store for managing the state on the client.
- `/components`:

  - `Main.jsx`: This component is only a wrapper for the the main application
  - `Footer.jsx`: The footer holds some useful links
  - `/ToDo`:
    - `InputField.jsx`: This component holds the header with the inputfield for the name of a todo and a button `Add task`.
    - `Item.jsx`: This component is one TodoItem. You can complete it or delete it completely.
    - `List.jsx`: This components iterats over the list of todo items and returns the `Item.jsx`.

- `/types`: There should be all types and interfaces that are being used only in the frontend. (E.g. for components)
- `api.js`: This file provides functions that manage API calls.
- `actions.js`: This file provides functions to use with the client components. They are executing the api functions and manage the client state.

### server (backend)

- `/todo`
- `/todo/:id`

### types (shared types):

The shared types are being used in the frontend as well as in the backend.

- `general.ts`: General types.
- `todos.ts`: Types specific to the Todos.
