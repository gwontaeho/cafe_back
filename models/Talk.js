module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Talk", {
        title: {
            type: DataTypes.STRING(20),
        },
        content: {
            type: DataTypes.TEXT,
        },
        type: {
            type: DataTypes.STRING(1),
        },
    });
};
