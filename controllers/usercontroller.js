const homeController = (req, res) => {
    res.render("index")
}

const getRegisterController = (req, res) => {
    res.render("register")
}

const getLoginController = (req, res) => {
    res.render("login")
}

module.exports = {
    homeController,
    getRegisterController,
    getLoginController
}