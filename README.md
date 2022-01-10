# Tretton37 Code Assignment

> Next.js website for DJ Events for displaying all the ninjas of tretton37.

## Usage

### Setup Frontend

1- clone or download this repo `gh repo clone siavashsajady/colleagues-profiles-frontend` 2. Install dependencies `npm install` 3. Run the project using `npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Setup Backend

The Strapi backend can be found [here](https://github.com/siavashsajady/colleagues-profiles-backend)

Clone the repo above and run your backend.

1. Install dependencies `npm install`
2. Run the project using `npm run develop`

## Features

### design & accessability

- Responsive Design
- A modern Design

### functionality

- complete authentication, authorization, Access & crud functionality based on the user
- Search by name and office

## Process

First, I started of just setting up the project by set up all the default frontend folders files and dependencies for my [Next.js] website.

Once this was done I created a layout for all the pages and installed TailwindCSS.

I first wanted to get a basic design and routes set up before I began to work on the specific features. I chose to use [TailwindCSSI](https://tailwindcss.com/) as my UI framework to be able to get quick access to UI components. For me, one of the top benefits of using a framework like TailwindCSS is the accessibility and responsive features you get for free.

Next, I created a JSON API and started to fetch data from API routes. One reason that I choose to use Next.js is the ability to create API routes within the Next.js structure, in api folder in the pages folder [Next.js API](https://nextjs.org/docs/api-routes/introduction). Initially, I served employees' data from the API folder to create API routes and fetch data, and add a single employee profile page and display all employee data. Next.js provides three data fetching methods, so I used the getServersideProps to fetch data on each request. The getStaticProps method is also available, but I did not use it since it is suitable for a static website and it doesn't fetch on every request, but only at build time.

Next, I started in my backend and I came from [Strapi CMS](https://strapi.io/), as I need a solid backend to work with. So instead of just creating an API from scratch, I used this headless content management system which is a huge trend right now. It gives me a full API and authentication with JSON Web Token. It’s not something that is hosted somewhere else, and you host it yourself. As far as images go to use in this website, I hosted images at [Cloudinary](https://cloudinary.com/), because it’s good for optimization, if you upload an image to Cloudinary, it creates multiple versions, and sizes. So by using the documentation's installation, I set up Strapi CMS to create full API, and in my backend, I just did npm-run-develop which started it back up. Then I signed up in Cloudinary and installed the strapi-provider-upload-cloudinary package that allows us to very easily integrate Strapi and Cloudinary.
