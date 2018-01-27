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
        'eslint:recommended',
        'google',
        'react-app',
    ],
    'rules': {
        'max-len': [2, {
            'code': 120,
            'comments': 120,
        }],
        'no-console': 'warn',
        'arrow-parens': [
            2,
            'as-needed',
        ],
        'require-jsdoc': ['error', {
            'require': {
                'FunctionDeclaration': true,
                'MethodDefinition': false,
                'ClassDeclaration': false,
                'ArrowFunctionExpression': true,
                'FunctionExpression': true,
            },
        }],
        'linebreak-style': 0,
        'no-invalid-this': 0,
    },
    'globals': {
        'env': true,
    },
};
