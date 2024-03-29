module.exports = (sequelize, DataTypes) => {
  const Surgery = sequelize.define(
    "Surgery",
    {
      surgery_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      specialty: DataTypes.STRING,
      doctor: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  return Surgery;
};
