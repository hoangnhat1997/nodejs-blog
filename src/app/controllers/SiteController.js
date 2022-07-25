class SiteController {
  // [GET] /
  index(req, res) {
    res.render("home");
  }
  // [POST] /login
  login(req, res) {
    res.render("login");
  }
  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
