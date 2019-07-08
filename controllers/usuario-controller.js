const usuarios = require('../db_apis/usuarios.js');

function getUsuariosFromRec(req) {
    const usuario = {
        ncomeusua: req.body.cnomeusua,
        clogiusua: req.body.clogiusua,
        cmailusua: req.body.cmailusua
    };

    return employee;
}

module.exports.get = async function get(req, res, next) {
    try {
        const context = {};

        context.id = parseInt(req.params.id, 10);

        const rows = await usuarios.find(context);

        if (req.params.id) {
            if (rows.length === 1) {
                res.status(200).json(rows[0]);
            } else {
                res.status(404).end();
            }
        } else {
            res.status(200).json(rows);
        }
    } catch (err) {
        next(err);
    }
}

module.exports.post = async function post(req, res, next) {
    try {
        let employee = getUsuariosFromRec(req);

        employee = await employees.create(employee);

        res.status(201).json(employee);
    } catch (err) {
        next(err);
    }
}

module.exports.put = async function put(req, res, next) {
}

module.exports.delete = async function del(req, res, next) {
}
