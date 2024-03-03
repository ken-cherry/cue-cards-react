const questions = [
  {
    question: "What is React?",
    answer:
      "React is an Open Source view library for building user interfaces or UI components, developed by Facebook.",
  },
  {
    question: "Describe JSX",
    answer:
      "JSX (JavaScriptXML) is a syntax extension for JavaScript recommended by React for describing what the UI should look like.",
  },
  {
    question: "What is the virtual DOM",
    answer:
      "The virtual DOM is a lightweight copy of the actual DOM in memory. React uses it to improve performance by updating only the changed parts fo the actual DOM",
  },
  {
    question: "What is the significance of keys in React?",
    answer:
      "Keys are used to uniquely identify and differentiate between components in React. They help React identify which items have changed, added, or removed.",
  },
  {
    question: "What are state and props in React?",
    answer:
      "State is an internal data store that belongs to a specific component, and it can be changed over time. Props are properties passed to a component from its parent, and they are immutable.",
  },
  {
    question: "What is the difference between state and props?",
    answer:
      "State is internal to a component and can be changed over time, while props are external and passed to a component.",
  },
  {
    question: "Describe the concept of lifting state up.",
    answer:
      "Lifting state up is a pattern where the state of a child component is moved to its parent component, allowing multiple child components to share the same state.",
  },
  {
    question: "What is the purpose of setState in React?",
    answer:
      "setState is used to update the state of component and trigger a re-render.",
  },
  {
    question: "What is React Router?",
    answer:
      "React Router is a library that enables navigation among views in a React application, allowing for the development of single-page applications.",
  },
  {
    question: "Explain the useEffect hook.",
    answer:
      "The useEffect hook in React is used for side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.",
  },
  {
    question: "What are controlled components in React?",
    answer:
      "Controlled components are components where the form data is controlled by React state. The input elements receive their current value from the state and have their value updated through a callback function.",
  },
  {
    question: "What is Redux, and why is it used?",
    answer:
      "Redux is a state management library for JavaScript applications, commonly used with React. It helps manage the state of an application in a predictable way.",
  },
  {
    question: "Explain the concept of higher-order components (HOC).",
    answer:
      "Higher-order components are functions that take a component and return a new component with additional features or props",
  },
  {
    question: "What is the purpose of the useReducer hook?",
    answer:
      "The useReducer hook is used for managing complex state logic in React applications. It is an alternative to useState when state transitions are more complex.",
  },
  {
    question: "What is the significance of the key attribute in React lists?",
    answer:
      "The key attribute is used to uniquely identify elements in a list. It helps React efficiently update the DOM when the list changes.",
  },
  {
    question:
      "What is the difference between class components and functional components?",
    answer:
      "Class components use ES6 classes and have additional features like state and lifecycle methods, while functional components are simpler and are often used with hooks.",
  },
  {
    question: "Explain the concept of refs in React.",
    answer:
      "Refs are used to access the DOM directly or to reference a React element. They provide a way to interact with the underlying DOM nodes in React.",
  },
  {
    question: "What are React hooks?",
    answer:
      "React hooks are functions that allow functional components to use state, lifecycle methods, adn other React features.",
  },
  {
    question: "Explain the purpose of the useContext hook.",
    answer:
      "The useContext hook is used to access the value of a React context within a functional component.",
  },
  {
    question:
      "What is the significance of teh dangerouslySetInnerHTML property in React?",
    answer:
      "dangerouslySetInnerHTML is used to inject HTML directly into a component, but it should be used with caution to avoid cross-site scripting (XSS) vulnerabilities. ",
  },
  {
    question: "What is the purpose of the componentDidMount lifecycle method?",
    answer:
      "componentDidMount is invoked immediately after a component is mounted, making it suitable for initial AJAX requests or setting up subscriptions.",
  },
  {
    question: "What is the React developer tool?",
    answer:
      "The React Developer Tools is a browser extension that allows developers to inspect and debug React component hierarchies in the Chrome and Firefox browsers.",
  },
  {
    question: "Explain the concept of context in React.",
    answer:
      "Context provides a way to pass data through the component tree without having to pass props manually at every level. It is often used to share values like themes or authentication status.",
  },
  {
    question: "What are the advantages of using React?",
    answer:
      "React offers a virtual DOM for improved performance, a component-based architecture for modular development, and a strong community support, among other advantages.",
  },
  {
    question: "How does React handle prop drilling, and how can it be avoided?",
    answer:
      "Prop drilling occurs when props are passed down through multiple levels of components. It can be avoided by using context or state management libraries like Redux.",
  },
  {
    question: "What is the purpose of teh shouldComponentsUpdate method?",
    answer:
      "shouldComponentUpdate is a lifecycle method that determines if a component should re-render. Developers can use it to optimize performance by preventing unnecessary renders.",
  },
  {
    question: "Explain the significance of React Fragments.",
    answer:
      "React Fragments allow developers to group multiple elements without adding an extra node to the DOM, helping to keep the structure clean.",
  },
  {
    question: "What is the significance of the key prop in React Router?",
    answer:
      "The key prop in React Router is used to force the remounting of a component when the key changes, ensuring that the component is fully reinitialized.",
  },
  {
    question: "What is the purpose of the forwardRef function in React?",
    answer:
      "forwardRef is used to forward refs through components, allowing parent components to interact with the child's DOM node.",
  },
  {
    question: "Explain the concept of error boundaries in React.",
    answer:
      "Error boundaries are components that catch JavaScript errors anywhere in their child component tree and log those errors, display a fallback UI, or take other actions.",
  },
  {
    question: "What is the significance of the memo function in React.",
    answer:
      "memo is a higher-order component that memorizes the rendering of a functional component, preventing unnecessary re-renders if the props have not changed.",
  },
  {
    question: "How does React handle forms?",
    answer:
      "React handles forms by using controlled components, where form data is controlled by the React state.",
  },
  {
    question: "Explain the purpose of the useMemo hook.",
    answer:
      "The useMemo hook is used to memoize the result of a function, preventing unnecessary calculations and improving performance.",
  },
  {
    question: "What is the significance of the useCallback hook?",
    answer:
      "useCallback is used to memoize call functions, preventing them from being recreated on every render.",
  },

  {
    question: "What are React portals?",
    answer:
      "React portals provide a way to render children into a DOM node that exists outside the parent component's hierarchy.",
  },
  {
    question: "Explain the concept of suspense in React",
    answer:
      "Suspense is a feature in React that allows components to 'wait' for something before rendering, such as data fetching or code splitting.",
  },
  {
    question: "What is the purpose of the useEffect cleanup function?",
    answer:
      "The cleanup function in useEffect is used to perform cleanup tasks, such as unsubscribing from subscriptions or clearing intervals, when a component is unmounted.",
  },
  {
    question: "How does React handle routing?",
    answer:
      "React can handle routing using the React Router library, which provides a way to navigate between different views or pages in a React application.",
  },
  {
    question: "What is the purpose of the useLayoutEffect hook?",
    answer:
      "useLayoutEffect is similar to useEffect, but it fires synchronously after all DOM mutations. It is often used for measuring and synchronizing layout.",
  },
  {
    question: "Explain the concept of lazy loading in React.",
    answer:
      "Lazy loading is a technique where components or modules are loaded only when they are actually needed, improving initial load times.",
  },
  {
    question: "What is the significance of the React.memo function?",
    answer:
      "React.memo is a higher-order component that memoizes the rendering of a functional component, preventing unnecessary re-renders if the props have not changed.",
  },
  {
    question: "How does React handle code splitting?",
    answer:
      "React supports code splitting, allowing developers to split their code into smaller chunks that are loaded on demand, improving performance by reducing the initial bundle size.",
  },
  {
    question: "What is the purpose of the useImperativeHandle hook?",
    answer:
      "useImperativeHandle is used to customize the instance value that is exposed when using React.forwardRef.",
  },
  {
    question: "Explain the concept of the useDebugValue hook.",
    answer:
      "useDebugValue is used to display a label ofr custom hooks in React DevTools.",
  },
  {
    question: "What is the purpose of the useState hook?",
    answer:
      "the useState hook is used to add state to functional components in React.",
  },
  {
    id: 46,
    question:
      "Explain the significance of the SuspenseList component in React.",
    answer:
      "SuspenseList is a component that allows developers to coordinate the lading of multiple components in a way that provides a better user experience.",
  },
  {
    question:
      "What is the significance of the react-scripts package in a React application?",
    answer:
      "react-scripts is a set of scripts and configurations used by Create React App to set up and manage a React Project without the need for complex configuration.",
  },
  {
    question: "Explain the concept of error boundaries in React.",
    answer:
      "Error boundaries are components that catch JavaScript errors anywhere in their child component tree and log those errors, display a fallback UI, or take other actions.",
  },
  {
    question: "What is the purpose of the useReducer hook?",
    answer:
      "useReducer is a hook in React used for state management in functional components. It is particularly useful when the state logic is complex and involves multiple sub-values or when the next state depends on the previous state",
  },
  {
    question: "How does react handle forms?",
    answer:
      "React handles forms using controlled components, where the form elements are controlled by React state. This allows React to be the single source of truth for the form data.",
  },
];

export default questions;
