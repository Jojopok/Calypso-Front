import { Component } from '@angular/core';
import { AdminIconGridComponent } from '../../organisms/admin-icon-grid/admin-icon-grid.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [AdminIconGridComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
