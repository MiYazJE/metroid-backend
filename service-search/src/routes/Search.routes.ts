import { Router } from 'express';
import { Controller } from '../controllers/Controller.Manage';
import { IControllManage } from '../libs/interfaces/IControllManage';

class SearchRoutes {
    public router: Router;
    private controller: Controller;

    constructor() {
        this.router = Router();
        this.controller = new Controller();
        this.routes();
    }

    private routes(): void {
        this.router.post('/film', this.controller.getRoute('searchFilm').action);
    }
}

const searchRoutes: SearchRoutes = new SearchRoutes();
export default searchRoutes.router;
