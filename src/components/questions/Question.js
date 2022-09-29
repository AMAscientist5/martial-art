import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className="question-container">
            <div className="question-heading">
                <h1 > React Important Questions answers</h1>
            </div>
            <details>
            <summary><strong>What is differences between props and state in React ?</strong></summary>
              <p>Props are used to pass data from one component to another.
               The state is a local data storage that is local to the component only and cannot be passed to other components.
               The this.setState property is used to update the state values in the component. props are Immutable (cannot be modified), and Props are read-only. the state is Mutable ( can be modified) and State is both read and write. 
              </p>
            </details>
            <br />
            <details>
            <summary><strong>What are the use of useEffect in React ?</strong></summary>
              <p> The useEffect Hook allows you to perform side effects in your in function components: Some examples of side effects are: fetching data, setting up a subscription, directly or manually updating the DOM, or setInterval use/timers.  useEffect accepts two arguments.</p>
            </details>
            <br />
            <details>
            <summary><strong>How does react work ?</strong></summary>
              <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. 
                A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab.  It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.
                <br /> <p></p>
               <strong> How does it work: </strong>While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
                Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js.
</p>
            </details>
        </div>
    );
};

export default Question;