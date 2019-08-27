import express from 'express';
import asyncHandler from 'express-async-handler';
import * as plugin from '@controllers/repository/plugin';

const router = express.Router();
const controllers = [
    { url: '/register', func: plugin.registerPlugin },
    { url: '/update', func: plugin.updatePlugin },
    { url: '/enable', func: plugin.enablePlugin },
    { url: '/disable', func: plugin.disablePlugin },
    { url: '/deregister', func: plugin.deregisterPlugin },
    { url: '/get-versions', func: plugin.getPluginVerions },
    { url: '/get', func: plugin.getPlugin },
    { url: '/list', func: plugin.listPlugins }
];

controllers.map((config) => {
    router.post(config.url, asyncHandler(async (req, res, next) => {
        res.json(await config.func(req.body));
    }));
});

export default router;
