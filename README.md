# Storia

This project is a simple e-commerce product gallery built for test purpose with Vue 3, Vuex, VuexORM, Vuetify, and Tailwind CSS. It features a responsive design, and internationalization support.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```bash
# Clone the repository
git clone https://github.com/ysbia/Storia-front.git
cd Storia-front

p .env.example .env

# Install dependencies
npm install

# Serve with hot reload at localhost:8080
npm run dev

# Build for production
npm run build
```

## Docker

To build and run the project using Docker:

```bash
# Build the Docker image
docker build -t storia .

# Run the container
docker run -it -p 8080:80 --rm --name storia-container storia
```

The application will be available at `http://localhost:8080`.

## Feature

-Fetch products
-Add product to cart
-Delete Product from cart
-Update product quantity in cart
-Show single product
-Dark mode
-Internationalization

## architectural overview

Try to make project clean by using SFC

### Service
- api calls files

### Lang
- translation files

### Setup
- plugins config

### Store
- vuexOrm models
- vuex modules

### Views
- pages

### Router
- routes

### Spec
- test files

### Components
- components

### assets
- images and styles

## User Story 2 choosen
- Minimum Order Cart
