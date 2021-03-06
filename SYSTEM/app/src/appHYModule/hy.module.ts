import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgSemanticModule } from "ng-semantic";
import { StickyNavModule } from 'ng2-sticky-nav';


import { HYComponent } from './hy.component';
import { appHYHomepageModule } from './homepageModule/homepage.module';
import { appHYResourceModule } from './resourceModule/resource.module';
import { appHYReviewedModule } from './reviewedModule/reviewed.module';
import { appHYPersonalModule } from './personalModule/personal.module';
import { appHYPersonnelModule } from './personnelModule/personnel.module';
import { appHYSheduleModule } from './sheduleModule/shedule.module';
import { appHYAssetsModule } from './assetsModule/assets.module';
import { appHYSchoolModule } from './schoolModule/school.module';
require('../assets/style/hy.style.scss');




const APP_CMS_COMPONENT = [
	HYComponent,
]
const APP_CMS_IMPORT = [
	FormsModule,
	RouterModule,
	CommonModule,
	NgSemanticModule,
	StickyNavModule,
	appHYHomepageModule,
	appHYResourceModule,
	appHYReviewedModule,
	appHYPersonalModule,
	appHYPersonnelModule,
	appHYSheduleModule,
	appHYAssetsModule,
	appHYSchoolModule
]

@NgModule({
	imports: [
        ...APP_CMS_IMPORT
	],
    declarations: [
    	...APP_CMS_COMPONENT
    ],
})
export class appHYModule {}
