export default function selectionsorting(array){
   var animations=[];
   for(var i=0;i<array.length-1;i++){
       var minindx=i;
       for(var j=i+1;j<array.length;j++){
           animations.push(["comp1",i,j]);
           animations.push(["comp2",i,j]);
           if(array[j]<array[minindx]){
               minindx=j;
           }
       }
       animations.push(["swap",i,array[minindx]]);
       animations.push(["swap",minindx,array[i]]);
       swap(i,minindx,array);
   }
   function swap(i,minindx,array){
       var temp=array[i];
       array[i]=array[minindx];
       array[minindx]=temp;
   }
   return animations;
}