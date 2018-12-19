import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.scss']
})
export class AdminMainPageComponent implements OnInit {

  constructor(private storageService: StorageService,
              private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.storageService.clear();
    this.router.navigate(['/login']);
  }

}
