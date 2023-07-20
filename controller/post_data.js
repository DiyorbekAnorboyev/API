const { Router } = require("express");
const Restaurants = require("../model/Restaurants");
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

  res.redirect('/api/restaurant/add')
})

router.post("/api/restaurant/add", (req, res) => {
  const {restaurant_name, restaurant_location, restaurant_phone, restaurant_time,} = req.body;
  const newRestaurant = new Restaurants({
    restaurant_name,
    restaurant_location,
    restaurant_phone,
    restaurant_time,
  });

  newRestaurant.save();
  res.redirect('/api/restaurant');
});

module.exports = router;
