module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Post", {
        type: {
            type: DataTypes.STRING(1),
        },
        date: {
            type: DataTypes.DATE,
        },
        days: {
            type: DataTypes.STRING(20),
        },
        begin: {
            type: DataTypes.FLOAT,
        },
        end: {
            type: DataTypes.FLOAT,
        },
        hour: {
            type: DataTypes.FLOAT,
        },
        personnel: {
            type: DataTypes.INTEGER,
        },
        career: {
            type: DataTypes.INTEGER,
        },
        gender: {
            type: DataTypes.STRING(1),
        },
        wage: {
            type: DataTypes.INTEGER,
        },
        wage_type: {
            type: DataTypes.STRING(1),
        },
        wage_hour: {
            type: DataTypes.INTEGER,
        },
        wage_day: {
            type: DataTypes.INTEGER,
        },
        title: {
            type: DataTypes.STRING(30),
        },
        content: {
            type: DataTypes.TEXT,
        },
        recruiter: {
            type: DataTypes.STRING(10),
        },
        contact: {
            type: DataTypes.STRING(20),
        },
        email: {
            type: DataTypes.STRING(40),
        },
        methods: {
            type: DataTypes.STRING(20),
        },
    });
};
