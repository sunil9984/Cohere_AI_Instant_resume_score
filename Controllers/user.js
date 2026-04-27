const UserModel = require('../Models/user');



exports.register = async (req,res)=>{
    try{
        const {name,email,photoUrl} = req.body;
        const userExist = await UserModel.findOne({email:email});
        if(!userExist){
            let newUser = new UserModel({name,email,photoUrl});
            await newUser.save();
            return res.status(200).json({
                message: "User Registered Successfully",
                user: newUser
            })
        }
        return res.status(200).json({
            message: "Welcome back",
            user: userExist
        })
        


    }catch(err){
        console.log(err);
        res.status(500).json({error: 'server error',message: err.message});
    }
}