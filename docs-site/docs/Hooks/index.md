# Hooks

Hooks are reusable functions that let you tap into and manage stateful logic in your application. They help you share logic across components without repeating code.

## Table of Contents

- [What are Hooks?](#what-are-hooks)
- [Built-in Hooks](#built-in-hooks)
- [Best Practices](#best-practices)
- [Further Reading](#further-reading)

---

## What are Hooks?

Hooks are functions that let you "hook into" features such as state and lifecycle methods in functional components. They make it easier to manage side effects, context, and more.

## Built-in Hooks

Common built-in hooks include:

- `useState` – Manage local component state.
- `useEffect` – Perform side effects in components.
- `useContext` – Access context values.
- `useReducer` – Manage complex state logic.
- `useRef` – Access mutable values and DOM nodes.


## Best Practices

- Always prefix hook names with `use`.
- Only call hooks at the top level of your components or other hooks.
- Avoid calling hooks inside loops, conditions, or nested functions.

## Further Reading

- [React Hooks Documentation](https://react.dev/reference/react)
- [Building Your Own Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

---

Think we're missing one? Feel free to create a Pull Request with any hooks you think would be useful!