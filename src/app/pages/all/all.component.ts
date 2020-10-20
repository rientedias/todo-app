import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  public todos: any[] = null;
  constructor(
    private service: DataService,
    private afAuth: AngularFireAuth,

  ) { }

  ngOnInit(): void {
    this.afAuth.idToken.subscribe(token => {

      this.service.getAllTodos(token)
        .subscribe((data: any) => {
          this.todos = data;
        });

    });
  }

}
