import { configureStore } from "@reduxjs/toolkit";
import Counter from "./ReduxToolkitCounter";


export const store = configureStore({
    reducer: {
        counter: Counter
    }
})