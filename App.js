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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([heading, main]);

