# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- Install dependencies: `npm install`
- Start the Vue dev server: `npm run serve`
  - This runs `vue-cli-service serve --open` and opens the app in a browser.
- Build for production: `npm run build`

There are currently no lint or test scripts defined in `package.json`. Do not assume `npm test` or `npm run lint` exists unless scripts are added later.

## Architecture

This is a Vue 3 single-page app built with Vue CLI 5. The UI uses Element Plus and `@element-plus/icons-vue`; global Element Plus styles are imported in `src/main.js`. Pinia is installed and registered globally, with the current user store in `src/stores/user.js`.

Application bootstrapping is minimal:

- `src/main.js` creates the Vue app and installs Pinia, Vue Router, and Element Plus.
- `src/App.vue` only renders `<router-view />` and defines global page/body styles.
- `src/router/index.js` owns the route tree.

Routing structure:

- `/` redirects to `/login`.
- `/login` renders the standalone login page (`src/views/LoginView.vue`).
- `/main` renders `src/layouts/MainLayout.vue`, redirects to `/main/product`, and contains the console pages as child routes.
- Existing console child routes are `product`, `price`, `develop`, `scheme`, and `resource`; each maps to a file in `src/views/` and has a `meta.title` in Chinese.

Layout structure:

- `src/layouts/MainLayout.vue` is the shell for logged-in console pages. It contains the top bar, sidebar menu, user dropdown, and nested `<router-view />` for child pages.
- Sidebar menu entries are driven by the local `menuSections` array in `MainLayout.vue`. Adding a new main console page usually requires updating both `src/router/index.js` and this `menuSections` array if it should appear in the navigation.
- The active sidebar item uses `route.fullPath`, so menu item indexes include full paths such as `/main/product` and query-string module variants.

State and login flow:

- `src/stores/user.js` defines a Pinia `user` store with `username` defaulting to `演示用户`.
- `LoginView.vue` validates that username and password are non-empty, stores the username via `userStore.login()`, then navigates to `/main`.
- There is no authentication guard or backend integration in the current codebase.

Styling conventions:

- Views are Vue SFCs using `<script setup>` and scoped styles.
- Console pages use a repeated card-based visual pattern: `.page`, `.page-head`, white cards, `#0b6fcb` primary blue, `#101828` headings, and `#667085` body text.
- The app assumes desktop-width layouts; global CSS sets `min-width: 1180px` on `html`, `body`, and `#app`.

Path aliases:

- `jsconfig.json` maps `@/*` to `src/*`, although existing code mostly uses relative imports.
