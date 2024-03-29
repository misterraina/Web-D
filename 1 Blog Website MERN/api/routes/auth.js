import express from 'express';
import User from "../models/User.js";
import bcrypt from 'bcrypt';

const router = express.Router();


//Router
router.post("/register", async(req, res) => {
    try{

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
        console.log(err);
    }
})

//LOGIN
router.post("/login", async (req, res)=>{
    try{
        const user = await User.findOne({username: req.body.username})
        !user && res.status(400).json("Wrong Credentials!")

        const validated = await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(400).json("Wrong Credentials!")

        const {password, ...others} = user._doc;
        res.status(200).json(others);
    }
    catch(err){
        res.status(500);
    }
});

export default router