module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define(
    "Patient",
    {
      patient_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      fullname: DataTypes.STRING,
      plan_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    },
    {
      timestamps: false,
    }
  );

  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan, { foreignKey: "plan_id", as: "plan" });
  };

  return Patient;
};
