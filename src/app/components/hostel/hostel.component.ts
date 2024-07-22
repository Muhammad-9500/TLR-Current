import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { DataTableComponent } from '../data-table/data-table.component';
import { Hostel } from '../../_interfaces/hostel';
import { MatTableDataSource } from '@angular/material/table';
import { SelectDropDownComponent } from '../select-drop-down/select-drop-down.component';

@Component({
  selector: 'app-hostel',
  templateUrl: './hostel.component.html',
  styleUrl: './hostel.component.css',
  standalone: true,
  imports:[PreloaderComponent,HeaderMenuComponent,SidebarComponent,FooterComponent, DataTableComponent, SelectDropDownComponent]
})
export class HostelComponent {


  hostelData: Hostel[] = [
    {
      hostelName: 'ABC Hostel',
      roomNo: '101',
      roomType: 'Single',
      noOfBed: 1,
      costPerBed: 5000
    },
    {
      hostelName: 'XYZ Hostel',
      roomNo: '201',
      roomType: 'Double',
      noOfBed: 2,
      costPerBed: 4000
    },
    {
      hostelName: 'PQR Hostel',
      roomNo: '301',
      roomType: 'Triple',
      noOfBed: 3,
      costPerBed: 3500
    }
  ];

  columnList  = [
    { key: 'hostelName', header: 'Hostel Name' },
    { key: 'roomNo', header: 'Room No' },
    { key: 'roomType', header: 'Room Type' },
    { key: 'noOfBed', header: 'No Of Bed' },
    { key: 'costPerBed', header: 'Cost Per Bed' }
  ];

  data = new MatTableDataSource<Hostel>(this.hostelData);

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

  roomType = [
    { value: 'Big' },
    { value: 'Medium' },
    { value: 'Small' }
  ];

  noOfBeds = [
    { value: '02' },
    { value: '03' },
    { value: '04' },
    { value: '05' }
  ];

  selectedOptions: string[]=[];
  selectedOption: string='';

  handleAllSelectionChange(value: string) {
    this.selectedOptions.forEach(elem =>{
      if(elem === value)
        return;
    });
    this.selectedOptions.push(value);

    console.log('Selected value:', this.selectedOptions);
  }

}
