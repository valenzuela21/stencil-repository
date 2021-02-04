import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'web-component-business-card',
  styleUrl: 'web-business-card.scss'
})

export class webBusinessCard {
  @Prop() emailProfile:string;
  @Prop() webUrl:string;
  @Prop() phoneProfile:string;

  render() {
    return (
      <div>
      <div class="container">
      <div class="card">
        <div class="front">
          <div class="logo"><span></span></div>
        </div>
        <div class="back">
          <h1>Helen Parker<span>design <i>&</i> photography</span></h1>
          <ul>
            <li>{this.phoneProfile}</li>
            <li>{this.emailProfile}</li>
            <li>{this.webUrl}</li>
          </ul>
        </div>
      </div>
      </div>
      </div>);
  }
}
