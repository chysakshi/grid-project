import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grid_project';
  title1 = 'customer table';
  header=["name","id","age","salary"];
  rows = [
    {
      "name":"rahul",
      "id":"1",
      "age":"20",
      "salary": "20000"
    },
    {
      "name":"rubi",
      "id":"2",
      "age":"21",
      "salary": "30000"
    },
    {
      "name":"ruhi",
      "id":"3",
      "age":"22",
      "salary": "40000"
    },
    {
      "name":"rakesh",
      "id":"8",
      "age":30,
      "salary": 50000
    },
    {
      "name":"rani",
      "id":"6",
      "age":"33",
      "salary": "80000"
    }


  ]
  name = 'Angular 5';
  users = [];
  editedIndex: any;

  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  GetData() {
    console.log('data lane ja rhe hain');
    this.http.get<any[]>(this.apiUrl).subscribe((hululu) => {
      console.log('ab data aaya');
      this.users = hululu;
    });
    console.log('subscibe ke bad wala line');
  }
  deletRow(id) {
    console.log(id);
    console.log(this.users);
  }
  EditRow(id) {
    this.editedIndex = id;
  }
  ClearData() {
    this.users = [];
  }

  constructor(private http: HttpClient) {}
  ngOnInit() {}
}


