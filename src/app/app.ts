import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "../shared/components/sidebar/sidebar";
import { Home } from "../features/home/home";
import { About } from "../features/about/about";
import { Skills } from "../features/skills/skills";
import { Projects } from "../features/projects/projects";
import { Contact } from "../features/contact/contact";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, Home, About, Skills, Projects, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
