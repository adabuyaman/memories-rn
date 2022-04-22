import { configureStore } from "@reduxjs/toolkit";
import logger from "./middleware/logger.middleware";
import rootReducer from "./memories/reducers.memories";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger]
});

export default store;