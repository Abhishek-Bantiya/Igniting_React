import React from 'react'
import ReactDOM from 'react-dom/client'

// HMR- Hot Module Reloading 
// File Watching algorithm - C++
// BUNDLING 
// MINIFY 
// Cleaning our code 
// Dev and production build 
// Super fast build algorithm 
// Image optimisation
// Compression
// HTTPS on dev npx parcel index.html --https
// port number
// Consistent hashing algorithm
// compatible with older versions of browser
// Caching while development 
// zero config 
 

// const heading = React.createElement(
//     "h1",
//     {
//         id: "header"
//     },
//     "Hi, this is the Heading"
// );
// const main = React.createElement(
//     "main", {
//         id: "main"
//     }, "Hi, this is the main section"
// );
// const heading2 = (
//     <h1 id="heading2" key="key2">Namaste react 2</h1>
// );
// console.error(heading)
// console.error(heading2)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render([heading, main]);

//JSX syntax
const jsx = <h1>React using js</h1>
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(jsx)
