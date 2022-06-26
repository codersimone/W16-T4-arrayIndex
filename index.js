let arr = [[1,2], [1,2,3], [1,2,3,4]];
let searchIndex;
const answer = arr.find((element, index) => {
    searchIndex = index;
    return element.length > 3;
});
alert(answer);