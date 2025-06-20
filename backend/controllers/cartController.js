import userModel from "../models/userModel.js"

// Add items to user cart
const addToCart = async (req, res) => {
    try {
        const userData = await userModel.findById(req.userId);

        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {}; // If undefined/null, initialize as empty object

        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }

        await userModel.findByIdAndUpdate(req.userId, { cartData });

        res.json({ success: true, message: "Added To Cart" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};


// Remove items from user cart
const removeFromCart = async (req,res) =>{
    try {
        let userData = await userModel.findById(req.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.userId,{cartData})
        res.json({success:true, message:"Removed From Cart"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

// Fetch user cart data

// const getCart = async (req,res) =>{
//     try {
//         let userData = await userModel.findById(req.userId);
//         let cartData = await userData.cartData;    
//         res.json({success:true,cartData})
//     } catch (error) {
//         console.log(error)
//         res.json({success:false, message:"Error"})
//     }

// }

const getCart = async (req, res) => {
    try {
        // Get userId from req.userId set by authMiddleware
        const userId = req.userId;

        const userData = await userModel.findById(userId);

        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const cartData = userData.cartData;
        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export {addToCart, removeFromCart, getCart}