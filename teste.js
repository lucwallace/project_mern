const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/projeto_mern', (req, res) => res.send('Routa do usuário testando'));

router.post('/', (req, res) => {
    User.create(req.body)
        .then(user => res.json({ msg: 'Usuário adicionado com sucesso' }))
        .catch(err => res.status(400).json({ error: 'Error ao adicionar o usuário' }));
})

module.exports = router;