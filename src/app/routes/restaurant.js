import express from 'express';

import * as controllers from '../controllers/restaurant';

const router = express.Router();

router.get('/restaurants', controllers.getRestaurants);
router.get('/restaurants/:id', controllers.getRestaurant);
router.post('/restaurants', controllers.createRestaurant);
router.put('/restaurants/:id', controllers.updateRestaurant);
router.patch('/restaurants/:id', controllers.updateRestaurant);


export default router;