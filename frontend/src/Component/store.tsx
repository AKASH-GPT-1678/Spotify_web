import { configureStore, combineReducers } from "@reduxjs/toolkit";
import fullStatereducer from "../Component/redux"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"




const rootreducer = combineReducers({
    fullstate: fullStatereducer
})


const persistconfig = {
    key: 'root',
    storage
}


const persistedReducer = persistReducer(persistconfig, rootreducer);

 

export const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false  // <-- THIS WORKS HERE
        })
})

export const persistor = persistStore(store);
