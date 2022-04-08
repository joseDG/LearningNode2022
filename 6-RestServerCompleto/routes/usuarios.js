const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.json({
        msg: 'Get Api'
    });
});

router.put('/', (req, res) => {
    res.json({
        msg: 'Put Api'
    });
});

router.post('/', (req, res) => {
    res.json({
        msg: 'Post Api'
    });
});

router.delete('/', (req, res) => {
    res.json({
        msg: 'Delete Api'
    });
});

router.patch('/', (req, res) => {
    res.json({
        msg: 'Delete Api'
    });
});

module.exports = router;