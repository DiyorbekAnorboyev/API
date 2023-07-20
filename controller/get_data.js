const { Router } = require("express");
const Restaurants = require("../model/Restaurants");
const fs = require("fs");
const router = Router();

router.get("/", (req, res) => {
  fs.readFile("./view/register.html", (err, content) => {
    if (err) throw console.log(err.message);
    res.end(content);
  });                
});

router.get("/api/restaurant", async (req, res) => {
  const data = await Restaurants.find();
  res.send(data.reverse());
});

router.get("/api/restaurant/add", (req, res) => {
  if(!req.cookies.token) {
    res.redirect('/')
    return
  }
  fs.readFile("./view/add.html", (err, content) => {
    if (err) throw console.log(err.message);
    res.end(content);
  });
});
   
router.get('/logout', (req, res) => {
  res.clearCookie('token')
  res.redirect("/")
})

module.exports = router;
