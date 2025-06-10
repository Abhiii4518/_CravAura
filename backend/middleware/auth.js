import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.token;
        if (!token) {
            return res.status(401).json({ success: false, message: "Access denied, no token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {id:decoded.id};
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: "Invalid token" });
    }
};

export default authMiddleware;
