# Redux / React-Redux Module
## Summary
[Redux](http://redux.js.org/) is a predictable state container to help manage application state. 
It modifies the [Flux architecture](https://facebook.github.io/flux/docs/overview.html) introduced by Facebook to further enforce unidirectional data flow. 
Although Redux can be used without React, it is often used in conjuction with [React-Redux](https://github.com/reactjs/react-redux) to build scalable web applications.

In this module, you will build an application with React, then refactor it to incorperate Redux.

## React Overview


### Stateless Functional Components
[Stateless functional components](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions) were introduced in  [React's 0.14 release](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html). 
Instead of using the `React.createClass` method or ES6 classes, components are written as functions with props as the parameter. 

A stateless functional component is essentially just the render method of a React class. 
By stripping everything else away, you get a simpler way to make React components, albeit with a few limitations.

#### Pros

* No need to use this `this` keyword! You don't have to deal with state / methods, and your props are passed in as a parameter.
* Less boilerplate. As your component is simply a function, free of the contraints of a React component class, the amount of boilerplate in creating a stateless functional component is greatly reduced.
This makes it so the resulting code for you component is concise and and clear.
* Clearly seperates your concerns. This is important when you're seperating your application into container and presentational components.

#### Cons
* No way to retain internal state.
* No access to component lifecycle methods (ie ComponentDidMount).

### Container vs Presentational Components


## Redux

### Actions

### Reducers

### Store

## Getting Started