import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  condition: Boolean = false
  @ViewChild('falseContent')
  tplRef: TemplateRef<any>
  constructor(
    private vcRef: ViewContainerRef
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // 这样tplRef对应的ng-template内容就显示出来了
    const viewRef = this.vcRef.createEmbeddedView(this.tplRef);
    console.log(viewRef)
  }

}
