import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'appwiki',
  templateUrl: './wiki.component.html'
})

/** wiki component*/
export class WikiComponent {
  /** wiki ctor */
  vInput: string;
  article: Array<any>;
  description: Array<any>;
  link: Array<any>;
 
  search(input: string) {
    this.vInput = input;
    this.http.get('https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=' + this.vInput).subscribe(data => {
      this.article = data[1];
      this.description = data[2];
      this.link = data[3];
    });
  }

  constructor(private http: HttpClient) { }

}
