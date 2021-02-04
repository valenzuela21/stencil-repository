import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'web-component-hello',
})
export class webHello {
  @Prop() firstName:string;
  @Prop({attribute: "website-url"}) websiteUrl:string
  suma(a: number , b: number){
    return a + b
  }
  render() {
    return (
      <div class="web-component">
        Hello World {this.firstName} Url: {this.websiteUrl}
      </div>);
  }
}
