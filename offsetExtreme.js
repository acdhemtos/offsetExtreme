['Top', 'Left'].forEach(direction => {
 Object.defineProperty(Element.prototype, `offsetExtreme${direction}`, {
  get: function () {
   let result = 0;
   let element = this;
   while (element !== null) {
    result += element[`offset${direction}`];
    element = element.offsetParent;
   }
   return result;
  },
  enumerable: true,
  configurable: false
 });
});
