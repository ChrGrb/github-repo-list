# Filterable Github repository list

This Project allows you to list all projects of a github login and filter them with a search bar. It also displays essential information about the provided login.

## Setup

- To use the application first run `yarn install` to install the necessary node modules.
- To use the GitHub API rename the .env.template file to .env and add your personal GitHub access token. Look at this [guide](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) to find out how to create this token.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the project in development mode.\
You can view it by opening [http://localhost:3000](http://localhost:3000)

### `yarn build`

Builds the project into the `build` folder, ready for deployment.

### `yarn test`

Runs the test suite inside the terminal.

### `yarn codegen`

Converts all graphql schemas defined in `src/graphql/*` to TypeScript types.


## Future improvements

- Use GitHub v4 API for search functionality; currently the amount of repositories is capped at 1000
- Implement mutations to make the star button usable
- Implement codegen to automatically create react hooks for queries
- Add GraphQL loading and error feedback in frontend


## Feedback

- Great fun implementing exercise
- Good scope to implement
- Could have been more focussed on backend for a full-stack position; for example you could have included tasks implementing functionality on the server side that is then offered to the front-end