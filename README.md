# Poke-Store

This is a Pokemon Store personal project, made using the free pokeapi (https://pokeapi.co/).

The purpose of this project is to create the most realistic store possible, with the most functionalities as possible.

This project is made with React JS, Next.js and Redux. The style has being made with Sass and some icons from FontsAwesome.

Below you can see the progress and what functionalities are working:

## Home-Page
All navbar features are working unless the Search Input, both 'Pokemon List' and 'See All Pokemon' lead to the same path.

![image](https://user-images.githubusercontent.com/109878939/218279101-c2f9ace6-8094-4d2b-bc77-a2a2ebc53c0a.png)

## Navigation-Page
This page shows all the pokemons, you can navigate between pages through the navigation buttons.

When you click any pokemon name, its details are shown.

![image](https://user-images.githubusercontent.com/109878939/218279166-84342353-ce07-430e-9576-c4b3edc08923.png)
![image](https://user-images.githubusercontent.com/109878939/218279700-a9922c1d-b0c0-44ef-b81b-69a75439ae38.png)

## Navigation-Page details
You can add the pokemon to your cart, see its artwork and see its artwork or toggle the sprite between front and back.

When you add any pokemon to your cart the cart icon starts counting.

![image](https://user-images.githubusercontent.com/109878939/218279373-e054e1e1-b4f0-4307-b0c1-884cdd72e664.png)
![image](https://user-images.githubusercontent.com/109878939/218279395-8a38ecc1-1a2b-48bd-9e74-d7fa683c3549.png)

## MyCart-Page
In this page all pokemon added to cart are shown, you can change quantity and remove any pokemon you want.

![image](https://user-images.githubusercontent.com/109878939/218279446-88a91372-8325-4358-921f-363410990582.png)
![image](https://user-images.githubusercontent.com/109878939/218279549-7081e3ee-0d10-40f3-ae25-1a990709f71a.png)

_______________________________________________________________________________________________________________



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
