const questions = [
  {
    question: "What is React?",
    answer:
      "React is an Open Source view library created and maintained by Facebook. It's a great tool to render the User Interface (UI) of modern web applications.",
  },
  {
    question: "The node_modules folder contains?",
    answer:
      "All dependencies required by the app. Main dependencies also listed in package.json",
  },
  {
    question: "The public folder contains?",
    answer:
      "index.html, title, fonts, css, favicon and id=root which is our entire app",
  },
  {
    question: "Describe the src folder.",
    answer:
      "In simplest form it's the brain of our app. This is where we will do all of our work. src/index.js is the JavaScript entry point.",
  },
  {
    question: "Describe gitignore",
    answer: "Specifies which files source control (Git) should ignore",
  },
  {
    question: "Describe package.json",
    answer:
      "Every Node.js project has a package.json and it contains info about our project, for example list of dependencies and scripts",
  },
  {
    question: "Describe package-lock.json",
    answer: "A snapshot of the entire dependency tree",
  },
  {
    question: "Describe README",
    answer:
      "The markdown file where you can share more info about the project for example build instructions and summary",
  },
  {
    question: "Describe a React Component",
    answer:
      "Starts with a capital letter, must return JSX (html), always use a close tag, and export the Component",
  },
  {
    question: "How many Root Components are there in a React App?",
    answer: "One",
  },
  {
    question: "How do you stop the React server",
    answer: "ctrl + c",
  },
  {
    question: "What is a React Component",
    answer: "A function",
  },
  {
    question:
      "According to JSX Rules, a React Component must always return what?",
    answer: "Only one parent element",
  },
  {
    question: "<> </> is shorthand for what?",
    answer: "React Fragment",
  },
  {
    question: "All React elements need to be?",
    answer: "Closed />",
  },
  {
    question:
      "What must be used if the opening tag isn't on the same line as the return statement?",
    answer: "()",
  },
  {
    question: "Can Components be nested",
    answer: "Yes",
  },
  {
    question: "What folder optimizes images?",
    answer: "src folder",
  },
  {
    question: "Can you render Objects in React?",
    answer: "No",
  },
  {
    question: "Describe useState",
    answer:
      "returns an array with two elements: the current state value, and a function that we can use to update the state. Accepts default value as an argument. State update triggers re-render. Preserves the value between the renders. ",
  },
  {
    question: "What type of imports does React use?",
    answer: "Default and Named",
  },
  {
    question: "What type of import is this: import {useState}",
    answer: "Named import",
  },
  {
    question: "What type of import is this: import Gallery from './Gallery.jsx",
    answer: "Default import",
  },
  {
    question: "What is 'State' in React.js",
    answer:
      "A built-in object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders. The state object is initialized in the constructor. The state object can store multiple properties.",
  },
  {
    question: "Describe render",
    answer:
      "The first time the component tree is rendered to the DOM. It happens when the application first loads, or when the root component is first rendered. Also known as mounting the components",
  },
  {
    question: "Describe re-render",
    answer:
      "Happen when the component's state or props change, and the component needs to be updated in the DOM to reflect these changes. React uses a virtual DOM to optimize the process of updating the actual DOM, so that only the necessary changes are made.",
  },
  {
    question: "How is a re-render triggered?",
    answer:
      "1. Changing the component's state or props. 2. When the parent element re-renders, even if the component's state or props have not changed.",
  },
  {
    question: "What are the General Rules of Hooks?",
    answer:
      "1. Starts with use. Component must start with uppercase. 2. Invoke inside function/component body. Don't call hooks conditionally. 3. Set functions don't update state immediately",
  },
  {
    question: "Describe Auto Batching",
    answer:
      "If you call the state update function multiple times in a short period of time, React will only perform a single re-render for all of the updates.",
  },
  {
    question: "Describe useEffect",
    answer:
      "Allows you to perform side effects in function components. Examples: subscriptions, fetching data, directly updating the DOM, event listeners, timers, etc. Accepts two arguments: callback  function and dependency array (optional). By default runs on each render. Callback can't return promise, can't be async. If dependency array empty, runs only on initial render.",
  },
  {
    question: "What does this return: async ()=>{} return",
    answer: "A promise",
  },
  {
    question:
      "How do you make the dependency array only run on initial render with useEffect?",
    answer: "[ ]",
  },
  {
    question: "Explain how catch(error) works with fetch()",
    answer: "The catch(error) does not catch 404.",
  },
  {
    question: "Describe setTimeOut",
    answer:
      "A global Method that sets a timer which executes a function or specified piece of code once the timer expires. setTimeOut is an async function.",
  },
  {
    question:
      "What is this code called: const [user, setUser] = useState(null)",
    answer: "State value",
  },
  {
    question: "How to handle fetch error gotcha?",
    answer: "if (!resp.ok){}",
  },
  {
    question: "Can React Hooks be inside if statements?",
    answer: "No",
  },
  {
    question: "What order are hooks called in?",
    answer: "In the exact order they are arranged.",
  },
  {
    question: "Where are hooks placed in your function?",
    answer: "At the top",
  },
  {
    question:
      "What are count and setCount in this statement: const [count, setCount] = useState(4)",
    answer: "Count is the state, setCount is the function.",
  },
  {
    question: "What values are falsy n JavaScript?",
    answer: "false, 0, '' empty string, null, undefined, NaN.",
  },
  {
    question: "Describe short-circuit evaluation.",
    answer:
      "Is a technique that allows you to use logical operators to perform conditional evaluations in a concise way",
  },
  {
    question: "The && operator returns?",
    answer:
      "The first value if it is falsy, or the second value if the first operand is truthy.",
  },
  {
    question: "What does the || operator return?",
    answer:
      "Returns the first value if it is truthy, or the second value if the first value is false",
  },
  {
    question: "How are Short-circuit evaluations useful?",
    answer:
      "In cases where you want to perform a certain action only if a certain condition is met, or you want to return a default value if a certain condition is not met",
  },
  {
    id: 46,
    question:
      "Output of: const {text, setText} = useState(''); <div>Falsy OR : {text || 'hello world'}</div>",
    answer: "Falsy OR :hello world",
  },
  {
    question:
      "Output of: const [text, setText] = useState(''); <div>Falsy OR : {text && 'hello world'}</div>",
    answer: "Falsy AND :",
  },
  {
    question:
      "Output of: const [name, setName] = useState('susan'); <div>Truthy OR : {name || 'hello world'}</div>",
    answer: "susan",
  },
  {
    question:
      "Output of: const [name, setName] = useState('susan'); <div>Truthy OR : {name && 'hello world'}</div>",
    answer: "Truthy AND : hello world",
  },
  {
    question:
      "Explain output of: const[isEditing, setIsEditing] useState(false); <button className='btn'>{isEditing ? 'edit' : 'add'}</button>",
    answer: "",
  },
  {
    id: 51,
    q: "How do you install react-icons",
    answer: "npm install react-icons --save",
  },
  {
    question: "How do you access installed react-icons",
    answer: "import {IconName} from 'react-icons'",
  },
  {
    question: "Your entire React gets injected where?",
    answer: "<div id='root'></div>",
  },
  {
    question: "What does an expression return?",
    answer: "A value",
  },
  {
    question: "Which way are props passed in React",
    answer: "Down, known as Prop Drilling",
  },
  {
    question: "What is the first argument fetch() is looking for?",
    answer: "The  url",
  },
  {
    question: "What does fetch() return?",
    answer: "A promise",
  },
  {
    question: "What does async() always return  by default?",
    answer: "A promise",
  },
  {
    question: "Convention for naming boolean value for useState()?",
    answer: "is and then the state name",
  },
  {
    question: "Three states of fetching data?",
    answer:
      "Loading - waiting for data to arrive, Error - there was an error, Success - received data",
  },
  {
    question: "How do you focus on the input for a form?",
    answer:
      "By having the htmlFor value of the label element and the id value of the input element match.",
  },
  {
    question: "Controlled inputs need what two things to work?",
    answer: "value={} and onChange={}",
  },
  {
    question: "What is used when you want to handle the form submission?",
    answer: "preventDefault()",
  },
  {
    question: "Describe useRef()",
    answer:
      "Does not trigger re-render. Preserves the value between renders. Targets DOM nodes/elements directly",
  },
  {
    question: "Describe custom hooks.",
    answer:
      "Same rules as regular hooks. Simplify component, less code. Re-use in other projects.",
  },
  {
    question: "Describe useContext()",
    answer:
      "Allows parent to pass down props without having to go through other components to get to the intended component",
  },
  {
    question: "Describe useReducer",
    answer:
      "useReducer is very similar to useState, but it lets you move the state update logic from event handlers into a single function outside of your component.",
  },
  {
    question: "Describe HTTP methods",
    answer:
      "They define the types of actions that con be performed on a web server to retrieve, modify or delete information.",
  },
  {
    question: "What are the most commonly used HTTP methods?",
    answer: "GET, POST, PATCH, DELETE",
  },
  {
    question: "What is the default HTTP method used by web browsers?",
    answer: "GET",
  },
  {
    question:
      "Which HTTP method is used to send data to a server to create or update a resource?",
    answer: "POST",
  },
  {
    question: "Which HTTP method is used to update only part of a resource?",
    answer: "PATCH",
  },
  {
    question: "Which HTTP method is used to remove a resource from a server?",
    answer: "DELETE",
  },
  {
    question: "All HTTP methods combined is known as?",
    answer: "CRUD (Create, Read, Update, and Delete)",
  },
  {
    question: "Describe React Query",
    answer:
      "Is a state management library that simplifies the process of fetching, caching and updating data in React apps.",
  },
  {
    question: "What are the benefits of React Query?",
    answer:
      "Automatic background refetching, caching and stale data management, error handling, and easy pagination and infinite scrolling.",
  },
  {
    q: "React Query vs useEffect()",
    answer:
      "React Query provides a more declarative and centralized approach to managing data in React, which results in cleaner and more efficient code. It also reduces boilerplate code and improves performance by minimizing unnecessary re-renders and network requests.",
  },
  {
    question:
      "In React Query version 5, isLoading has been replaced with what?",
    answer: "isPending",
  },
  {
    question: "Describe useMutation",
    answer:
      "useMutation comes with some helper options that allow quick and easy side-effects at any stage during the mutation lifecycle. These come in handy for both invalidating and refetching queries after mutations",
  },
  {
    question: "createContext.",
    answer:
      "Allows components to pass information deep down without explicitly passing props.",
  },
  // {
  //   id: 81,
  //   question: "queryClient",
  //   answer: "",
  // },
  {
    question: "What is SPA",
    answer:
      "Single-Page Application that dynamically updates its content without requiring a full page reload.",
  },
  {
    question: "Describe React Router",
    answer:
      "It is a JavaScript library used in React applications to handle routing and navigation.",
  },
  {
    question: "Describe <Outlet /> from react-router-dom",
    answer: "",
  },
  // {
  //   id: 0,
  //   question: "",
  //   answer: "",
  // },
  // {
  //   id: 0,
  //   question: "",
  //   answer: "",
  // },
  // {
  //   id: 0,
  //   question: "",
  //   answer: "",
  // },
  // {
  //   id: 0,
  //   question: "",
  //   answer: "",
  // },
  // {
  //   id: 0,
  //   question: "",
  //   answer: "",
  // },
  // {
  //   id: 0,
  //   question: "",
  //   answer: "",
  // },
  // {
  //   id: 0,
  //   question: "",
  //   answer: "",
  // },
];

export default questions;
