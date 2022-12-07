"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/links', (req, res) => {
    res.send('POST');
});
router.get('/links/:code', (req, res) => {
    res.send('GET');
});
router.get('/links/:code/stats', (req, res) => {
    res.send('GET stats');
});
exports.default = router;
