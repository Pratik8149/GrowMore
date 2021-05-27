import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { INFO } from '../../model/smeinfoModel';
import { GrowmoreApiService } from '../../services/growmore-api.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../model/userModel';

@Component({
  selector: 'app-sme-info',
  templateUrl: './sme-info.component.html',
  styleUrls: ['./sme-info.component.css']
})
export class SMEInfoComponent implements OnInit {
  url: string;
  name: string;
  public smeinfo: INFO;
  public safeToProceed: boolean;
  public info: User;

  constructor(private router: Router,
    private growmoreapi: GrowmoreApiService,
    private toastr: ToastrService, private route: ActivatedRoute) {

    this.name = this.route.snapshot.paramMap.get('NAME');
  }

  ngOnInit(): void {
    this.growmoreapi.getInfoByName(this.name).toPromise().then(res => {
      this.smeinfo = res.smeinfo;
    })
  }
  /***
   * Validate all form fields
   * */
  validateFields() {

    if (this.safeToProceed === true) {
      this.growmoreapi.createUser(this.info).toPromise().then(user => {
        if (user) {
          this.router.navigate(['/smeinfo']);
        }

      });
      this.toastr.success('All good!! Please proceed...', 'Success');
    }
  }
 
/**
 * 
 * @param id
 */
  sectViz() {
    if (this.smeinfo.sector == "Retail") {
      this.url = 'https://public.tableau.com/views/P19_RetailSect/Profit2019-RetailSector?:language=en&:display_count=y&publish=yes&:origin=viz_share_link';
    }

    if (this.smeinfo.sector == "Health and wellbeing") {
      this.url = 'https://public.tableau.com/views/P19_HWSect/Profit2019-HealthandWellbeingSector?:language=en&:display_count=y&publish=yes&:origin=viz_share_link';
    }

    if (this.smeinfo.sector == "Travel and Tourism") {
      this.url = 'https://public.tableau.com/views/P19_TourSect/Profit2019-TravelandTourismSector?:language=en&:display_count=y&publish=yes&:origin=viz_share_link';
    }

    if (this.smeinfo.sector == "Social Goods") {
      this.url = 'https://public.tableau.com/views/P19_SocGoodSect/Profit2019-SocilagoodsSector?:language=en&:display_count=y&publish=yes&:origin=viz_share_link';
    }

    this.router.navigate(['/viz', { URL: this.url }]);
  }

  /**
   * */
  profitCalc() {
    this.router.navigate(['/calc']);
  }

}
