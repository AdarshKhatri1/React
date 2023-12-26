
1. local storage


#### Combine Reducers
1. Create AppReducer,and AuthReducer folder in your Redux folder.
2. Combine both reducer on store.js

    ### Steps
    1.import both reducer
    2.import combinereducer from redux to combine both reducer
    3.pass rootReducer to store
    4.Instead of accessing the data from the state directlly in the components, now access it from the state.appReducer or state.authReducer.

 
#### 
show todos if user is login so write logic



#### Middlewares
dispatch----------middleware--------------reducer
