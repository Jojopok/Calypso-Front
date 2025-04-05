import { Component, OnInit } from '@angular/core';
import { IconCardComponent } from '../../molecules/icon-card/icon-card.component';

import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-icon-grid',
  standalone: true,
  imports: [IconCardComponent],
  templateUrl: './icon-grid.component.html',
  styleUrl: './icon-grid.component.scss'
})
export class IconGridComponent implements OnInit {

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    const isAdmin = this.userService.getUser()().roles.includes('ADMIN');
  }
}
