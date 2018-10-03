import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HttpApi';

  apiRoot: string = "http://httpbin.org";

  constructor(private http: Http) { }

  doGET() {
    console.log("GET");
  }

  doPOST() {
    console.log("POST");
  }

  doPUT() {
    console.log("PUT");
  }

  doDELETE() {
    console.log("DELETE");
  }

  doGETAsPromise() {
    console.log("GET AS PROMISE");
  }

  doGETAsPromiseError() {
    console.log("GET AS PROMISE ERROR");
  }

  doGETAsObservableError() {
    console.log("GET AS OBSERVABLE ERROR");
  }

  doGETWithHeaders() {
    console.log("GET WITH HEADERS");
  }
}
