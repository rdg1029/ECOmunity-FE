import React from "react";
import {configureStore} from "@reduxjs/toolkit";
import profileReducer from './profileState';

export default configureStore({
    reducer:{
        profile: profileReducer

    }
})