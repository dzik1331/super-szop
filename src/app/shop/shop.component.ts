import { Component, OnInit } from '@angular/core';
import {RoleService} from '../services/role.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(public roleService: RoleService) { }

  ngOnInit() {
  }

}
