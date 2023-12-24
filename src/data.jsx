const questions = [
  {
    id: 1,
    question: "The node_modules folder contains?",
    answer:
      "All dependencies required by the app. Main dependencies also listed in package.json",
  },
  {
    id: 2,
    question: "The public folder contains?",
    answer:
      "index.html, title, fonts, css, favicon and id=root which is our entire app",
  },
  {
    id: 3,
    question: "Describe the src folder.",
    answer:
      "In simplest form it's the brain of our app. This is where we will do all of our work. src/index.js is the JavaScript entry point.",
  },
  {
    id: 4,
    question: "Describe gitignore",
    answer: "Specifies which files source control (Git) should ignore",
  },
  {
    id: 5,
    question: "Describe package.json",
    answer:
      "Every Node.js project has a package.json and it contains info about our project, for example list of dependencies and scripts",
  },
  {
    id: 6,
    question: "Describe package-lock.json",
    answer: "A snapshot of the entire dependency tree",
  },
  {
    id: 7,
    question: "Describe README",
    answer:
      "The markdown file where you can share more info about the project for example build instructions and summary",
  },
  {
    id: 8,
    question: "Describe a React Component",
    answer:
      "Starts with a capital letter, must return JSX (html), always use a close tag, and export the Component",
  },
  {
    id: 9,
    question: "How many Root Components are there in a React App?",
    answer: "One",
  },
  {
    id: 10,
    question: "How do you stop the React server",
    answer: "ctrl + c",
  },
  {
    id: 11,
    question: "What is a React Component",
    answer: "A function",
  },
  {
    id: 12,
    question:
      "According to JSX Rules, a React Component must always return what?",
    answer: "Only one parent element",
  },
  {
    id: 13,
    question: "<> </> is shorthand for what?",
    answer: "React Fragment",
  },
  {
    id: 14,
    question: "All React elements need to be?",
    answer: "Closed />",
  },
  {
    id: 15,
    question:
      "What must be used if the opening tag isn't on the same line as the return statement?",
    answer: "()",
  },
  {
    id: 16,
    question: "Can Components be nested",
    answer: "Yes",
  },
  {
    id: 18,
    question: "What folder optimizes images?",
    answer: "src folder",
  },
  {
    id: 19,
    question: "Can you render Objects in React?",
    answer: "No",
  },
  {
    id: 20,
    question: "Describe useState",
    answer:
      "returns an array with two elements: the current state value, and a function that we can use to update the state. Accepts default value as an argument. State update triggers re-render. Preserves the value between the renders. ",
  },
  {
    id: 21,
    question: "What type of imports does React use?",
    answer: "Default and Named",
  },
  {
    id: 22,
    question: "What type of import is this: import {useState}",
    answer: "Named import",
  },
  {
    id: 23,
    question: "What type of import is this: import Gallery from './Gallery.jsx",
    answer: "Default import",
  },
  {
    id: 24,
    question: "What is 'State' in React.js",
    answer:
      "A built-in object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders. The state object is initialized in the constructor. The state object can store multiple properties.",
  },
  {
    id: 25,
    question: "Describe render",
    answer:
      "The first time the compnent tree  risendered to the DOM. It happens when the application first loads, or when the root conpnent is first rendered. Also known as mounting the components",
  },
  {
    id: 26,
    question: "Describe re-render",
    answer:
      "Happen when the conponent's state or props change, and the conponent needs to be updated in the DOM to reflect these changes. React uses a virtual DOM to optimize the process of updating the actual DOM, so that only the necessary changes are made.",
  },
  {
    id: 27,
    question: "How is a re-render triggered?",
    answer:
      "1. Changeing the conponent's state or props. 2. When the parent element re-renders, even if the component's state or props have not changed.",
  },
  {
    id: 28,
    question: "What are the General Rules of Hooks?",
    answer:
      "1. Starts with use. Component must start with uppercase. 2. Invoke inside function/component body. Don't call hooks conditionally. 3. Set functions don't update state immediately",
  },
  {
    id: 29,
    question: "Describe Auto Batching",
    answer:
      "If you call the state update function multiple times in a short period of time, React will only perform a single re-render for all of the updates.",
  },
  {
    id: 30,
    question: "Describe useEffect",
    answer:
      "Allows you to perform side effects in function components. Examples: subscriptions, fetching data, directly updating the DOM, event listeners, timers, etc. Accepts two arguments: callback  function and dependency array (optional). By default runs on each render. Callback can't return promise, can't be async. If dependency array empty, runs only on ititial render.",
  },
  {
    id: 31,
    question: "What does this return: async ()=>{} return",
    answer: "A promise",
  },
  {
    id: 32,
    question:
      "How do you make the dependency array only run on initial render with useEffect?",
    answer: "[ ]",
  },
  {
    id: 33,
    question: "Explain how catch(error) works with fetch()",
    answer: "The catch(error) does not catch 404.",
  },
  {
    id: 34,
    question: "Describe setTimeOut",
    answer:
      "A global Method that sets a timer which executes a function or specified piece of code once the timer expires. setTimeOut is an async function.",
  },
  {
    id: 35,
    question:
      "What is this code called: const [user, setUser] = useState(null)",
    answer: "State value",
  },
  {
    id: 36,
    question: "How to handle fetch error gotcha?",
    answer: "if (!resp.ok){}",
  },
  {
    id: 37,
    question: "Can React Hooks be inside if statements?",
    answer: "No",
  },
  {
    id: 38,
    question: "What order are hooks called in?",
    answer: "In the exact order they are arranged.",
  },
  {
    id: 39,
    question: "Where are hooks placed in your function?",
    answer: "At the top",
  },
  {
    id: 40,
    question:
      "What are count and setCount in this statement: const [count, setCount] = useState(4)",
    answer: "Count is the state, setCount is the function.",
  },
  {
    id: 41,
    question: "What values are falsy n JavaScript?",
    answer: "false, 0, empty string, null undefined, NaN.",
  },
  {
    id: 42,
    question: "Describe short-circuit evaluation.",
    answer:
      "Is a technique that allows you to use logicacl operators to perform conditional evaluations in a concise way",
  },
  {
    id: 43,
    question: "The && operator returns?",
    answer:
      "The first operand if it is falsy, or the second operand if the first operand is truthy.",
  },
  {
    id: 44,
    question: "What does the || operator return?",
    answer:
      "Returns the first operand if it is truthy, or the second operand if the first operand is falsy.",
  },
  {
    id: 45,
    question: "How are Short-circuit evaluations useful?",
    answer:
      "In cases where you want to perform a certain action only if a certain condition is met, or you want to return a default balue if a certain conditon is not met",
  },
  {
    id: 46,
    question:
      "Output of: const {text, setText} = useState(''); <div>Falsy OR : {text || 'hello world'}</div>",
    answer: "Falsy OR :hello world",
  },
  {
    id: 47,
    question:
      "Output of: const [text, setText] = useState(''); <div>Falsy OR : {text && 'hello world'}</div>",
    answer: "Falsy AND :",
  },
  {
    id: 48,
    question:
      "Output of: const [name, setName] = useState('susan'); <div>Truthy OR : {name || 'hello world'}</div>",
    answer: "susan",
  },
  {
    id: 49,
    question:
      "Output of: const [name, setName] = useState('susan'); <div>Truthy OR : {name && 'hello world'}</div>",
    answer: "Truthy AND : hello world",
  },
  {
    id: 50,
    question:
      "Explain output of: const[isEditing, setIsEditing] useState(false); <button className='btn'>{isEditing ? 'edit' : 'add'}</button>",
    answer: "",
  },
  {
    id: 51,
    question: "How do you install react-icons",
    answer: "npm install react-icons --save",
  },
  {
    id: 52,
    question: "How do you access installed react-icons",
    answer: "import {IconName} from 'react-icons'",
  },
  {
    id: 53,
    question: "Your entire React gets injected where?",
    answer: "<div id='root'></div>",
  },
  {
    id: 54,
    question: "What does an expression return?",
    answer: "A value",
  },
  {
    id: 55,
    question: "Which way are props passed in React",
    answer: "Down, known as Prop Drilling",
  },
  {
    id: 56,
    question: "What is the first argument fetch() is looking for?",
    answer: "The  url",
  },
  {
    id: 57,
    question: "What does fetch() return?",
    answer: "A promise",
  },
  {
    id: 58,
    question: "What does async() always return  by default?",
    answer: "A promise",
  },
  {
    id: 0,
    question: "",
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
