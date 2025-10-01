1. What is JSX, and why is it used?

JSX stands for JavaScript XML. It is a syntax extension for JavaScript commonly used with React to describe what the UI should look like. JSX allows you to write HTML-like code directly within JavaScript, which React then transforms into JavaScript calls that create DOM elements.

2. What is the difference between State and Props?

State is a component’s internal, mutable data that can change over time, usually in response to user actions. It is controlled within the component and changing it triggers a re-render.

Props (short for properties) are read-only data passed from a parent component to a child component. Props cannot be changed by the child and are used to pass information or event handlers.

3. What is the useState hook, and how does it work?

The useState hook is a built-in React hook that allows functional components to have state. Before hooks, only class components could use state.

It lets you store and update dynamic values in your component and triggers a re-render when the state changes.

4. How can you share state between components in React?

In React, state is local to a component, so to share it between components, you need to lift the state up or use state management techniques.Move the shared state to the closest common parent of the components that need it.
Pass the state and state-updating function as props to the child components.

5. How is event handling done in React?

In React, event handling is done using camelCase event names and passing function references instead of strings. React provides synthetic events, which are cross-browser wrappers around native events.
