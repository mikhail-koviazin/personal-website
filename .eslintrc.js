module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "ignorePatterns": [
        ".eslintrc.js",
        "node_modules",
        "webpack"
    ],
    "rules": {
        "@typescript-eslint/semi": "error",
        "accessor-pairs": "error",
        "array-bracket-newline": [
            "error",
            "consistent"
        ],
        "array-bracket-spacing": "error",
        "array-callback-return": "error",
        "array-element-newline": [
            "error",
            "consistent"
        ],
        "arrow-body-style": "error",
        "arrow-parens": "error",
        "arrow-spacing": "error",
        "block-scoped-var": "error",
        "block-spacing": "error",
        "brace-style": "error",
        "camelcase": "error",
        "capitalized-comments": "error",
        "class-methods-use-this": "error",
        "comma-dangle": "error",
        "comma-spacing": "error",
        "comma-style": "error",
        "complexity": "error",
        "computed-property-spacing": "error",
        "consistent-return": "error",
        "consistent-this": "error",
        "curly": "error",
        "default-case": "warn",
        "default-case-last": "error",
        "default-param-last": "error",
        "dot-location": "error",
        "dot-notation": "error",
        "eol-last": "error",
        "eqeqeq": "error",
        "func-call-spacing": "error",
        "func-name-matching": "error",
        "func-names": "error",
        "func-style": [
            "error",
            "declaration",
            {
                "allowArrowFunctions": true
            }
        ],
        "function-call-argument-newline": [
            "error",
            "consistent"
        ],
        "function-paren-newline": [
            "error",
            "consistent"
        ] ,
        "generator-star-spacing": "error",
        "grouped-accessor-pairs": "error",
        "guard-for-in": "error",
        "id-denylist": "error",
        "id-length": "off",
        "id-match": "error",
        "implicit-arrow-linebreak": "error",
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "jsx-quotes": "error",
        "key-spacing": "error",
        "keyword-spacing": "error",
        "line-comment-position": "error",
        "linebreak-style": "error",
        "lines-around-comment": "error",
        "lines-between-class-members": "error",
        "max-classes-per-file": "off",
        "max-depth": "error",
        "max-len": [
            "error",
            {
                "code": 160,
                "ignoreTrailingComments": true,
                "ignoreUrls": true
            }
        ],
        "max-lines": "error",
        "max-lines-per-function": [
            "error",
            { "max": 200 }
        ],
        "max-nested-callbacks": "error",
        "max-params": "error",
        "max-statements": [
            "error",
            50
        ],
        "max-statements-per-line": "error",
        "multiline-comment-style": "error",
        "multiline-ternary": "off",
        "new-cap": "error",
        "new-parens": "error",
        "newline-per-chained-call": "error",
        "no-alert": "warn",
        "no-array-constructor": "error",
        "no-await-in-loop": "error",
        "no-bitwise": "off",
        "no-caller": "error",
        "no-confusing-arrow": "error",
        "no-console": "warn",
        "no-constructor-return": "error",
        "no-continue": "off",
        "no-debugger": "warn",
        "no-div-regex": "error",
        "no-duplicate-imports": "error",
        "no-else-return": "error",
        "no-empty-function": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-extra-parens": "error",
        "no-floating-decimal": "error",
        "no-implicit-coercion": [
            "error",
            {
                "allow": [ "!!" ]
            }
        ],
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-inline-comments": "off",
        "no-invalid-this": "error",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-loss-of-precision": "error",
        "no-magic-numbers": "off",
        "no-mixed-operators": "off",
        "no-multi-assign": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-multiple-empty-lines": "error",
        "no-negated-condition": "off",
        "no-nested-ternary": "off",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-wrappers": "error",
        "no-nonoctal-decimal-escape": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-plusplus": "off",
        "no-promise-executor-return": "error",
        "no-proto": "error",
        "no-restricted-exports": "error",
        "no-restricted-globals": "error",
        "no-restricted-imports": "error",
        "no-restricted-properties": "error",
        "no-restricted-syntax": "error",
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow": "off",
        "no-tabs": "error",
        "no-template-curly-in-string": "error",
        "no-ternary": "off",
        "no-throw-literal": "warn",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-undefined": "error",
        "no-underscore-dangle": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": [
            "error",
            {
                "defaultAssignment": false
            }
        ],
        "no-unreachable-loop": "error",
        "no-unsafe-optional-chaining": "error",
        "no-unused-expressions": "error",
        "no-use-before-define": "off",
        "no-useless-backreference": "error",
        "no-useless-call": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-void": "error",
        "no-warning-comments": "error",
        "no-whitespace-before-property": "error",
        "nonblock-statement-body-position": "error",
        "object-curly-newline": "error",
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "object-property-newline": "error",
        "object-shorthand": "error",
        "one-var-declaration-per-line": "error",
        "operator-assignment": "error",
        "operator-linebreak": "error",
        "padded-blocks": [
            "error",
            {
                "blocks": "never",
                "classes": "always",
                "switches": "never"
            }
        ],
        "padding-line-between-statements": "error",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-destructuring": "error",
        "prefer-exponentiation-operator": "error",
        "prefer-named-capture-group": "error",
        "prefer-numeric-literals": "error",
        "prefer-object-spread": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "quote-props": [
            "error",
            "as-needed"
        ],
        "quotes": "error",
        "radix": "error",
        "require-atomic-updates": "error",
        "require-await": "error",
        "require-unicode-regexp": "error",
        "rest-spread-spacing": "error",
        "semi": "off",
        "semi-spacing": "error",
        "semi-style": "error",
        "sort-imports": [
            "error",
            {
                "ignoreCase": true,
                "allowSeparatedGroups": true,
                "ignoreDeclarationSort": true,
                "ignoreMemberSort": false,
                "memberSyntaxSortOrder": [
                    "all",
                    "multiple",
                    "single",
                    "none"
                ]
            }
        ],
        "sort-vars": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": [
            "error",
            "never"
        ],
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": "error",
        "strict": "error",
        "switch-colon-spacing": "error",
        "symbol-description": "error",
        "template-curly-spacing": "error",
        "template-tag-spacing": "error",
        "unicode-bom": "error",
        "vars-on-top": "error",
        "wrap-iife": "error",
        "wrap-regex": "error",
        "yield-star-spacing": "error",
        "yoda": "error",
        "react/jsx-curly-spacing": [
            "error",
            {
                "when": "never",
                "allowMultiline": false,
                "objectLiterals": "never"
            }
        ],
        "@typescript-eslint/explicit-module-boundary-types": [
            "off",
            {
                allowHigherOrderFunctions: true
            }
        ],
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/no-var-requires": "warn",
        "@typescript-eslint/no-explicit-any": "warn"
    }
};
