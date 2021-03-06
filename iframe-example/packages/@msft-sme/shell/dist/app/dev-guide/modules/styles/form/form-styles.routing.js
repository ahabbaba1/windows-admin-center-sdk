import { RouterModule } from '@angular/router';
import { FormStylesComponent } from './form-styles.component';
import { ButtonStylesComponent } from './button/button-styles.component';
import { CheckboxStylesComponent } from './checkbox/checkbox-styles.component';
import { RadioStylesComponent } from './radio/radio-styles.component';
import { SearchStylesComponent } from './search/search-styles.component';
import { SelectStylesComponent } from './select/select-styles.component';
import { SliderStylesComponent } from './slider/slider-styles.component';
import { TextStylesComponent } from './text/text-styles.component';
export var routing = RouterModule.forChild([
    {
        path: '',
        component: FormStylesComponent,
        children: [
            { path: '', redirectTo: 'button', pathMatch: 'full' },
            { path: 'button', component: ButtonStylesComponent },
            { path: 'checkbox', component: CheckboxStylesComponent },
            { path: 'radio', component: RadioStylesComponent },
            { path: 'search', component: SearchStylesComponent },
            { path: 'select', component: SelectStylesComponent },
            { path: 'slider', component: SliderStylesComponent },
            { path: 'text', component: TextStylesComponent }
        ]
    }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kZXYtZ3VpZGUvbW9kdWxlcy9zdHlsZXMvZm9ybS9mb3JtLXN0eWxlcy5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVuRSxNQUFNLENBQUMsSUFBTSxPQUFPLEdBQXdCLFlBQVksQ0FBQyxRQUFRLENBQzdEO0lBQ0k7UUFDSSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxtQkFBbUI7UUFDOUIsUUFBUSxFQUFFO1lBQ04sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtZQUNyRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFO1lBQ3BELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUU7WUFDeEQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRTtZQUNsRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFO1lBQ3BELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUscUJBQXFCLEVBQUU7WUFDcEQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxxQkFBcUIsRUFBRTtZQUNwRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFO1NBRW5EO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoiZm9ybS1zdHlsZXMucm91dGluZy5qcyIsInNvdXJjZVJvb3QiOiJDOi9CQS80NDQvcy9pbmxpbmVTcmMvIn0=