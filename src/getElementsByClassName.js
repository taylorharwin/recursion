// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
vr getElementsByClassName = function (className) {
    var arr = [];

    function elementsByClass(element, className, array) {
        var elements = element.childNodes;
        for (var i = 0; i < elements.length; i++) {
            var child = elements[i];
            if (_.contains(child.classList, className)) {
                arr.push(child);
            }
            if (child.childNodes.length > 0) {
                elementsByClass(child, className, array);
            }
        }
    }
    elementsByClass(document.body, className, arr);
    return arr;
};
