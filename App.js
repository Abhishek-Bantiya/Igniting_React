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
 

const heading = React.createElement(
    "h1",
    {
        id: "header"
    },
    "Hi, this is the Heading"
);
const main = React.createElement(
    "main", {
        id: "main"
    }, "Hi, this is the main section"
);

const section = React.createElement(
    "section", {
        id: "section"
    }, "Hi, this is the section section"
);
const article = React.createElement( 
    "article", {
        id: "article"
    }, "Hi this is a review about a thing in the form of an article"
)

const paragraph = React.createElement(
    "p", {
        id: "para", 
    }, "Hi this is a short paragraph about myself"
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([heading, main, section, p]);

