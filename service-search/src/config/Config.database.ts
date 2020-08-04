import mongoose from 'mongoose';

const DB_PROPERTIES = {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

export class Database {
    private host: string;
    private database: string;
    private port: string;

    constructor() {
        this.host = process.env.DATABASE_HOST || 'localhost';
        this.database = process.env.DATABASE_NAME || 'test';
        this.port = process.env.DATABASE_PORT || '27017';
    }

    public async connect(): Promise<any> {
        try {
            const connection = await mongoose.connect(
                `mongodb://${this.host}:${this.port}/${this.database}`,
                DB_PROPERTIES
            );
            console.log('DB connected!');
        } 
        catch (e) {
            console.error(e);
        }
    }
}
