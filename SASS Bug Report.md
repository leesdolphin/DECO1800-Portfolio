I have the following code:
```scss
#content {
  // Responsive default
  border: 1px solid red;
  @media screen and (min-width: 640px) {
    border: 1px solid black;
  }
  // ... Later on.
  border-color: green;
}
```
Produces the following code
```css
#content {
  border: 1px solid red;
  border-color: green; }
  @media screen and (min-width: 640px) {
    #content {
      border: 1px solid black; } }
```

This is inconsistent with the ordering of the statements in the SCSS source. This can be worked around by placing the `border-color` in another selector, like so:
```scss
#content {
  // Responsive default
  border: 1px solid red;
  @media screen and (min-width: 640px) {
    border: 1px solid black;
}
#content {
  border-color: green;
}
```
It would be good if this didn't happen. Though it m
