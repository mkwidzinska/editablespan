# mk.editablespan

## Description
Editablespan is an **AngularJS directive** that enables you to edit a text simply by clicking on it. 
The text is contained in a span.
After the span with the text is clicked it is replaced by a input with that text.
User confirms changes by pressing `<ENTER>`. 

## Usage

Include the script tag after AngularJS tag:

```
<script type="text/javascript" src="angular.min.js"></script>  
<script type="text/javascript" src="mk-editable-span.js"></script>
```

In your app module, add `mk.editablespan` module to the list of dependencies:

```
angular.module('yourApp', ['mk.editablespan']);
```

In your html code, use a `<editablespan>` tag:

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

## Demo

You'll find the working demo in the `example/` directory and on [JSFiddle](http://jsfiddle.net/gkwidzinska/KHttt/14/).