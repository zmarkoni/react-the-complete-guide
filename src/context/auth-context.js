import React from 'react';

// https://www.udemy.com/react-the-complete-guide-incl-redux/learn/lecture/13556344#overview

// Context is (globally - don't have to be) available JS Object, Array, String, Number...
// React will still re-render if STATE or PROPS changed
const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});
// This initials values are not important, will be changed in VALUE object which
// is assigned to AuthContext.Provider value= and it is the same like here
/*
<AuthContext.Provider value={{
    authenticated: this.state.authenticated,
    login: this.loginHandler
}}>
*/

export default authContext;