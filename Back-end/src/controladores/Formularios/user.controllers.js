import { pool } from "../../db.js";
import { encryptPassword } from "../../helpers/Bycrypt.js";
import jwt from "jsonwebtoken";
import { Secret } from "../../db.js";
import crypto from 'crypto'
import nodemailer from 'nodemailer'
import{PASS, SERVICE, USER} from '../../config.js'


export const getUsers = async(req,res) =>{
    try {
        const{correo}=req.body
        const email = 'SELECT correo FROM registro WHERE correo = ?'
        const guardar = [correo]
        const [enviar] = await pool.query(email,guardar)
        if(enviar.length > 0 ){
            return res.send('correo encontrado')
        }
        res.json(rows)

    } catch (error) {     
        return res.status(500).json({message: 'Algo va mal'})
    }
}
export const getUsersid = async(req,res)=>{
    try {
        const id= req.params;
        const [rows] = await pool.query('SELECT * FROM registro WHERE id_registro=?',[id]);
    }catch{
        return res.status(401).json({message:'No se encuentra el usuario'});
    }
}


export const createUsers = async (req, res) => {
    try {
        
        const { nombreUsuario, nombreEmpresa, correo, contraseña } = req.body;
        const existe = 'SELECT correo FROM registro where correo = ? '
        const evaluar = [correo];
        const [resultado] = await pool.query(existe, evaluar);
        const encrypt = await encryptPassword(contraseña)
        if (resultado.length > 0) {
            return res.json({ error: "correo_existe" });
        }

        const [rows] = await pool.query(
            'INSERT INTO registro (nombreUsuario, nombreEmpresa, correo, contraseña) VALUES (?,?,?,?)',
            [nombreUsuario, nombreEmpresa, correo, encrypt]
        );

        return res.json({
            id: rows.insertId,
            nombreUsuario,
            nombreEmpresa,
            correo,
            contraseña,
            mensaje: "registro_exitoso"
        });
    } catch (error) {
        console.error(error); // Puedes agregar un registro del error para debug
        return res.status(500).json({ message: 'Algo va mal' });
}
}


export const recuperar = async (req, res) => {
    try {
        const { correo } = req.body;
        const existe = 'SELECT correo FROM registro WHERE correo = ?';
        const evaluar = [correo];
        const [resultado] = await pool.query(existe, evaluar);

        if (resultado.length > 0) {
            const linkAleatorio = generateRandomLink();
            const contraseñaExpirada = new Date(Date.now() + 3600000);

            await pool.query('INSERT INTO reset_tokens (correo, contraseñaExpirada) VALUES (?, ?)', [
                correo,
                contraseñaExpirada,
            ]);

            const transporter = nodemailer.createTransport({
                service: SERVICE,
                auth: {
                    user: USER,
                    pass: PASS,
                },
            });

            const mailOptions = {
                from: 'vyhoncrm@outlook.com',
                to: correo,
                subject: 'Restablecimiento de contraseña',
                text: `Haga clic en el siguiente enlace para restablecer su contraseña: ${linkAleatorio}`,
                
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error(error);
                    return res.status(500).json({
                        message: 'No se pudo enviar el correo',
                    });
                } else {
                    console.log('Correo enviado: ' + info.response);
                    return res.json({ message: 'correo_existe' });
                }
            });
        } else {
            return res.json({ message: 'correo_no_existe' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error interno' });
    }
};

function generateRandomLink() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const linkLength = 32;
    let link = '';
    for (let i = 0; i < linkLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        link += characters.charAt(randomIndex);
    }
    const sitioUrl = 'http://localhost:3000/restablecer';
    return sitioUrl ;
}


export const actualizarContraseña = async (req, res) => {
    try{
        const {email} = req.params;
        const {contraseña} = req.body;
        const encrypt = await encryptPassword(contraseña)
        const existeUsuario = 'SELECT * FROM registro WHERE correo = ?'
        const [usuario] = await pool.query(existeUsuario, [email]);
        if (usuario.length === 0){
            return res.status(404).json({message: 'el usuario no existe'})
        }
        const {actualizarContraseña} = await pool.query( 'UPDATE registro SET contraseña = ? WHERE correo = ?',[encrypt, email])
        return res.status(200).json({message: 'contraseña actualizada con exito'})
    }catch (error){
        console.error(error);
        return res.status(500).json({message: 'error al actualizar la contraseña'})
    }
}

export const updateUsers = async (req, res) => {
    const { idRegistro } = req.params;
    try {
        const { nombreUsuario } = req.body;
        // const encrypt = await encryptPassword(contraseña)
        const [rows]  = await pool.query(
            'UPDATE registro SET nombreUsuario = COALESCE(?, nombreUsuario) WHERE idRegistro = ?',
        [nombreUsuario, idRegistro]
        );
        // const contraseñaEncrypt = rows[0].contraseña
        // const verify = await comparePassword(contraseña, contraseñaEnBaseDeDatos);
        console.log(encrypt,"❤️❤️❤️");
        
        if(!verify){
            return res.status(404).json({message: "contraseña invalida"})
        }
        res.json({
                id:rows.idRegistro,
                nombreUsuario,
            })

    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al actualizar usuario' });
    }
    };

    export const deleteUsers = async (req, res) => {
    try {
    } catch (error) {
        return res.status(404).json({
        message: "Register in database was not delete",
        });
    }
    };


