module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    }, "env": {
        "browser": true,

        "node": true,
        "es2021": true,
        "react-native/react-native": true
    }, "plugins": [
        "react",
        "react-native"
    ], "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ], "rules": {
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        "react-native/no-inline-styles": 2,
        "react-native/no-color-literals": 2,
        "react-native/no-raw-text": 2,
        "react-native/sort-styles": [
            "error",
            "asc", {
                "ignoreClassNames": false,
                "ignoreStyleProperties": false
            }
        ]
    }
};
