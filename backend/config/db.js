//https://mongoosejs.com/
// npm i mongoose
import mongoose from 'mongoose';
const conectarDB = async() => {
    try {
        const db = await mongoose.connect(
            process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        const url = `${db.connection.host}:${db.connection.port}`;
        console.log(`mongoDB conectado en: ${url}`);
    } catch (error) {
        console.log(`mongoDB conectado en: ${error.message}`);
        process.exit(1);
    }
}
export default conectarDB;