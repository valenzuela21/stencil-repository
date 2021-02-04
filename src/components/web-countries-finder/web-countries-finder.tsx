import { Component, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'web-countries-finder',
  styleUrl:'web-countries-finder.scss',
  shadow: true
})

export class WebCountriesFinder{
  @Prop() keyword: string = 'mexico';
  @State() countries: Array<any> = [];


  render(){
    return(
      <div class="web-c-countries-finder">
        <div>
        <h2>{this.keyword}</h2>
        Number Results: {this.countries.length}
        </div>
        {
          this.countries.map(country=>(
           <div class="country-card">
             <div class="country-card__body">
               <div class="country-card__flag-container">
                 <div class="country-card_flag">
                   <span class="flag flag_cli" ></span>
                 </div>
               </div>
               <div class="country-card__flag-container">
                  <h3>{country.name.common}</h3>
                 <div class="bottom clearfix">
                    <p>
                      <strong>
                        Official Name:
                      </strong>
                      {country.name.official}
                    </p>
                   <p>
                     <strong>
                       Currency:
                     </strong>
                     {country.currency}
                   </p>
                   <p>
                     <strong>
                       Language:
                     </strong>
                     <span>
                       {this.mapObjectToArray(country.languages)}
                     </span>
                   </p>
                 </div>

               </div>
             </div>
           </div>
          ))
        }
      </div>
    )
  }


  mapObjectToArray(contriesObj){
    const array = [];

    for(const countryKey in contriesObj){
      if(contriesObj.hasOwnProperty(countryKey)){
        array.push(contriesObj[countryKey]);
      }
    }

    return array

  }

  getModifyState(){
    const serviceURL = `http://countries-finder-api.webtraining.fun/countries/search/${this.keyword}`;

    fetch(serviceURL).then((response: Response) => response.json())
      .then(response => {
        // @ts-ignore
        this.countries = this.mapObjectToArray(response);
      });
  }

  componentWillLoad(){
    this.getModifyState()
  }

  @Watch('keyword')
  wacthHandler(newValue: string, oldValue: string){

    console.log('New value for keywoard', newValue , oldValue);
    this.getModifyState();

  }


}
