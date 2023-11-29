import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent  implements OnInit {

  constructor( private router: Router, private authService: AuthService, private route: ActivatedRoute) { }

  
  languageList$ = this.authService.getLanguageList();

  ngOnInit() {}

}
