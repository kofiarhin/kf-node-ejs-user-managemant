const {Router} = require("express")
const router = Router();
const {homeController,
    getRegisterController,
    getLoginController
} = require("../controllers/usercontroller")

router.get("/", homeController)
router.get("/register", getRegisterController)
router.get("/login", getLoginController)

module.exports = router;