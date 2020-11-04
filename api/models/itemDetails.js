module.exports  =  (sequelize, DataTypes) => {
    const itemDetails = sequelize.define('ItemDetails', {
        // itemDetails(itemID, ItemName, ItemDescription, itemPrice, itemImgLink, itemType)
        itemId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        itemName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        itemDescription: {
            type: DataTypes.STRING,
            allowNull: true
        },
        itemPrice: {
            type: DataTypes.STRING,
            allowNull: false
        },
        itemImgLink: {
            type: DataTypes.STRING,
            allowNull: true
        },
        itemCategory: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'ItemDetails'
    }
    )  
    return itemDetails
}