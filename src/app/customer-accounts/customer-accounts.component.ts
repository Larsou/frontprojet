import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/customer.model';

@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrls: ['./customer-accounts.component.css']
})
export class CustomerAccountsComponent implements OnInit {
  customerId!: string;
  customer!: Customer;

  constructor(private route: ActivatedRoute, private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state) {
      this.customer = nav.extras.state as Customer;
    }
  }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['id'];
    if (!this.customer) {
      // Redirection en cas d'absence de données (ex : rafraîchissement)
      this.router.navigate(['/customers']);
    }
  }
}
