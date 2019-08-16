# Description
Server-side nodejs (using express) app. Connects to mongo database (using mongoose) to serve up graphql functionality to the react client.

## Start app
Just run `node app.js` (or `nodemon app.js` for hot reloading if nodemon is installed) and app will run on port 4000. Link to GraphIQL interface: http://localhost:4000/graphql.

## Database configuration
Database configuration needs to be complete before starting the app. Replace line 12 in app.js with your own cluster url

```mongoose.connect('mongodb+srv://admin:YaZ0Lh194ppxILkL@cluster0-qpd2y.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })```

Free-tier mongo cluster can be found at: https://mlab.com/signup/