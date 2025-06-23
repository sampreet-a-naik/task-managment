import { Component } from '@angular/core';
import {Header} from './header/header'
import {User} from './user/user';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header,User],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {}
