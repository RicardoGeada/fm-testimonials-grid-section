import { Component } from '@angular/core';
import { TestimonialCardComponent } from "../../shared/components/testimonial-card/testimonial-card.component";

@Component({
  selector: 'app-main-page',
  imports: [TestimonialCardComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
