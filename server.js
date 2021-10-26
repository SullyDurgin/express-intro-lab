// import modules

import express from 'express'

// import the dogs database
import * as todoDb from './data/dogs-db.js'
// we could also do:
import { find } from './data/dogs-db.js'
// but not both! (well, you can, but please don't)

// Create Express app

const app = express()

// Configure the app (app.set)

app.set('view engine', 'ejs')

// Mount Middleware (app.use)

app.get('/home', function (req, res) {
	res.render('home')
})

app.get('/dogs', function (req, res) {
	todoDb.find({}, function (error, dogs) {
		res.render('dogs/index', {
			dogs: dogs,
			error: error,
		})
	})
})

app.get('/', function (req, res) {
	res.redirect('/home')
})

// Mount routes

// Tell the app to listen on port 3000

app.listen(3000, function () {
	console.log('Listening on port 3000')
})
