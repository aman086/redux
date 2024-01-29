import { applyMiddleware } from "redux";
import reducers from "./reducers";
import { thunk } from "redux-thunk";
// import redux from 'redux';
import { legacy_createStore as createStore } from 'redux';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({reducer: reducers})