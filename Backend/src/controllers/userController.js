const {
    createUser,
    getById,
    getUsers,
    removeUser,
    updateUser
} = require("../repositories/userRepository");
const { userValidation } = require("../validations/userValidation");
const bcrypt = require("bcrypt");

exports.create = async (req, res) => {
    try {
        const data = await userValidation.parse(req.body);
        req.body.password = bcrypt.hashSync(req.body.password, 10);

        const user = await createUser(data);
        res.status(200).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.get = async (req, res) => {
    try {
        const users = await getUsers();
        res.status(200).send(users);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.getId = async (req, res) => {
    try {
        const user = await getById(Number(req.params.id));
        res.status(200).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.update = async (req, res) => {
    try {
        const user = await updateUser(Number(req.params.id), req.body);
        res.status(200).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.remove = async (req, res) => {
    try {
        await removeUser(Number(req.params.id));
        res.status(200).send();
    } catch (e) {
        res.status(400).send(e);
    }
}