# [React][1] + [Redux][2] + [TypeScript][3] + [Babel][4] + [Webpack][5] Boilerplate Project

Boilerplate project for setting up React + Redux + TypeScript + Babel + Webpack stack. Also uses LESS for stylesheets and [Jasmine][10] for unit tests.

Have a look at [React Slingshot][12] for analogous stack without TypeScript.

### Why use TypeScript along with Babel?

First of all TypeScript and Babel were created for different purposes. Babel transpiles your ES6+ code to ES5 while TypeScript mostly adds strict typing and other syntactic sugar. For instance, [TypeScript does not transpile][6] [`async / await`][7] to ES5 but this gap can be easily bridged with [Facebook regenerator runtime][8] and Babel.

### How to run

Use `npm install` to install required modules and requires typings.

Use `npm start` to launch dev server on [localhost:8080](http://localhost:8080/webpack-dev-server/index.html).

Use `npm run package` to create project assembly in `<project_root>/target/out`.

Use `npm test` to launch unit tests.

### Async actions with Redux [thunk][9]

Create async actions that retrieve server data with `async / await` and [`fetch` API][11]:

```javascript
export function fetchContent(url) {
  return async function(dispatch) {
    let content = await fetch(url).then(res => res.json());
    
    // Dispatch would occur only after successful `fetch` of JSON data.
    dispatch({type: LINK_CONTENT, content});
  }
}
```

[1]: https://facebook.github.io/react/
[2]: https://github.com/reactjs/redux/
[3]: http://www.typescriptlang.org/
[4]: https://babeljs.io/
[5]: https://webpack.github.io/
[6]: https://blogs.msdn.microsoft.com/typescript/2015/11/03/what-about-asyncawait/
[7]: https://github.com/tc39/ecmascript-asyncawait/
[8]: https://facebook.github.io/regenerator/
[9]: https://github.com/gaearon/redux-thunk
[10]: http://jasmine.github.io/
[11]: https://developer.mozilla.org/en/docs/Web/API/Fetch_API
[12]: https://github.com/coryhouse/react-slingshot
