import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import nominations from './nominations/reducer'
import { persistStore, persistReducer } from 'redux-persist'

//COMBINING ALL REDUCERS
export const combinedReducer = combineReducers({
  nominations: nominations,
})

// BINDING MIDDLEWARE
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const makeStore = ({ isServer }) => {
  if (isServer) {
    //If it's on server side, create a store
    return createStore(combinedReducer, bindMiddleware([thunkMiddleware]))
  } else {
    //If it's on client side, create a store which will persist
    //const { persistStore, persistReducer } = require('redux-persist')
    const storage = require('redux-persist/lib/storage').default

    const persistConfig = {
      key: 'nextjs',
      whitelist: ['nominations'], // only nominations will be persisted, add other reducers if needed
      storage, // if needed, use a safer storage
    }

    const persistedReducer = persistReducer<RootState>(
      persistConfig,
      combinedReducer
    ) // Create a new reducer with our existing reducer

    const store = createStore(
      persistedReducer,
      bindMiddleware([thunkMiddleware])
    ) // Creating the store again

    // TODO find alternative to this hack:
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.__persistor = persistStore(store) // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

    return store
  }
}

// Export state type
export type RootState = ReturnType<typeof combinedReducer>

// TODO find alternative to this hack:
// Export the wrapper & wrap the pages/_app.js with this wrapper only
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const wrapper = createWrapper(makeStore)
