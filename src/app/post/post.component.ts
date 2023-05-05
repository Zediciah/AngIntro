import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  title: string = "List of Posts"
  messagePost: string = "Message Post"

  parentPost: string = 'Post from parent'

  @Input() fromParent!:string;

  constructor() { }
    
  ngOnInit(): void {   
  }
}
