
import { Directive, input, signal } from '@angular/core';

@Directive({
     selector: '[appHoverStyle]',
     host: {
          '(mouseenter)': 'isHovered.set(true)',
          '(mouseleave)': 'isHovered.set(false)',

          '[style.color]': 'isHovered() ? hoverColor() : null',
          '[style.font-style]': 'isHovered() ? hoverFontStyle() : null',
          '[style.font-weight]': 'isHovered() ? hoverFontWeight() : null',
          '[style.text-decoration]': 'isHovered() ? hoverDecoration() : null',
          '[style.cursor]': 'isHovered() ? hoverCursorStyle() : null',
          '[style.transition]': '"all 0.2s ease-in-out"'
     }
})
export class HoverStyle {
     isHovered = signal<boolean>(false);

     hoverColor = input<string>('red !important');
     hoverFontStyle = input<string>('italic');
     hoverFontWeight = input<string>('bold');
     hoverDecoration = input<string>('underline');
     hoverCursorStyle = input<string>('pointer');
}