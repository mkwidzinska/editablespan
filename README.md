# mk.editablespan

## Description
Editablespan is an **AngularJS directive** that enables you to edit a text simply by clicking on it. 
The text is contained in a span.
After the span with the text is clicked it is replaced by a input with that text.
User confirms changes by pressing `<ENTER>`. 

## Usage:

1. In your app module, add `mk.editablespan` module to the list of dependencies:

```
angular.module('yourApp', ['mk.editablespan']);
```

2. In your html code, use a `<editablespan>` tag:

```
<editablespan 
  model="item.description"  
  on-ready="onReady(item)"
  span-class="info"
  input-class="info-input">
</editablespan>
```

## Syntax

Attributes of the `<editablespan>` tag:

 * **model**: a variable containing a text you want to display
 * **on-ready**: a callback that is called after user saves a text change (presses `<ENTER>` on the input)
 * **span-class**: a CSS class that should be applied to the span element.
 * **input-class**: a CSS class that should be applied to the input element.
