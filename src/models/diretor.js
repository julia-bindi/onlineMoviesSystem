const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Diretor extends Model{};

    Diretor.init({
            cpf: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            nome: DataTypes.STRING,
            nastimento: DataTypes.DATE,
            nFilmesDirigidos: {
                type: DataTypes.INTEGER,
                field: "n_filmes_dirigidos",
            },
            createdAt: {
              type: DataTypes.DATE,
              field: "created_at",
            },
            updatedAt: {
              type: DataTypes.DATE,
              field: "updated_at",
            },
        },
        {
            sequelize,
            modelName: "diretor",
    });
    return Diretor;
}