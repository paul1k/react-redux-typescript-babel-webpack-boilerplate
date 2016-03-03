# React + Redux + TypeScript + Babel + Webpack Seed Project

Quick start layout for React + Redux + TypeScript + Babel + Webpack tech stack.

## Why use TypeScript along with Babel?

TypeScript and Babel were created for different purposes. Babel transpiles your ES6+ code to ES5 while TypeScript adds
strict typing and other syntactic sugar. For instance, TypeScript does not transpile `async / await` to ES3 but this
gap can be bridged with [Facebook regenerator runtime][2] and Babel.

## How to run

Use `npm install` to install required modules and requires typings.

Use `npm start` to launch dev server on [localhost:8080](http://localhost:8080/webpack-dev-server/index.html).

Use `npm run package` to create project assembly in `<project_root>/target/out`.

Use `npm test` to launch unit tests.

[2]: https://facebook.github.io/regenerator/
