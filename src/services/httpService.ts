import { ToastController } from 'ionic-angular';
import {Http, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import "rxjs/add/operator/toPromise";
import "rxjs/Rx";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/throw";
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class HttpService {
    DOMAIN:string='http://kidapi.kayou110.com/public/?_url=';       //api连接前缀

    constructor(private http: Http,private toastCtrl: ToastController) {
    }

    
    request(method: string,data: any,success: (res:Object)=>void) {
        data.hmac = this.md5sign(data);
        console.log(data);
        return this.http.post(this.DOMAIN+method, this.toQueryString(data), {
            headers: new Headers({
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            })
        })
        .map(res => res.json())
        .subscribe(res => {
            success(res);
        }, 
        error => {
            const toast = this.toastCtrl.create({
                message: "请求失败："+error,
                duration: 2000,
                position: 'top'
              });
            toast.present();
            console.log("请求失败："+error);
        });
    }

    private md5sign(parm:Object) {
        var signstr = "";
        for(var p in parm) {
            signstr += "+" + parm[p];
        }
        signstr = signstr.replace("+", "");
        //log(signstr);
        var md5str = Md5.hashStr(signstr);
        return md5str;
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
