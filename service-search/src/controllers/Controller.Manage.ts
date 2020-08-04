import { searchFilmCtrl } from './Search.controller';

export class Controller {
    getRoute(type: string): any {
        if (type === 'searchFilm') {
            return searchFilmCtrl;
        }
    }
}