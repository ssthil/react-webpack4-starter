# React and webpack starter kit

This repo will help to create a react app with webpack 4 and latest babel config. This is a very basic starter kit to setup the React app

## Project description

Simple boilerplate for `React + webpack 4`

## Cloning and Running the Application in local

Clone repository:
`git clone https://github.com/ssthil/react-webpack4-starter.git`

and then
`yarn install` or `npm install` to install dependencies.
in order to run the application, run the below command
`yarn start` or `nom start`

The project will be running at `http://localhost:8080/`

### Step 1

Make a new project

#### Setting Up React and Babel

We need to install webpack as a **dev dependency** and webpack-cli

Install react and react-dom as a **dependency**

Then install babel as a **dev dependency**

##### create dir

`mkdir react-webpack-starter`

##### into the dir

`cd react-webpack-starter`

##### initialize

`yarn init -y`

##### install dev dependencies

`yarn add webpack webpack-cli webpack-dev-server @babel/core @babel/preset-env @babel/preset-react babel-loader html-webpack-plugin --dev`

#### install dependencies

`yarn add react react-dom && touch webpack.config.js .babelrc README.md .gitignore`

#### create dir src and files

`mkdir src && cd $_ && touch index.js index.html`

## OR - single command to run everything

`mkdir react-webpack-starter && cd $_ && yarn init -y && yarn add webpack webpack-cli webpack-dev-server @babel/core @babel/preset-env @babel/preset-react babel-loader html-webpack-plugin --dev && yarn add react react-dom && touch webpack.config.js .babelrc README.md .gitignore && mkdir src && cd $_ && touch index.js index.html`

### Step 2

Add this code in webpack.config.js file to state the rules for our babel-loader

```
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [htmlPlugin]
};
```

### Step 3

When you state that you’re using babel-loader in your webpack config, it will look for `.babelrc` file if there is one.

```
{
  "presets": ["@babel/env", "@babel/preset-react"]
}
```

### Step 4

index.html with `id="app"`

### Step 5

In `index.js`

```
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return(
    <div>
      <h1>Hello React</h1>
    </div>
  )
}
const SelectorRef = document.getElementById("app");

ReactDOM.render(<App />, SelectorRef);
```

### Step 6

add below code in the `package.json`

```
"scripts": {
    "start": "webpack-dev-server --mode development --open",
    "build": "webpack --mode production"
  }
```
