export default {
    MongoUrl: process.env.MONGO_URL || 'mongodb://localhost/test'
}

// to use 
// import config from './config'
// config.MongoUrl