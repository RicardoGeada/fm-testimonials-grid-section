import { Component } from '@angular/core';
import { TestimonialCardComponent } from '../../shared/components/testimonial-card/testimonial-card.component';
import testimonialsData from './../../../assets/data/testimonials.json';
import { Testimonial } from '../../../types/testimonial';

@Component({
  selector: 'app-main-page',
  imports: [TestimonialCardComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  testimonials: Testimonial[] = testimonialsData;
}
