import { Component } from '@angular/core';
import { Api } from '../../services/api';
import { User, UserReponse } from '../../model/ususario';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [CommonModule, RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  lista: User[] = [];

  constructor(private apiService: Api) {
    this.apiService.getAllUsers().subscribe({
      next: (res: UserReponse) => {
        this.lista = res.users;
      },
      error: () => {},
    });
  }
}
