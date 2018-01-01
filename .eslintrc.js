// https://github.com/google/eslint-config-google/blob/master/index.js

module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es6': true,
    },
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
    },
    'extends': [
        'react-app',
    ],
    'rules': {
        'max-len': [2, {
            'code': 120,
            'comments': 120,
        }],
        'no-console': 'warn',
    },
    'globals': {
        'env': true,
    },
};
