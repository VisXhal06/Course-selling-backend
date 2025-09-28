const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } =  require("../config");

function adminMidlleware(req, res, next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);
    if(decoded) {
        req.adminId = decoded.id;
        next();
    } else {
        res.status(403).json({
            message: "Admin not authenticated"
        })
    }
}

module.exports = {
    adminMidlleware: adminMidlleware
};