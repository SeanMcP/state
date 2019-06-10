# `@seanmcp/state`

Implementing React's state management in vanilla JavaScript

## Basic usage

```js
this.initState({ greeting: 'Hello', name: 'world' })
this.state
// -> { greeting: "Hello", name: "world" }
this.setState({ greeting: 'Howdy' })
this.state
// -> { greeting: "Howdy", name: "world" }
```

## Referencing `prevState`

```js
this.initState({ count: 0 })
this.setState(prevState => ({ count: prevState.count++ }))
this.state.count
// -> 1
```

## Optional callback

```js
this.initState({ is: 'stale' })
this.setState({ is: 'fresh' }, () => console.log(this.state.is))
// -> "fresh"
```

## Reacting to state change

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

`@seanmcp/state` stores all data in local storage, which needs to be initialized separately with `this.initState()`.
