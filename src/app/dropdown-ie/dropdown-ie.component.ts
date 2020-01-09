import { Component, ViewChild, Pipe, PipeTransform } from '@angular/core';
import { IgxDropDownComponent } from 'igniteui-angular';

@Component({
  selector: 'app-dropdown-ie',
  templateUrl: './dropdown-ie.component.html',
  styleUrls: ['./dropdown-ie.component.scss']
})
export class DropdownIEComponent {
  public towns = [];
  public townSelected;

  @ViewChild(IgxDropDownComponent, { read: IgxDropDownComponent, static: true })
  public dropdown: IgxDropDownComponent;

  constructor() {
    this.towns = [
      'New York', 'Washington, D.C.', 'London', 'Berlin', 'Sofia', 'Rome', 'Kiev',
      'Copenhagen', 'Paris', 'Barcelona', 'Vienna', 'Athens', 'Dublin', 'Yerevan',
      'Oslo', 'Helsinki', 'Stockholm', 'Prague', 'Istanbul', 'El Paso', 'Florence', 'Moscow',
      'Jambol', 'Talin', 'Zlatna Panega', 'Queenstown', 'Gabrovo', 'Ugurchin', 'Xanthi'];
  }

  handleOpening() {
    console.log("opening")

    this.dropdown.width = '600px';
  }
  handleOpened(){
    console.log("opened")
  }
  handleClosing() {
    console.log("closing")

    this.dropdown.width = '600px';
  }
}

@Pipe({ name: 'startsWith' })
export class AutocompletePipeStartsWith implements PipeTransform {
  public transform(collection: any[], term = '') {
    return collection.filter((item) => item.toString().toLowerCase().startsWith(term.toString().toLowerCase()));
  }
}
