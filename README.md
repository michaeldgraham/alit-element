# AlitElement
A simple base class that extends [lit-element](https://github.com/Polymer/lit-element) with some utility functions.

It also defines decorators, similar to [polymer-decorators](https://github.com/Polymer/polymer-decorators#observetargets-string), which makes development of web components in typescript super easy. 

## Sample Code

Here's some sample code that showcases decorators

```javascript
@element('alit-card')
export class AlitCard extends AlitElement {
  @property() name?: string;
  @property() age: number = 30;
  @property() image?: string;
  @property() description: string = 'This is the default description';
  
  @query('.card')
  card?: HTMLDivElement;

  @listen('click', '#toggleButton')
  toggleBorder() {
    this.borderShowing = !this.borderShowing;
    this.card!.style.border = this.borderShowing ? '2px solid' : 'none';
  }
  
  @observe('age', 'description')
  ageChanged(records: ChangeRecord[]) {
    for (const r of records) {
      console.log(`${r.path} changed from '${r.oldValue}' to '${r.value}'`);
    }
  }
  
  _render(): TemplateResult {
    return html`
    ...
    ...
    <div class="card">
      ...
    </div>
    ...
    `;
  }
```
