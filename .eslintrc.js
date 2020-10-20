module.exports = {
    "rules": {
        "no-console": `off`,
        "indent": [`error`, 4],
        "semi": [`error`, `always`],
        "quotes": [`error`, `backtick`],
        "keyword-spacing": [
            `error`,
            {
                "before": true, "after": true
            }
        ],
    },
    "extends": `eslint:recommended`,
    "env": {
        "es6": true,
        "node": true,
    },
    "parserOptions": {
        "ecmaVersion": 2020
    },
};
