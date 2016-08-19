import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Sample } from '@app/shared/models';
import 'rxjs/add/operator/toPromise';

const ARTICLES_URL = 'api/v1/a';
const ARTICLE_URL = 'api/v1/a/';

@Injectable()
export class SampleService {
  constructor(
    private http: Http
  ) {
  }

  getSampleList(): Promise<Sample[]> {
    return [
      { 'id': 1, 'name': 'A' },
      { 'id': 2, 'name': 'B' },
      { 'id': 3, 'name': 'C' }
    ];
  }

  getSampleById(id: number): Promise<Sample> {
    this.getSampleList().filter(s => s.id == id)[0];
  }
}
