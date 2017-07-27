import {Observable} from "rxjs";
import {Http} from "@angular/http";
import { MCCApiModel } from 'mcc-api/src/model/mcc-api-model';
import { MCCApiService } from 'mcc-api/src/services/mcc-api.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {IError, ILoading, IOptions} from "../api-interfaces";

export class APIRouteAccess extends MCCApiService
{
    private _errorSource = new BehaviorSubject<IError>({message: '', options: {}});
    private _loadingSource = new BehaviorSubject<ILoading>({dismiss: true});
    // Observable navItem stream
    errorItem$ = this._errorSource.asObservable();
    loading$ = this._loadingSource.asObservable();

    constructor(private http: Http, endpoint: string){
        super();
        this.endpoint = endpoint;
    }

    private error = (err, observer, opts) => {

        this._loadingSource.next({dismiss: true});
        observer.error();
        this._errorSource.next({message: err, options: opts});
    };

    login(opts?: IOptions): Observable<void> {
        this._loadingSource.next({options: opts});
        return new Observable<void>(observer => {
            this.post('/', {}).subscribe(
                (res: MCCApiModel) => {
                    this._loadingSource.next({dismiss: true});
                    observer.next();
                    observer.complete();
                },
                err => { this.error(err, observer, opts) }
            );
        });
    }
}
