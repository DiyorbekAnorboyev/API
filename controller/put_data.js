const { Router } = require("express");
const Phone = require("../model/Phone");
const router = Router();

router.put("/api/phone/:id", async (req, res) => {
  const updateRestaurants = await Phone.findByIdAndUpdate(req.params.id, req.body);
  res.send({ msg: "Success Updated", updateRestaurants });
});

module.exports = router;
