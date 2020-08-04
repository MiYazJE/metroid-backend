import { Request, Response } from 'express';
import { IControllManage } from '../libs/interfaces/IControllManage';
import { searchFilmValidation } from '../libs/Lib.validate';
import { IFilm } from '../model/Films.model';

type typeDataReq = {
    title: string,
};

type typeResponse = {
    error: boolean,
    msg: string,
    films: object,
};

class SearchFilmController implements IControllManage {

    async action(req: Request, res: Response): Promise<Response | any> {
        const { error } = searchFilmValidation(req.body);

        if (error) {
            const failureResponse: typeResponse = {
                error: true,
                msg: 'Los datos no son correctos.',
                films: []
            }
            return res.json(failureResponse);
        }

        const dataReq: typeDataReq = req.body;

        // Search query on database

        const response: typeResponse = {
            error: false,
            msg: 'okay', 
            films: ['Spiderman', 'Spiderman', 'Spiderman', 'Spiderman',]
        }
        
        res.status(200).json({ response });
    }
}

export const searchFilmCtrl: SearchFilmController = new SearchFilmController();
