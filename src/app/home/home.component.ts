import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public imageURL: string = 'assets/Images/Dog.jpg';
public myName: string ='';
  constructor() { }

  ngOnInit() {
  }
ShowMsg(){
  alert('Clicked!!');
}
}
