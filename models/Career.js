module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Career", {
        brand: {
            type: DataTypes.STRING(10),
        },
        period: {
            type: DataTypes.INTEGER,
        },
        isVerified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });
};
