import * as restaurantService from '../services/restaurant';

export const  createRestaurant = async (req, res) => {
    console.log('createRestaurant ', req.body)
    try {
    const restaurant = await restaurantService.createRestaurant(req.body);
    return res.json(restaurant)
    }catch (error) {
        res.status = 400; // FIXME classification
        res.json({error})
    }

}

export const getRestaurants = async (req, res) => {
    console.log('getRestaurants ', req.params, req.query)
    try {
        const restaurants = await restaurantService.getRestaurants(req.params, res.query);
         
        return res.json(restaurants)
    }catch (error) {
        res.status = 400; // FIXME classification
        res.json({error})
    }
}

export const getRestaurant = async (req, res) => {
    console.log('createRestaurant ', req.body)
    try {
        const restaurant = await restaurantService.getRestaurant(req.params.id);
        if (!restaurant) {
            res.status = 404;
            res.json({error: 'not found'});
            return;
        }
        
        return res.json(restaurant)
    }catch (error) {
        res.status = 400; // FIXME classification
        res.json({error})
    }
}


export function updateRestaurant(req, res) {
}


export function deleteRestaurant(req, res) {
}
