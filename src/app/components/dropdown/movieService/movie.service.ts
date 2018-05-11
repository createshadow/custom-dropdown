import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {
    constructor(private _http: HttpClient) { }

    public getMovies(): Promise<any> {
        const url = 'https://api.themoviedb.org/3/movie/popular?api_key=a4991e824c745145bbc879e10d093e94&language=en-US&page=1';

        return this._http.get(url).toPromise();
     }
 }
