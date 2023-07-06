import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from '../Services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [ PostService ]
})
export class PostComponent implements OnInit {

  // title: string = 'List of Posts';
  // messagePost: string = 'Message Post';

  // parentPost: string = 'Post from parent';

  // childMessage: string = 'From Child Component';

  // outputChildMessage: string = 'Message from Child Component Via Output';

  // @Input() fromParent!:string;

  // @Output() messageEvent = new EventEmitter<string>();

  posts: Array<any>;

  constructor( private postService: PostService ) { 

    // let postService = new PostService();
    this.posts = postService.postList;
  }
    
  ngOnInit(): void {   
  }

  addNewData(){
    let newPost: Post = {
      id: 7, 
      postTitle: "Post 7"
    }

    this.postService.addPost( newPost );
  }

  // sendMessage() {
  //   this.messageEvent.emit(this.outputChildMessage);
  // }
}
