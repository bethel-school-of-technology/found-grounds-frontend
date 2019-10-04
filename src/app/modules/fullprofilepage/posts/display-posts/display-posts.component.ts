import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../../../shared/models/post';
import { } from 'rxjs';

@Component({ 
  selector: 'app-display-posts',
  templateUrl: './display-posts.component.html',
  styleUrls: ['./display-posts.component.css']
})

export class DisplayPostsComponent implements OnInit {
  @Input() userId: number;
  private postsRoute = 'http://localhost:3000/posts';
  accountsRoute = 'http://localhost:3000/accounts';
  public posts: Post[];
  accounts: Account[];
  postObj = {};
  id: number;

  constructor(private http: HttpClient) { }
  getPosts(){
    this.http.get<Post[]>(this.postsRoute).subscribe(posts => {
      this.posts = posts;
      console.log('Posts', this.posts)
    });
  }
  
  show = false;

 showComments(id){
   console.log(id);
   document.getElementById(id).style.display = 'block';
 }
  // commentPost(postData){
  //   this.postObj = {
  //     "id": postData.id,
  //   };
  //   const url = `${"http://localhost:3000/posts"}/${this.id}`;
  //   this.http.put(url, this.taskObj,)
  // }
  ngOnInit() {
    this.getPosts();
    
  };
}

// // 
// import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
// import { Task } from '../../shared/models/task'
// import {ActivatedRoute} from '@angular/router'
// import {Router} from '@angular/router'
// import { } from 'rxjs';

// @Component({
//   selector: 'app-update-task',
//   templateUrl: './update-task.component.html',
//   styleUrls: ['./update-task.component.css']
// })
// export class UpdateTaskComponent implements OnInit {
//   id: number;
//   data: object = {};
//   tasks = [];
//   taskObj = {}
//   private headers = new Headers({ 'Content-Type': 'application/json'})
//   private tasksRoute = "http://localhost:3000/tasks";

//   constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

//   updateTask(taskData){
//     this.taskObj = {
//       "id": taskData.id,
//       "title": taskData.title,
//       "description": taskData.description,
//       "timeToComplete": taskData.timeToComplete,
//       "necessaryItems": taskData.necessaryItems,
//     };
//     const url = `${"http://localhost:3000/tasks"}/${this.id}`;
//     this.http.put(url, this.taskObj,)
//     .toPromise()
//     .then(()=>{ this.router.navigate([`/${this.id}`])});
//   }

//   ngOnInit() {
//     this.route.params.subscribe(params => {
//       this.id = +params['id'];
//     });
//     this.http.get<Task[]>(this.tasksRoute).subscribe(tasks => { 
//       this.tasks = tasks;
//       for(var i = 0; i < this.tasks.length ; i++){
//         if( parseInt( this.tasks[i].id ) === this.id) {
//           this.data = this.tasks[i];
//           break;
//         }
//       }
//   });
//   }

// }
