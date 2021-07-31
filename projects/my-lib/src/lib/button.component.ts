import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-button',
  template: `
    <button {{type}}>
      {{ title }}
    </button>
  `,
  styleUrls: ['./button.scss'],
})
export class MyLibComponent implements OnInit {
  /**
   * Button text to be displayed.
   */
  @Input()
  title: string = 'Default';

  /**
   * Type of the button: `primary` | `secondary`
   */
  @Input()
  type: 'primary' | 'secondary' = 'primary';

  constructor() {}

  ngOnInit(): void {}
}
