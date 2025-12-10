const Course = require('../models/Course');

class SiteController {
  //GET /home
  // index(req, res) {
  // res.render('home');
  // }
  async index(req, res, next) {
    try {
      const courses = await Course.find({}).lean();

      res.render('home', { courses });
    } catch (err) {
      // console.log(err);
      // res.status(500).send('ERROR!!!');
      next(err);
    }
  }

  //GET /search
  search(req, res) {
    res.render('search');
  }
  //GET /:slug
  show(req, res) {
    res.send('SITE DETAIL PAGE');
  }
}
module.exports = new SiteController();
