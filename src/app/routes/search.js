import express from 'express';

import * as controllers from '../controllers/search';

const router = express.Router();
router.get('/search', controllers.search);

export default router;