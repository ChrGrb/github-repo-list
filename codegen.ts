import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: './src/graphql/*.graphql',
    documents: ['src/**/*.graphql'],
    generates: {
        './src/types/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                gqlTagName: 'gql',
            },
        }
    },
};

export default config;