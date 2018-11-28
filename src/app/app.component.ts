import {Component, OnInit} from '@angular/core';
import {StorageService} from './services/storage.service';
import {RoleService} from './services/role.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private storageService: StorageService,
              private roleService: RoleService) {
  }

  ngOnInit() {
    if (this.roleService.noRoleSet()) {
      if (this.storageService.currentUserId() != null) {
        const data = this.storageService.get('currentUser');
        this.roleService.setRole(data.role);
      }
    }
  }
}
