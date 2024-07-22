import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { DataTableComponent } from '../data-table/data-table.component';
import { Transport } from '../../_interfaces/transport';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrl: './transport.component.css',
  standalone: true,
  imports:[PreloaderComponent,HeaderMenuComponent,SidebarComponent,FooterComponent, DataTableComponent]
})
export class TransportComponent {
  
  transportData: Transport[] = [
    {
      routeName: "Wales Road",
      vehicleNo: "MT988800",
      driverName: "Johnathan John",
      driverLicense: "DLNC025936",
      contactNumber: "+889562365846",
    },
    {
      routeName: "Wales Road",
      vehicleNo: "MT988800",
      driverName: "Johnathan John",
      driverLicense: "DLNC025936",
      contactNumber: "+889562365846",
    },
    {
      routeName: "Wales Road",
      vehicleNo: "MT988800",
      driverName: "Johnathan John",
      driverLicense: "DLNC025936",
      contactNumber: "+889562365846",
    },
    {
      routeName: "Wales Road",
      vehicleNo: "MT988800",
      driverName: "Johnathan John",
      driverLicense: "DLNC025936",
      contactNumber: "+889562365846",
    },
    {
      routeName: "Wales Road",
      vehicleNo: "MT988800",
      driverName: "Johnathan John",
      driverLicense: "DLNC025936",
      contactNumber: "+889562365846",
    },
    {
      routeName: "Wales Road",
      vehicleNo: "MT988800",
      driverName: "Johnathan John",
      driverLicense: "DLNC025936",
      contactNumber: "+889562365846",
    },
    {
      routeName: "Wales Road",
      vehicleNo: "MT988800",
      driverName: "Johnathan John",
      driverLicense: "DLNC025936",
      contactNumber: "+889562365846",
    },
    {
      routeName: "Wales Road",
      vehicleNo: "MT988800",
      driverName: "Johnathan John",
      driverLicense: "DLNC025936",
      contactNumber: "+889562365846",
    },
    {
      routeName: "Wales Road",
      vehicleNo: "MT988800",
      driverName: "Johnathan John",
      driverLicense: "DLNC025936",
      contactNumber: "+889562365846",
    },
    {
      routeName: "Wales Road",
      vehicleNo: "MT988800",
      driverName: "Johnathan John",
      driverLicense: "DLNC025936",
      contactNumber: "+889562365846",
    },
  ];

  columnList = [
    { key: 'select', header: '' },
    { key: 'routeName', header: 'Route Name' },
    { key: 'vehicleNo', header: 'Vehicle No' },
    { key: 'driverName', header: 'Driver Name' },
    { key: 'driverLicense', header: 'Driver License' },
    { key: 'contactNumber', header: 'Contact Number' }
  ];
  
  data = new MatTableDataSource<Transport>(this.transportData);

  ngOnInit() {}

  onClose(event: any) {
    // handle close action
  }

  onEdit(event: any) {
    // handle edit action
  }

  onRefresh(event: any) {
    // handle refresh action
  }

  

}
