1. What problem does the context API help solve?

Context API solves the problem of props drilling. It creates an environment in which state can be passed both up (to parent elements) and down (to children elements), eliminating the need to pass props down through each child element.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are bundles of information that get sent to the reducer. The reducer takes in an action and interprets what it should do based on the information passed to it by the action. A store contains the state of an application, and that state is changed by dispatching an action into a reducer. The store is known as a 'single source of truth' because once the information inside the store has been changed, that same information is available across the whole application.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is updated and used within a single component and not available in other components unless it is passed down as props. Application state is a store of state that is available to all components that subscribe to the store. Simpler applications with only one or two layers of components would be ideal for component state and props. As the layers of components that need access to the state data becomes more complex, a store becomes more practical.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middleware allowing programmers to use action creators that return a function instead of just an action object. Thunk receives the dispatch method from the store which gets used to send actions into the reducer.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Although I think I understand it the least, Context API is my favorite state management system. I like that it creates an environment where the components that need access to certain state have that access. It seems like it will be the most useful state management system once I get more acquainted with it.
