## Full Stack (React-Redux-Auth-Thunk-Express-Knex-SQL with Bulma Framework)
Project Purpose:
Design for school age kids, combine the following information into this App 
-Solar System
-Local School
-Friends 
-Educational Games
-Local Shops

## Setup

Create an .env file with JWT_SECRET="secretgoeshere"

Run the following commands in your terminal:

```sh
yarn install
yarn knex migrate:latest
yarn knex seed:run
```

To run in development:
```sh
yarn dev
 - or -
npm run dev

```

To run in production:
```sh
yarn start
  - or -
npm start
```
         
## Notes from Joan    
:arrow_right_hook: Very handy to enter a long URL to make tiny: https://tinyurl.com/create.php  
:arrow_right_hook: How to use reducers properly? https://redux.js.org/recipes/structuring-reducers/structuring-reducers

    
## Heroku!!!

### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


### Adding postgres

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app


### Deploying!

I have created several npm scripts that will be useful for deploying your app to heroku easily.

To push your local master branch to your heroku app:
```sh
yarn h:deploy
  - or -
npm run h:deploy
```

Run heroku migrations:
```sh
yarn h:migrate
  - or -
npm run h:migrate
```

Run heroku seeds:
```sh
yarn h:seed
  - or -
npm run h:seed
```

If ever you need to rollback, you can also:
```sh
yarn h:rollback
  - or -
npm run h:rollback
```


### Ta-Da!
Your app should be deployed!
