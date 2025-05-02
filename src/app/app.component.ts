import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { DockComponent } from "./layout/dock/dock.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, DockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nupu-app';
}
