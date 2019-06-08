# `@seanmcp/state`

Implementing React's state management in vanilla JavaScript

## Basic usage

```js
this.initState({ greeting: 'Hello', name: 'world' })
this.state
// -> { greeting: "Hello", name: "world" }
this.setState({ greeting: 'Howdy' })`${this.state.greeting}, ${
    this.state.name
}!`
// -> "Howdy, world!"
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

## Questions

### Why can't I initialize state like in React?

`@seanmcp/state` stores all data in local storage, which needs to be initialized separately with `this.initState()`.
