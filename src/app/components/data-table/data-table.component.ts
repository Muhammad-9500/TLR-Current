import { AfterViewInit, Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { data } from 'jquery';

export interface Column {
  key: string;
  header: string;
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, CommonModule, MatSortModule, MatPaginator],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit, AfterViewInit {
  @Input() columns: Column[] = [];
  @Input() dataSource = new MatTableDataSource<any>([]);
  @Output() close = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();
  @Output() refresh = new EventEmitter<any>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  selection = new SelectionModel<any>(true, []);
  displayedColumns: string[] = [];

  ngOnInit() {
    this.displayedColumns = this.columns.map(column => column.key).concat('actions');
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  toggleAllRows(event: { checked: any }) {
    if (event.checked) {
      this.selection.select(...this.dataSource.data);
    } else {
      this.selection.clear();
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleRow(row: any) {
    this.selection.toggle(row);
  }

  closeAction(element: any) {
    this.close.emit(element);
  }

  editAction(element: any) {
    this.edit.emit(element);
  }

  refreshAction(element: any) {
    this.refresh.emit(element);
  }
}
