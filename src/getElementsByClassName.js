// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
// ]
// var getElementsByClassName = function (className, node, results) {
//     results = results || [];
//     node = node || document.body;
//         if (node.className === className){
//           results.push(node);
// }
// if (node.childNodes.length > 0){
// for (var i = 0; i < node.childNodes.length; i++){
//    results = results.concat(getElementsByClassName(className, node.childNodes[i], results));
// }
// }
// return results;
// };
var getElementsByClassName = function (className, node) {
    var results = [];
    node = node || document.body;
        if (node.className.split(' ').indexOf(className) >= 0){
          results.push(node);
}
if (node.children){
for (var i = 0; i < node.children.length; i++){
   results = results.concat(getElementsByClassName(className, node.children[i]));
}
}
return results;
};
