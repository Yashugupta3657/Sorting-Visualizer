export default function bubblesorting(array){
    var animations=[];
    bubbleSort(array,animations);
function bubbleSort(auxillaryArray, animations) {
    const N = auxillaryArray.length;
    let iters = N - 1;
    for (var j = 0; j < N; j++){
        let swapped = false;
        for(let i = 0; i < N-1-j; ++i) {
            animations.push(["comp1",i, i + 1]);
            animations.push(["comp2",i, i + 1]);
            if(auxillaryArray[i] > auxillaryArray[i + 1]) {
                swapped = true;
                animations.push(["ch",i, auxillaryArray[i + 1]]);
                animations.push(["ch",i + 1, auxillaryArray[i]]);
                swap(auxillaryArray, i, i + 1);
            }
        }
        if(swapped === false) break;
    }
}
function swap(auxillaryArray, firstIndex, secondIndex) {
    let temp = auxillaryArray[firstIndex];
    auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
    auxillaryArray[secondIndex] = temp;
}
return animations;
}