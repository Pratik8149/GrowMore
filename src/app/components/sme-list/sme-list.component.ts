import { AfterViewInit, Component, ViewChild,  OnInit, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Sme } from '../../model/smelistModel';
import { GrowmoreApiService } from '../../services/growmore-api.service';


export interface SmeList {
  name: string;
  sector: string;
  profit: string;
}

@Component({
  selector: 'app-sme-list',
  templateUrl: './sme-list.component.html',
  styleUrls: ['./sme-list.component.css']
})

export class SmeListComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['name', 'sector', 'profit'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public sme: Sme;

  //smelist = [];
  smelist: MatTableDataSource<SmeList>

  constructor(private router: Router,
    private growmoreApi: GrowmoreApiService) {
    // Assign data to source from DB
    this.sme = new Sme();
  }


  ngOnInit() {
    this.growmoreApi.getAllSMEs().toPromise().then(res => {
      this.smelist = res.smes;
      //this.dataSource = this.smelist;
    });
  }

  ngAfterViewInit() {
    this.smelist.paginator = this.paginator;
    this.smelist.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.smelist.filter = filterValue.trim().toLowerCase();

    if (this.smelist.paginator) {
      this.smelist.paginator.firstPage();
    }
  }
  /**
   *Detail information about the SME
   * */
  SMEinformation(name) {
    this.router.navigate(['/smeinfo', { NAME: name}]); 
  }
}
