import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountsServiceService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  constructor() {}

  addAccount(name: string, status: string) {}
  updateStatus(id: number, status: string) {}
}
