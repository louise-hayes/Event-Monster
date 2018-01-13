'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    event_name: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME
  }, {
    classMethods: {
      associate: function(models) {
        Event.belongsToMany(models.Users, {
          through: models.Staging
        });
      }
    }
  });
  return Event;
};