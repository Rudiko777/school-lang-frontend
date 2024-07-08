import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintReact from 'eslint-plugin-react'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'


/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    {
        files: ['**/*.{js,ts,jsx,tsx,mjs,cjs}'],
        rules: {
            ...eslintConfigPrettier.rules,
            'prefer-const': 'error'
        }
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2022
            },
            parserOptions: eslintReact.configs.recommended.parserOptions
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        plugins: {
            react: eslintReact,
            prettier: prettierPlugin
        }
    },
    {
        ignores: ['node_modules', 'dist']
    },
]
