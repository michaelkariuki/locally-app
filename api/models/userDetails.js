module.exports  =  (sequelize, DataTypes) => {
    const userDetails = sequelize.define('userDetails', {
        // userDetails(userID, fName, lName, Age, phoneNumber, userType)

        userId: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        fName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userAge: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userType: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'userDetails'
    }
    )  
    return userDetails
}



