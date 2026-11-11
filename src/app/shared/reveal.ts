import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

/** Fades an element in the first time it scrolls into view. */
@Directive({ selector: '[reveal]', host: { class: 'reveal' } })
export class Reveal implements OnInit, OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (typeof IntersectionObserver === 'undefined') {
      this.el.classList.add('reveal--in');
      return;
    }
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.el.classList.add('reveal--in');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    this.observer.observe(this.el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
