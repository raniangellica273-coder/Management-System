import multer, { diskStorage } from "multer"
import Employee from "../models/Employee"
import User from "../models/User"
import bcrypt from 'bcrypt'
import path from "path"


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})

const addEmployee = async (req, res) => {
    try {

    }
    const {
        name, 
        email,
        employeeId,
        dob,
        gender, 
        maritalStatus,
        designation,
        department,
        salary,
        password,
        role
    } = req.body;

    const user = await User.findOne({email})
    if(user) {
        return res.status(400).json({success: false, error: "user already registered in emp"});
    }
    const hashPassword = await bcrypt.hashPassword(password, 10)
    const newUser = new User ({
        name,
        email,
        password,
        role,
        profileImage: req.file ? req.file.filename : ""
    })
    const savedUser = await newUser.save()

    const newEmployee = new Employee({
        userId: savedUser._id,
        employeeId,
        dob,
        gender,
        maritalStatus,
        designation,
        department,
        salary
    })

    await newEmployee.save()
    return 

}


export {addEmployee, upload}