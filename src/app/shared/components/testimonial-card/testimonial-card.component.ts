import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  imports: [],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.scss'
})
export class TestimonialCardComponent {
    @Input({ required: true }) testimonial!: {
    image: string,
    name: string,
    title: string,
    headline: string,
    quote:string,
  }
}
