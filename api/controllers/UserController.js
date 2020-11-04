//CRUD operations for user
const db = require('../models')
const User = db.userDetails
const op = db.Sequelize.Op

// Create and Save a new Tutorial
exports.create = (req, res) => {
  //validate request
  if(!req.body.fName){
      res.status(400).send({
          message: "Form information not complete"
      })
    return
  }
  console.log(req.body)
  //Creating the user
  const user = {
      fName : req.body.fName,
      lName : req.body.lName,
      userAge : req.body.uAge,
      phoneNumber : req.body.uNumber,
      userType : req.body.uType
  }



  //save tutorial in database
  db.sequelize.transaction().then(t => {
      User.create(user, {
          transaction: t
      }).then((data) => {
          res.send(data) //For postman
          t.commit()
      }).catch(err => {
          res.status(500).send({
              message: 
                err.message || "Something went wrong while  processing request on database"
          })
          t.rollback()

      })
  })
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    User.findAll().then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Something went wrong while  processing request on database"
        })
    })
};

// Retrieve all Tutorials from the database.
// With condition
//filters user attributes
exports.findAll_wfilter = (req, res) => {
    const userType = req.query.userType;

    var condition = userType ? { userType: {[Op.like] : `${userType}`}} : null
    User.findAll({
        where : condition
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Something went wrong while  processing request on database"
        })
    })

};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.userId

  User.findByPk(id)
  .then(data => {
    res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Something went wrong while  processing request on database"
        })
    })
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id

    db.sequelize.transaction().then(t => {
        User.update(req.body,{transaction: t} , {
            where : {id : id}
        })
        .then(num => {
            if(num == 1){
                res.send({
                    message: "User updataed successfully"
                        
                })
                t.commit()
            }else{
                res.send({
                    message : `Could not update user with id : ${id}. May not exist`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Something went wrong while  processing request on database"
            })
            t.rollback()
        })
    })
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id

    db.sequelize.transaction().then(t => {
        User.destroy({transaction: t} , {
            where : {id : id}
        })
        .then(num => {
            if(num == 1){
                res.send({
                    message: "User deleted successfully"
                        
                })
                t.commit()
            }else{
                res.send({
                    message : `Could not delete user with id : ${id}. May not exist`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Something went wrong while processing request on database"
            })
            t.rollback()
        })
    })
};

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
  
// };

