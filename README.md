# `@seanmcp/state`

[![npm](https://img.shields.io/npm/v/@seanmcp/state.svg)](https://npmjs.com/package/@seanmcp/state) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@seanmcp/state.svg)](https://npmjs.com/package/@seanmcp/state) [![npm](https://img.shields.io/npm/dt/@seanmcp/state.svg)](https://npmjs.com/package/@seanmcp/state)

Implementing React's state management in vanilla JavaScript

```js
this.initState({ library: 'state' })
this.setState({ author: 'seanmcp' }, () => {
    console.log(`${this.state.library} by ${this.state.author}`)
})
// -> state by seanmcp
```

## Install

### CDN

Add this tag to your `head` element:

```html
<script src="https://unpkg.com/@seanmcp/state"></script>
```

### Manual

Install the package from npm:

```sh
npm install --save @seanmcp/state
```

Add this tag to you `head` element:

```html
<script src="./node_modules/@seanmcp/state/lib/index.js"></script>
```

## API

### Basic usage

```js
this.initState({ greeting: 'Hello', name: 'world' })
this.state
// -> { greeting: "Hello", name: "world" }
this.setState({ greeting: 'Howdy' })
this.state
// -> { greeting: "Howdy", name: "world" }
```

### Referencing `prevState`

```js
this.initState({ count: 0 })
this.setState(prevState => ({ count: prevState.count++ }))
this.state.count
// -> 1
```

### Optional callback

```js
this.initState({ is: 'stale' })
this.setState({ is: 'fresh' }, () => console.log(this.state.is))
// -> "fresh"
```

### Reacting to state change

Before updating the application state, `this.setState()` does a shallow comparison between the previous and next states. If there is a change, the state is updated, the callback is called (if present), and a custom `state` event is triggered on the `window` object.

To react to state changes, add a `state` event listener to `window` that renders based on data from state:

```js
this.initState({ items: [] })

function addItem() {
    this.setState(prevState => {
        const items = [...prevState.items]
        items.push(new Date().getTime())
        return {
            items
        }
    })
}

function renderItems() {
    // DOM manipulation
}

window.addEventListener('state', () => {
    renderItems()
})
```

## Questions

### Why can't I initialize state like in React?

`@seanmcp/state` stores all data in session storage, which needs to be initialized separately with `this.initState()`.
