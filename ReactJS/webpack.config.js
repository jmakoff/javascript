/// <binding ProjectOpened='Watch - Development' /> 
"use strict";

module.exports = {
    entry: {
        "les22/cw1/build/bundle": "./les22/cw1/jsx/main.jsx",
        "les22/cw3/build/bundle": "./les22/cw3/jsx/main.jsx",
        "les22/hw1/build/bundle": "./les22/hw1/jsx/main.jsx",
        "les22/hw2/build/bundle": "./les22/hw2/jsx/main.jsx",
        "les22/hw3/build/bundle": "./les22/hw3/jsx/main.jsx",
        "les23/cw1/build/bundle": "./les23/cw1/app/src/main.jsx",
        "les24/cw1/build/bundle": "./les24/cw1/jsx/index.jsx",
        "les24/cw2/build/bundle": "./les24/cw2/jsx/index.jsx",
        "les24/cw3/build/bundle": "./les24/cw3/jsx/index.jsx",
        "les24/hw1/build/bundle": "./les24/hw1/jsx/App.jsx",
        "les24/hw2/build/bundle": "./les24/hw2/jsx/App.jsx",
        "les24/hw3/build/bundle": "./les24/hw3/jsx/App.jsx",
        'les25/hw1/build/bundle':'./les25/hw1/src/main.js',
        'les25/hw2/build/bundle':'./les25/hw2/src/main.js',
        'les26/cw1/build/bundle':'./les26/cw1/src/main.jsx'







    } ,

    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    }
};