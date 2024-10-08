// @ts-check
import globals from 'globals';
import eslint from '@eslint/js';
import pluginTypescript from 'typescript-eslint';
import pluginStylistic from '@stylistic/eslint-plugin';

const toggleTypescript = (rule, value) => {
    const key = `@typescript-eslint/${ rule }`;

    return {
        [rule]: 'off',
        [key] : value,
    };
};

export default pluginTypescript.config(
    {
        ignores: [
            'lib/**/*',
            'dist/**/*',
            'docs/**/*',
        ],
    },
    eslint.configs.recommended,
    ...pluginTypescript.configs.strict,
    {
        plugins        : { '@stylistic': pluginStylistic },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: { projectService: { allowDefaultProject: ['eslint.config.js']}},
        },
        rules: {
            'no-new'                : ['error'],
            'require-atomic-updates': ['error'],
            'no-multi-assign'       : ['error'],
            'no-multi-str'          : ['error'],
            'func-name-matching'    : ['error'],
            'default-case-last'     : ['error'],
            'no-new-func'           : ['error'],
            'no-nested-ternary'     : ['error'],
            'no-labels'             : ['error'],
            'no-invalid-this'       : ['error'],
            'no-implicit-globals'   : ['error'],
            'no-iterator'           : ['error'],
            'no-lone-blocks'        : ['error'],
            'no-lonely-if'          : ['error'],
            'no-new-wrappers'       : ['error'],
            camelcase               : [
                'error',
                {
                    ignoreImports: true,
                    ignoreGlobals: true,
                },
            ],
            'arrow-body-style'            : ['error'],
            'unicode-bom'                 : ['error', 'never'],
            'array-callback-return'       : ['error'],
            'symbol-description'          : ['error'],
            'require-unicode-regexp'      : ['error'],
            'prefer-template'             : ['error'],
            'prefer-rest-params'          : ['error'],
            'prefer-promise-reject-errors': ['error'],
            'prefer-object-has-own'       : ['error'],
            'prefer-named-capture-group'  : ['error'],
            'no-var'                      : ['error'],
            'no-eval'                     : ['error'],
            'no-alert'                    : ['error'],
            strict                        : ['error', 'never'],
            'prefer-const'                : ['error'],
            'prefer-arrow-callback'       : ['error'],
            'one-var'                     : ['error', 'never'],
            'no-useless-return'           : ['error'],
            'no-useless-rename'           : ['error'],
            'no-useless-computed-key'     : ['error'],
            'no-useless-concat'           : ['error'],
            'no-useless-constructor'      : ['error'],
            'no-useless-call'             : ['error'],
            'no-unneeded-ternary'         : ['error'],
            'max-classes-per-file'        : ['error', 1],
            'max-depth'                   : ['error', 6],
            'no-self-compare'             : ['error'],
            'no-throw-literal'            : ['error'],
            'no-script-url'               : ['error'],
            'no-proto'                    : ['error'],
            'no-console'                  : ['error'],
            'no-array-constructor'        : ['error'],
            'no-bitwise'                  : ['error'],
            'no-caller'                   : ['error'],
            'new-cap'                     : ['error'],
            'no-extend-native'            : ['error'],
            'no-extra-bind'               : ['error'],
            'no-extra-label'              : ['error'],
            'no-sequences'                : ['error'],
            'no-return-assign'            : ['error'],
            'no-param-reassign'           : ['error'],
            'no-object-constructor'       : ['error'],
            eqeqeq                        : ['error'],
            'no-constructor-return'       : ['error'],
            'no-promise-executor-return'  : ['error'],
            complexity                    : ['error'],
            curly                         : ['error', 'multi-line'],
            'no-implied-eval'             : ['error'],
            'func-style'                  : ['error', 'expression'],

            '@typescript-eslint/no-explicit-any'             : ['off'],
            '@typescript-eslint/no-useless-empty-export'     : ['error'],
            '@typescript-eslint/no-unnecessary-qualifier'    : ['error'],
            '@typescript-eslint/adjacent-overload-signatures': ['error'],
            '@typescript-eslint/array-type'                  : [
                'error',
                {
                    default : 'generic',
                    readonly: 'generic',
                },
            ],
            '@typescript-eslint/ban-tslint-comment'             : ['error'],
            '@typescript-eslint/consistent-generic-constructors': ['error'],
            '@typescript-eslint/no-confusing-non-null-assertion': ['error'],
            '@typescript-eslint/no-empty-object-type'           : ['error'],
            '@typescript-eslint/no-empty-interface'             : ['error'],
            '@typescript-eslint/no-inferrable-types'            : ['error'],
            '@typescript-eslint/no-require-imports'             : ['error'],
            '@typescript-eslint/consistent-type-definitions'    : ['error', 'type'],
            '@typescript-eslint/consistent-type-imports'        : ['error'],
            '@typescript-eslint/method-signature-style'         : ['error'],
            '@typescript-eslint/no-unsafe-unary-minus'          : ['error'],
            '@typescript-eslint/parameter-properties'           : ['error'],
            '@typescript-eslint/prefer-enum-initializers'       : ['error'],
            '@typescript-eslint/prefer-optional-chain'          : ['error'],
            '@typescript-eslint/prefer-readonly'                : ['error'],
            '@typescript-eslint/promise-function-async'         : ['error'],

            'no-return-await'                : 'off',
            '@typescript-eslint/return-await': 'error',

            ...toggleTypescript('default-param-last', 'error'),
            ...toggleTypescript('no-loop-func', 'error'),
            ...toggleTypescript('no-empty-function', 'error'),
            ...toggleTypescript('class-methods-use-this', 'error'),
            ...toggleTypescript('no-shadow', 'error'),
            ...toggleTypescript('no-unused-expressions', 'error'),

            '@stylistic/quotes'                          : ['error', 'single'],
            '@stylistic/indent'                          : ['error', 4],
            '@stylistic/indent-binary-ops'               : ['error', 4],
            '@stylistic/brace-style'                     : ['error', '1tbs', { allowSingleLine: true }],
            '@stylistic/member-delimiter-style'          : 'error',
            '@stylistic/semi'                            : 'error',
            '@stylistic/wrap-iife'                       : 'error',
            '@stylistic/keyword-spacing'                 : 'error',
            '@stylistic/comma-spacing'                   : 'error',
            '@stylistic/comma-dangle'                    : ['error', 'always-multiline'],
            '@stylistic/comma-style'                     : 'error',
            '@stylistic/eol-last'                        : ['error', 'always'],
            '@stylistic/arrow-parens'                    : ['error', 'as-needed'],
            '@stylistic/arrow-spacing'                   : 'error',
            '@stylistic/block-spacing'                   : 'error',
            '@stylistic/new-parens'                      : 'error',
            '@stylistic/no-extra-semi'                   : 'error',
            '@stylistic/semi-spacing'                    : 'error',
            '@stylistic/semi-style'                      : 'error',
            '@stylistic/no-tabs'                         : 'error',
            '@stylistic/no-trailing-spaces'              : 'error',
            '@stylistic/space-before-blocks'             : 'error',
            '@stylistic/yield-star-spacing'              : 'error',
            '@stylistic/padded-blocks'                   : ['error', 'never'],
            '@stylistic/no-whitespace-before-property'   : 'error',
            '@stylistic/quote-props'                     : ['error', 'as-needed'],
            '@stylistic/no-floating-decimal'             : 'error',
            '@stylistic/no-mixed-spaces-and-tabs'        : 'error',
            '@stylistic/one-var-declaration-per-line'    : ['error', 'initializations'],
            '@stylistic/computed-property-spacing'       : ['error', 'never'],
            '@stylistic/dot-location'                    : ['error', 'property'],
            '@stylistic/function-call-argument-newline'  : ['error', 'consistent'],
            '@stylistic/function-call-spacing'           : ['error', 'never'],
            '@stylistic/function-paren-newline'          : ['error', 'consistent'],
            '@stylistic/generator-star-spacing'          : 'error',
            '@stylistic/linebreak-style'                 : ['error', 'unix'],
            '@stylistic/newline-per-chained-call'        : ['error', { ignoreChainWithDepth: 4 }],
            '@stylistic/no-mixed-operators'              : 'error',
            '@stylistic/no-multiple-empty-lines'         : 'error',
            '@stylistic/nonblock-statement-body-position': ['error', 'beside'],
            '@stylistic/operator-linebreak'              : ['error', 'after'],
            '@stylistic/rest-spread-spacing'             : ['error', 'never'],
            '@stylistic/space-infix-ops'                 : 'error',
            '@stylistic/space-unary-ops'                 : 'error',
            '@stylistic/spaced-comment'                  : ['error', 'always'],
            '@stylistic/switch-colon-spacing'            : 'error',
            '@stylistic/template-curly-spacing'          : ['error', 'always'],
            '@stylistic/template-tag-spacing'            : ['error', 'never'],
            '@stylistic/type-generic-spacing'            : 'error',
            '@stylistic/type-named-tuple-spacing'        : 'error',
            '@stylistic/space-before-function-paren'     : [
                'error',
                {
                    anonymous : 'always',
                    named     : 'never',
                    asyncArrow: 'always',
                },
            ],
            '@stylistic/key-spacing'         : ['error', { align: 'colon' }],
            '@stylistic/object-curly-newline': [
                'error',
                {
                    ObjectExpression: {
                        minProperties: 5,
                        multiline    : true,
                    },
                    ObjectPattern: {
                        minProperties: 5,
                        multiline    : true,
                    },
                    ImportDeclaration: {
                        minProperties: 5,
                        multiline    : true,
                    },
                    ExportDeclaration: {
                        minProperties: 5,
                        multiline    : true,
                    },
                },
            ],
            '@stylistic/object-curly-spacing': [
                'error',
                'always',
                {
                    arraysInObjects : false,
                    objectsInObjects: false,
                },
            ],
            '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
            '@stylistic/array-bracket-newline'  : [
                'error',
                {
                    minItems : 4,
                    multiline: true,
                },
            ],
            '@stylistic/array-bracket-spacing': [
                'error',
                'never',
                {
                    objectsInArrays: false,
                    arraysInArrays : false,
                },
            ],
            '@stylistic/array-element-newline': [
                'error',
                {
                    consistent: true,
                    multiline : true,
                    minItems  : 4,
                },
            ],
        },
    },
);
