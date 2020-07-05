import { Component, OnInit } from '@angular/core';
import { TENANT_LIST } from './shared/constants/tenants.const';
import { Tenant } from './shared/models/tenant.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'multitenancy';

  tenantList = TENANT_LIST;

  private _selectedTenant: Tenant = this.tenantList[0];
  public get selectedTenant(): Tenant {
    return this._selectedTenant;
  }
  public set selectedTenant(value: Tenant) {
    this._selectedTenant = value;
    this.setSiteFavicon();
  }

  ngOnInit() {
    this.setSiteFavicon();
  }

  setSiteFavicon() {
    const faviconLink = document.getElementById(
      'site-favicon'
    ) as HTMLLinkElement;
    faviconLink.href = this.selectedTenant.iconUrl;
  }
}
