const {
    salesValidation,
    updateSalesValidation
} = require("../validations/salesValidation");
const {
    createSale,
    getById,
    getSales,
    removeSale,
    updateSale
} = require("../repositories/salesRepository");

exports.create = async (req, res) => {
    try {
        const data = await salesValidation.parse(req.body);
        const user = await createSale(data);
        res.status(200).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
}

exports.get = async (req, res) => {
    try {
        const sale = await getSales();
        res.status(200).send(sale);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.getId = async (req, res) => {
    try {
        const sale = await getById(Number(req.params.id));
        res.status(200).send(sale);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.remove = async (req, res) => {
    try {
        await removeSale(Number(req.params.id));
        res.status(200).send();
    } catch (e) {
        res.status(400).send(e);
    }
}

exports.update = async (req, res) => {
    try {
        const data = await updateSalesValidation.parse(req.body);
        const sales = await updateSale(Number(req.params.id), data);
        res.status(200).send(sales);
    } catch (e) {
        res.status(400).send(e);
    }
};