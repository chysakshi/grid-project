import { Component } from '@angular/core';

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
}

