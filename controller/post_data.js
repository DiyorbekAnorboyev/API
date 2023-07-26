const { Router } = require("express");
const Phone = require("../model/Phone");
const Users = require("../model/User");
const router = Router();
const jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {
  const {email, password} = req.body

  const newUser = await Users.create({
    email:email,
    password:password,
  });

  newUser.save();
  const token = jwt.sign({_id: newUser._id}, process.env.TOKEN)
  res.cookie('token', token)

  res.redirect('/api/phone/add')
})

router.post("/api/phone/add", (req, res) => {
  const newRestaurant = new Phone(req.body);

  newRestaurant.save();
  res.redirect('/api/phone');
});

module.exports = router;
