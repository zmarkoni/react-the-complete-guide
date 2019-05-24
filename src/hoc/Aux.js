//hoc stands for Higher order Components

const aux = props => props.children;
// this Higher order component is just used to return anything which is passed to it
// means we can use it as a wrapper in JSX to allow multiple top level elements next to each other
// it is important to return just one expressions (JS rule)

export default aux;

// This is our custom component, but there is React built in component React.fragment
// which do the same