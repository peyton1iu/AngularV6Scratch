import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string
  age:number
  email:string
  address:Address
  hobbies: string[]
  posts: Post[]
  isEdit: boolean = false

  onClick(){
    this.name = "Wendy"
    this.hobbies.push("New Hobby")
  }

  addHobby(hobby){
    console.log(hobby)
    this.hobbies.unshift(hobby)
    return false
  }
  deleteHobby(hobby){
    for(let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1)
      }
    }
  }

  toggelEdit(){
    this.isEdit = !this.isEdit
  }

  constructor(private dataService: DataService) {
   }

  ngOnInit() {
    this.name = 'Peyton'
    this.age = 30
    this.email = 'peyton.liu@hotmail.com'
    this.address = {
      street: '50 Main St',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['coding', 'billiard', 'movie']
    
    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts.json())
      this.posts = posts.json();
    })
  }

}

interface Address{
  street:string
  city:string
  state:string
}

interface Post{
  id:number
  userId:number
  title:string
}