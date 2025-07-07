import { Component, Inject, inject, OnInit } from '@angular/core';
import { LogMessage1Service } from '../dependencies/log-message1.service';
import { AdminDataService } from '../dependencies/admin-data.service';
import { ADMIN_DATA } from '../ADMIN_DATA/admin-data';
import { AlertMessage1Service } from '../dependencies/alert-message1.service';
import { AlertMessage2Service } from '../dependencies/alert-message2.service';

@Component({
  selector: 'app-tokens',
  imports: [],
  templateUrl: './tokens.component.html',
  styleUrl: './tokens.component.css',
  // providers: [{ provide: LogMessage1Service, useClass: LogMessage1Service }],
  providers: [
    { provide: 'LOG_MSG1', useClass: LogMessage1Service },
    { provide: 'STR_MSG', useValue: 'This is a string' },
    { provide: ADMIN_DATA, useValue: ADMIN_DATA },
    AdminDataService,
    AlertMessage1Service,
    { provide: AlertMessage2Service, useExisting: AlertMessage1Service },
  ],
})
export class TokensComponent implements OnInit {
  // public logger = inject(LogMessage1Service);

  constructor(
    @Inject('LOG_MSG1') private logger: LogMessage1Service,
    @Inject('STR_MSG') public msg: string,
    public getAdmin: AdminDataService,
    private alertMsg: AlertMessage1Service
  ) {}

  ngOnInit(): void {
    this.logger.log();
  }

  showAlert() {
    this.alertMsg.showAlert();
  }
}
