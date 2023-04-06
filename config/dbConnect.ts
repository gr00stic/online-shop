import mongoose from 'mongoose';

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_CONNECT!, {ignoreUndefined: true});
        console.log('db connected: ', connect.connection.host, connect.connection.name);
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}

export default dbConnect;