module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Store", {
        b_nm: {
            type: DataTypes.STRING(20),
        },
        b_no: {
            type: DataTypes.STRING(10),
        },
        p_nm: {
            type: DataTypes.STRING(20),
        },
        start_dt: {
            type: DataTypes.STRING(8),
        },
        address: {
            type: DataTypes.STRING(40),
        },
        address_extra: {
            type: DataTypes.STRING(40),
        },
        sido: {
            type: DataTypes.STRING(10),
        },
        sigungu: {
            type: DataTypes.STRING(10),
        },
        bname: {
            type: DataTypes.STRING(10),
        },
        latitude: {
            type: DataTypes.STRING(20),
        },
        longitude: {
            type: DataTypes.STRING(20),
        },
        contact: {
            type: DataTypes.STRING(20),
        },
        email: {
            type: DataTypes.STRING(40),
        },
        brand: {
            type: DataTypes.STRING(10),
        },
        introduction: {
            type: DataTypes.TEXT,
        },
    });
};
