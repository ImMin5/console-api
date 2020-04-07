import express from 'express';
import asyncHandler from 'express-async-handler';
import * as cloudServiceType from '@controllers/inventory/cloud-service-type';

import Tag from '@lib/tag';
import tagRouter from '../tag/';

const router = express.Router();
//cloud_service_type_id
const bulkTagActionParam = {
    list: cloudServiceType.listCloudServiceTypes,
    update: cloudServiceType.updateCloudServiceType,
    key: 'cloud_service_type_id'
};

router.use('/tag', Tag.bulkMiddleHandler(bulkTagActionParam), tagRouter);
const controllers = [
    { url: '/create', func: cloudServiceType.createCloudServiceType },
    { url: '/update', func: cloudServiceType.updateCloudServiceType },
    { url: '/delete', func: cloudServiceType.deleteCloudServiceType },
    { url: '/get', func: cloudServiceType.getCloudServiceType },
    { url: '/list', func: cloudServiceType.listCloudServiceTypes }
];

controllers.map((config) => {
    router.post(config.url, asyncHandler(async (req, res, next) => {
        res.json(await config.func(req.body));
    }));
});

export default router;
