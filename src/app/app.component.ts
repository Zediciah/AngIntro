import { Component } from '@angular/core';
//import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title: string = "Angular Course";
  count: number = 285645;
  dcValue: number = 3.85764;

  price: number = 99.99;

  today: Date = new Date();

  postObj : object = {
    id: 1,
    postTitle: "Post 1"
  };

  postArray: Array<string> = [
    "post 1",
    "post 2",
    "post 3",
    "post 4",
    "post 5",
    "post 6"
  ]

  userdetails = {
    name: "User 1",
    city: "New York",
    countryCode: "USA"
  }

  dummyText: string = "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? "

  constructor(){

}

}
// export class AppComponent {
//   name: string;
//   email: string;
//   address: string;

//   userArray: Array<any> = [];

//   constructor(){
//     this.name = "";
//     this.email = "";
//     this.address = "";
//   }

//   onClick(){
//     this.userArray.push({
//       "name" : this.name,
//       "email" : this.email,
//       "address" : this.address
//     });

//     console.log(this.userArray);
//   }

//   onDelete(index:any){
//     this.userArray.splice(index, 1);
//   }