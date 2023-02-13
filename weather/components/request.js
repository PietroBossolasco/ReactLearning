import React from "react";
import axios from "axios";

const position = "Rome";

export const requireData = async() => {
    const response = axios
        .get('http://api.weatherapi.com/v1/current.json?key=04859fec227b4f7db0a142925231202&q=' + position)
    console.log((await response).data)
}