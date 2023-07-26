const { Router } = require('express')
const Phone = require("../model/Phone");
const router = Router()

router.delete("/api/restaurant/:id", async(req, res) => {
    await Phone.findByIdAndDelete(req.params.id)
    res.send({msg: "Success deleted"})
  })

module.exports = router