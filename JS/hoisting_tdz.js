// console.log(me);  // Undefined
// console.log(job); // Uncaught reference
// console.log(year);

// var me = "Mihir";
// let job = "Intern";
// const year = 2001;

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// // Const: TDZ
// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => {
//   a + b;
// };

// Example

if(!numProducts){
    deleteShoppingCart();
}

var numProducts = 10;
function deleteShoppingCart(){
    console.log('Removed Products');
}