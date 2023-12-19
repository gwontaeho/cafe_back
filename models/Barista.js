module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Barista", {
        name: {
            type: DataTypes.STRING(10),
        },
        gender: {
            type: DataTypes.STRING(1),
        },
        contact: {
            type: DataTypes.STRING(20),
        },
        introduction: {
            type: DataTypes.TEXT,
        },
    });
};
