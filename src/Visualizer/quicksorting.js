export default function quicksorting(array){
    var animations=[];
    quicksort(array,0,array.length-1);
    function quicksort(array,lb,ub){
        if(lb<ub){
        var pos=give(array,lb,ub);
        quicksort(array,lb,pos-1);
        quicksort(array,pos+1,ub);
        }
    }
    function give(array,lb,ub){
        var pivot=array[lb];
        var start=lb;
        var end=ub;
       while(start<end){

           while(array[start]<=pivot){
               start++;
           }
           while(array[end]>pivot){
               end--;
           }
           animations.push(["comp1",start,end]);
           animations.push(["comp2",start,end]);
           if(start<end){
               animations.push(["swap",start,array[end]]);
               animations.push(["swap",end,array[start]]);
             swap(array,start,end);
           }
       }
       animations.push(["swap",lb,array[end]]);
       animations.push(["swap",end,array[lb]]);
       swap(array,lb,end);
       return end;
    }
    function swap(array,start,end){
        var temp=array[start];
        array[start]=array[end];
        array[end]=temp;
    }
 return animations;
}