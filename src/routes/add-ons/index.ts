import express from 'express';
import excelRouter from './excel';
import autocompleteRouter from './autocomplete';
import pageDiscoveryRouter from './page-discovery';
import pageSchemaRouter from './page-schema';
import menuRouter from './menu';
import favoriteRouter from './favorite';

const router = express.Router();
router.use('/excel', excelRouter);
router.use('/autocomplete', autocompleteRouter);
router.use('/page-discovery', pageDiscoveryRouter);
router.use('/page-schema', pageSchemaRouter);
router.use('/menu', menuRouter);
router.use('/favorite', favoriteRouter);

export default router;

