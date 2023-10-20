import { compare } from "../../helpers/Bycrypt.js"; // Asegúrate de que la ruta y el nombre del archivo sean correctos
import { pool } from "../../db.js";
import { SECRET } from "../../config.js";
import jwt from "jsonwebtoken";
//login 
export const getLogin = async (req, res) => {
    try {
        const {correo} = req.body
        const [row] = await pool.query('SELECT nombreUsuario, correo, contraseña FROM registro WHERE correo = ?',[correo])
        res.json(row);
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Algo anda mal" });
    }
    
}

export const Login = async(req,res) =>{
    try {
        const {correo,contraseña} = req.body;     
        const [rows] = await pool.query('SELECT * FROM registro where correo = ?',[correo]);
        const contraseñaEncrypt = rows[0].contraseña
        const verify = await compare(contraseña,contraseñaEncrypt)
        if(!verify){
            return res.status(404).json({message: "contraseña invalida"})
        }
        const accessToken = jwt.sign(
            { idRegistro: rows[0].idRegistro, username: rows[0].nombreUsuario, email: rows[0].correo, password: rows[0].contraseña, nombreEmpresa: rows[0].nombreEmpresa, date: rows[0].fecha_ingreso},
            SECRET,
            {
            expiresIn: "7d",
            }
        );
        res.json(accessToken)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Algo va mal'})
    }
}