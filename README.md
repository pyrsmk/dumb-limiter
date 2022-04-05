dumb-limiter
============

A simple and performant limiter that executes your tasks in order with the possibility of parallelization (which is not the case of [dumb-queue](https://github.com/pyrsmk/dumb-queue)).

Install
-------

```shell
npm install @pyrsmk/dumb-limiter
```

Usage
-----

```js
// Initialize the limiter with a wait time of 1000ms.
const limiter = require('dumb-limiter')(1000)

// The callback must return a promise so`the queue know when the task has finished.
limiter(() => someAsyncSlowAction1())
// ...
// Further in your code.
limiter(() => someAsyncSlowAction2())
// ...
// You can, of course, use non-async functions with the help of `async` which will
// always return a promise.
limiter(async () => someSyncSlowAction3())
```

The tasks are called as soon they are added to the limiter stack, anywhere in your app.

Compatibility
-------------

Node 8+
