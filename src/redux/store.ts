import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const stripe = require("stripe")(
  "sk_test_51MqwLaENIc8mlIZVeboiKPZ4LHCepT4UuKVFKDVHLLJzku2RpgL1PJKcztTTUv5VNRnliivFVrZKA94vsxH5Enr100gZmbjXdi"
);

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: { cart: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

// import { configureStore } from '@reduxjs/toolkit'
// import cartReducer from './cartReducer'

// export const store = configureStore({
//   reducer: {cart: cartReducer},
// })

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
