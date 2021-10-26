const dogs = [
	{ text: 'TRAIN: George, Labrador', done: true, _id: 125223 },
	{ text: 'TRAIN: Fluffy, Pomeranian', done: false, _id: 127904 },
	{ text: 'TRAIN: Brutus, Bulldog', done: false, _id: 139608 },
]

const find = (conditions, callback) => {
	// see if this works, if not, execute the code in the catch block
	try {
		// make sure that conditions is an object - if not throw a TypeError
		if (!(conditions instanceof Object)) {
			throw new TypeError('Please pass in an object')
		}
		// If the object is empty, return all the dogs
		if (Object.keys(conditions).length === 0) return callback(null, dogs)
		// deal with errors
	} catch (error) {
		console.log(error)
		callback(error, [])
	}
}

export { find }
