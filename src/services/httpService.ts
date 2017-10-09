import {Http, Headers, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";
import "rxjs/add/operator/toPromise";
import "rxjs/Rx";
import {Observable} from "rxjs";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/throw";

@Injectable()
export class HttpService {
    constructor(private http: Http) {
    }


    //post请求
    post(url: string, body: any): Observable<any> {
        return this.http.post(url, this.toQueryString(body), {
            headers: new Headers({
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            })
        })
            .map(res => res.json());
    }


    //参数序列化  
    private toQueryString(obj) {  
        let result = [];  
        for (let key in obj) {  
            key = encodeURIComponent(key);  
            let values = obj[key];  
            if (values && values.constructor == Array) {  
                let queryValues = [];  
                for (let i = 0, len = values.length, value; i < len; i++) {  
                    value = values[i];  
                    queryValues.push(this.toQueryPair(key, value));  
                }  
                result = result.concat(queryValues);  
            } else {  
                result.push(this.toQueryPair(key, values));  
            }  
        }  
        return result.join('&');  
    }  
    private toQueryPair(key, value) {  
        if (typeof value == 'undefined') {  
            return key;  
        }  
        return key + '=' + encodeURIComponent(value === null ? '' : String(value));  
    }  

}
