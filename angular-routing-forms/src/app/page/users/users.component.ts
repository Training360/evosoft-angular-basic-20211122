import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/model/user';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  columns: ITableColumn[] = this.config.userColumns.filter( c => !c.hidden );

  userList$: BehaviorSubject<User[]> = this.userService.list$;

  constructor(
    private config: ConfigService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getAll();
  }

  onDelete(user: User): void {
    if (!confirm('Are you sure?')) {
      return;
    }

    this.userService.remove(user.id);
  }

}
