import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';

import SearchRoutes from './routes/Search.routes';

export class Server {
    private app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.middlewares();
        this.routes();
    }

    private config(): void {
        this.app.set('PORT', process.env.PORT || 3000);
    }

    private middlewares(): void {
        this.app.use(helmet());
        this.app.use(express.json());
        this.app.use(morgan('dev'));
        this.app.use(compression());
        this.app.use(cors());
    }

    private routes(): void {
        this.app.use('/api/v1/search', SearchRoutes);
    }
    
    public start(): void {
        const PORT = this.app.get('PORT');
        this.app.listen(PORT, () => {
            console.log(`Search service on port ${PORT}`);
        });
    }

}
