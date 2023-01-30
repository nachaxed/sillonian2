import mongoose from 'mongoose';

//creamos tabla de usuarios
const UserSchema = new mongoose.Schema({

    username: {type: String, required: true}, // solo para el usuario
    email: {type: String, required: true},
    password: {type: String, required: true},
    provincia: {type: String, required: true},
    dirección: {type: String, required: true},
    telefono: {type: String, required: true},
    isAdmin: {type: Boolean, required: true, default: false}

},{
    timestamps: true 
});

const User = mongoose.model('User', UserSchema);
export default User;