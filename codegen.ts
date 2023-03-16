import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: './src/graphql/*.graphql',
    documents: ['src/**/*.tsx'],
    generates: {
        './src/types/': {
            preset: 'client',
        }
    },
    ignoreNoDocuments: true,
};

export default config;