const { Router } = require("express");
const Restaurants = require("../model/Restaurants");
const router = Router();

router.put("/api/restaurant/:id", async (req, res) => {
  const {restaurant_name, restaurant_location, restaurant_phone, restaurant_time,} = req.body;
  const updateRestaurants = await Restaurants.findByIdAndUpdate(req.params.id, {
    restaurant_name,
    restaurant_location,
    restaurant_phone,
    restaurant_time,
  });
  res.send({ msg: "Success Updated", updateRestaurants });
});

module.exports = router;
