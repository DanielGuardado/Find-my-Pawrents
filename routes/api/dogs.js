const express = require('express');
const router = express.Router();
const passport = require('passport');


const validateDogInput = require('../../validation/dogs');
const Dog = require('../../models/Dog');

router.get('/test', (req, res) => {
  res.json({
    msg: "This is the dog route"
  })
})

router.get('/', (req, res) => {
  Dog.find()
    .sort({
      date: -1
    })
    .then(dogs => res.json(dogs))
    .catch(err => res.status(400).json(err))
})

router.get("/user/:shelter_id", (req, res) => {
  Dog
    .find({
      shelter_id: req.params.shelter_id
    })
    .then(dogs => res.json(dogs))
    .catch(err => res.status(400).json(err))
})

router.get("/:id", (req, res) => {
  Dog
    .findById(req.params.id)
    .then(dog => res.json(dog))
    .catch(err => res.status(400).json(err))
})


router.post('/:id/update',
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    const {
      isValid,
      errors
    } = validateDogInput(req.body);


    if (!isValid) {
      return res.status(400).json(errors)
    }


Dog.findByIdAndUpdate(req.params.id, {
          shelter_id: req.user.id,
          adoption_status: req.body.adoption_status,
          name: req.body.name,
          gender: req.body.gender,
          breed: req.body.breed,
          age: req.body.age,
          description: req.body.description,
          strengths: req.body.strengths}, 
          {
            new: true
          },
 function (err, dog) {
        if (!err) {
          (res.json(dog))
        } else {
          res.status(400).json(err)
        }
        });

  // Dog
  //   .findById(req.params.id)
  //   .then(dog => res.json(dog))
  //   .catch(err => res.status(400).json(err))
  // })



    // const oldDog = Dog
    //   .findById(req.params.id)

    // oldDog.update({
    //     shelter_id: req.user.id,
    //     adoption_status: req.body.adoption_status,
    //     name: req.body.name,
    //     gender: req.body.gender,
    //     breed: req.body.breed,
    //     age: req.body.age,
    //     description: req.body.description,
    //     strengths: req.body.strengths,
    //   })
    //   oldDog.save()
    //   .then(dog => res.json(dog))
    //   .catch(err => res.status(400).json(err))


// Place.findOneAndUpdate({req.params.id}, req.body, function (err, place) {
//   res.send(place);
});





router.delete("/:id", passport.authenticate("jwt", {
      session: false
    }),
  (req, res) => {
    let id = parseInt(req.params.id) 

      // Dog.de(id: id)
      // .then(() => 'Dog has been removed')
      // .catch(err => res.status(400).json(err)

      Dog.findByIdAndRemove(req.params.id, req.body, function (err, data) {
        if (!err) {
          (res.json('Dog has been removed'))
        } else {
          res.status(400).json(err)
        }
      });
  })




      router.post('/',
        passport.authenticate("jwt", {
          session: false
        }),
        (req, res) => {
          const {
            isValid,
            errors
          } = validateDogInput(req.body);


          if (!isValid) {
            return res.status(400).json(errors)
          }
          const newDog = new Dog({
            shelter_id: req.user.id,
            name: req.body.name,
            gender: req.body.gender,
            breed: req.body.breed,
            age: req.body.age,
            description: req.body.description,
            strengths: req.body.strengths,
          });

          newDog.save()
            .then(dog => res.json(dog))
        })

      module.exports = router;