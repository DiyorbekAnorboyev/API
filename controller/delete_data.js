const { Router } = require('express')
const Restaurants = require("../model/Restaurants");
const router = Router()

router.delete("/api/restaurant/:id", async(req, res) => {
    await Restaurants.findByIdAndDelete(req.params.id)
    res.send({msg: "Success deleted"})
  })

module.exports = router