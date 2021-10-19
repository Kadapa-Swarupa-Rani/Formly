import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  
export class AppComponent {

  form = new FormGroup({});
  model ={ email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'First Name',
      type: 'input',
      templateOptions: {
        label: 'First Name',
        placeholder: 'Enter Firstname',
        required: true,
      }
    },
    { 
      key: 'Last Name', 
      type: 'input', 
      templateOptions: {
         label: 'Last Name', 
         placeholder: 'Enter Lastname',
         required: true,
      }
    },
    {
      key: 'Comments',
      type: 'input',
      templateOptions: {
              type: 'teaxtarea',
        label: 'Comments',
        placeholder: 'comments textarea',
      }
    },
    {
      key: 'date_of_birth',
      type: 'datepicker',
          templateOptions: {
        label: 'Datepicker',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
      },
    },
    {
      key: 'terms',
          type: 'checkbox',
      templateOptions: {
        label: 'Accept terms',
        description: 'This is a checkbox',
        required: true,
      },
    },
    {
      key: 'gender',
      type: 'radio',
      templateOptions: {
        label: 'Gender',
        placeholder: 'Placeholder',
        description: 'Fill in your gender',
        options: [
          { value: 1, label: 'Male' },
          { value: 2, label: 'Femail' },
          { value: 3, label: 'I don\'t want to share that' },
        ],
      },
    },
    {
      key: 'terms',
      type: 'toggle',
      templateOptions: {
        label: 'Accept terms',
        description: 'Do you like options?',
        required: true,
      },
    },
    {
      key: 'description',
      type: 'textarea',
      templateOptions: {
        label: 'Description',
        placeholder: 'Enter description',
      }
    },
    {
      key: 'multiselect',
      type: 'select',
      templateOptions: {
        label: 'Color',
        multiple: true,
        options: [
          {label: 'Red', value: 'red'},
          {label: 'Blue', value: 'blue'},
          {label: 'Black', value: 'black'},
          {label: 'Pink', value: 'pink'},
          {label: 'Green', value: 'green'},
        ],
      },
    },
   
    // 
  ];
  onSubmit(model:any) {
    console.log(this.model);
  }
 title ='formly-poc';
}