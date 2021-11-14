# Frontend code template in React

This template is to be used for frontend applications.

## Features

- State management + persistence with `valtio` and `PersistableStore`
- Less than 16kb after brotli compression (this includes **everything**) 😱
- `preact` under the hood with `preact/compat` makes it compatible with virtually any `react` library but still makes it faster
- Full TypeScript support — no dangling types
- `vite` packager and devtools make building and development lightning fast
- Localization out of the box
- `tailwind-css` built-in with type-safe class names
- GitHub Actions that lint and check the code on pull requests
- `prettier` and `eslint` configured, enabled and formatting your code on save
- List of recommended extensions for VSCode
- It is important to keep the bundle small, so a `stats.html` file is generated on `yarn build` to visually show you the bundle size

## Local launch

1. Install dependencies with `yarn`
2. Run the server with `yarn start`

## Available Scripts

- `yarn start` — runs the app in the development mode
- `yarn build` — builds the app for production to the `docs` folder
- `yarn lint` — checks if the code is linted and formatted
- `yarn generate-css-types` — generates the CSS types for `tailwind-css`
- `yarn update` — builds the code and pushes it to git remote
