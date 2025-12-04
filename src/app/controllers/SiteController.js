
class SiteController {

    //GET /home
    index (req, res) {
        res.render('home')
    }

    //GET /search
    search (req, res) {
        res.render('search')
    }
    //GET /:slug
    show (req, res) {
        res.send('SITE DETAIL PAGE')
    }
    
}
module.exports = new SiteController()