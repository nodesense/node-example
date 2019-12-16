import Restaurant from '../models/restaurant';
const sendToQueue = require('../config/message-queue');

export const createRestaurant = async (restaurantData) => {
    try {
    console.log('service createRestaurant ', restaurantData)
    const restaurant = new Restaurant(restaurantData);
    const savedRestaurant = await restaurant.save();
    console.log('saved ', savedRestaurant);

    const msg = {
        id: '12',
        amount: 100
    }

    sendToQueue(msg)
    
    return savedRestaurant;
    }
    catch (error) {
        //FIXME: winston
        console.log('error ', error);
        throw error;
    }
}


export const getRestaurant = async (id) => {
    try {
        console.log('service getRestaurant ', id)
        const restaurant =  await Restaurant.findById(id);
         console.log('**restaurant ', restaurant);
        return restaurant;
        }
        catch (error) {
            //FIXME: winston
            console.log('error ', error);
            throw error;
        }
}


export const getRestaurants = async (params, query) => {
    try {
        const limit = (params && params.limit) || (query && query.limit) || 50;
        const skip = (params && params.skip) || (query && query.skip) || 0;
        console.log('service getRestaurants ', limit, skip)
        const restaurants =  await Restaurant.find({},null,{limit,skip});
         console.log('restaurants ', restaurants);
        return restaurants;
        }
        catch (error) {
            //FIXME: winston
            console.log('error ', error);
            throw error;
        }
}

export function updateRestaurant(restaurant) {
}

export function deleteRestaurant(id) {
}

