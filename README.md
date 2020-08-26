# Selection Bar
Menu selection that changes as user scrolls down
- Great for single page UI
- It retains positioning
- Responds to resizing
- Support for mobile devices
## Usage
### Add IDs to your sections
```html
<div id="section_1">1</div>
<div id="section_2">2</div>
<div id="section_3">3</div>
<div id="section_4">4</div>
<div id="section_5">5</div>
```
### Add "ID"-button to the links 
```html
<a class="nav-link" id="section_1-button">Section 1</a>
<a class="nav-link" id="section_2-button">Section 2</a>
<a class="nav-link" id="section_3-button">Section 3</a>
<a class="nav-link" id="section_4-button">Section 4</a>
<a class="nav-link" id="section_5-button">Section 5</a>
```
### Instantiate obj with array IDs
```javascript
const selection_bar = new SelectionBar(["container1","container2","container3","container4","container5"]);
```
### Pass your own style classes to 'normal' and 'selected' 
```javascript
selection_bar.normal = "nav-link";
selection_bar.selected = "nav-link selection";
```
### Run menu object 
```javascript
selection_bar.run()
```
## Sample:
![kpi.js](https://wrightanalytics.dev/menu-selector_sample.gif)
