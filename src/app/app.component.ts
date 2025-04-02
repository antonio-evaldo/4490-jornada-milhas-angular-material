import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { BannerComponent } from "./banner/banner.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jornada-milhas';
}
