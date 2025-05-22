import { Component, Input } from '@angular/core';
import { Testimonial } from '../../../../types/testimonial';

@Component({
  selector: 'app-testimonial-card',
  imports: [],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.scss'
})
export class TestimonialCardComponent {
    @Input({ required: true }) testimonial!: Testimonial;
}
