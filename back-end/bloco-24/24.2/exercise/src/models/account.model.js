const accountModel = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    "Account",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: "Accounts",
      underscored: true,
    }
  );

  Account.associate = (models) => {
    Account.hasOne(models.Profile, {
      foreignKey: "accountId",
      as: "profile",
    });
    Account.hasMany(models.Comment, {
      foreignKey: "accountId",
      as: "comments",
    });
  };

  return Account;
};

module.exports = accountModel;
