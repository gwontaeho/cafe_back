module.exports = (sequelize, DataTypes) => {
    return sequelize.define("User", {
        account: {
            type: DataTypes.STRING(10),
            unique: true,
        },
        password: {
            type: DataTypes.STRING(20),
        },
        type: {
            type: DataTypes.STRING(1),
        },
    });
};
