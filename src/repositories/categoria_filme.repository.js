const { categoria_filme } = require("../models")

module.exports = {
    list: (query) => categoria_filme.findAndCountAll(query),
    getById: (id) => categoria_filme.findByPk(id),
    get: (params) => categoria_filme.findOne({ where: params }),
    create: (params) => categoria_filme.create(params),
    update: (categoriaFilme) => categoriaFilme.save(),
    destroy: (categoria) => categoria_filme.destroy({ where: { categoria } }),
    getAll: () => categoria_filme.findAll({raw: true})
}