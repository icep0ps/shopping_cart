# Shopping Cart Project

A React project from the odin project. The main focus of this project was centered around the react router and the react testing librarys and how to use them.

**Concepts learnt include:**

- Understand what client-side routing is
- How react-router-dom works
- Carry out mocks in the context of React testing.
- Being able to test UI elements.

# Demo

Live Preview : [Shopping Cart](icep0ps.github.io/calculator/)

# Lessons Learned

- I Learned that React routers are used to make Single Page Applications(SPA), allowing navigation and routing without the user having to refresh the page. When this happens we call it Client side rendering since all the routing is handled within a the JS file and rendered to the Client.

- The useEffect dependancy array if left empty will run after every render, if you add dependancies inside it will run everytime they are updated and if you completly leave it out it will only run on mount.

**Problem**

- Updating state in functional components - i had been doing this the wrong way and it lead to some bugs within my shopping cart component

```js
const [counter, setCounter] = useState(0);
setCounter(counter + 1);
```

**Solution**

- the useState Hook takes an aargument which is the previous state so we need to use that to update our state

```js
const [counter, setCounter] = useState(0);
setCounter((prevCounter) => prevCounter + 1);
```

# Acknowledgements

[The Odin Project](https://www.theodinproject.com)
