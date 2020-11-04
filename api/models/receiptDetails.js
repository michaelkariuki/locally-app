module.exports  = (sequelize, DataTypes) => {
    const receiptDetails = sequelize.define('receiptDetails', {
        // ReceiptDetails(receiptID, itemID, Quantity, dateSold)

        receiptId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey : true,
            autoIncrement : true
        },
        itemQuantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dateSold: {
            type: DataTypes.DATE
        }

    }, {
        tableName: 'receiptDetails'
    }
    ) 
    return receiptDetails 
}
