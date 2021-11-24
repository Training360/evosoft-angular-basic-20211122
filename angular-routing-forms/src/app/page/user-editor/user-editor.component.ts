import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {

  cols: ITableColumn[] = this.config.userColumns;

  user$: Observable<User> = this.activatedRoute.params.pipe(
    switchMap( params => this.userService.get(params['id']))
  );

  constructor(
    private config: ConfigService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(user: User): void {
    this.userService.update(user).subscribe(
      () => this.router.navigate(['/', 'users']),
    );
  }

}
