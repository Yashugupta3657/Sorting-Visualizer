export default function merge(mainarr){ 
    var animations=[];
    var sidearray=mainarr.slice();
    mergehelp(mainarr,0,mainarr.length-1,sidearray,animations);
    function mergehelp(mainarr,start,end,sidearray,animations){
        if(start===end) return;
        var mid=Math.floor((start+end)/2);
        mergehelp(sidearray,start,mid,mainarr,animations);
        mergehelp(sidearray,mid+1,end,mainarr,animations);
        mergethem(mainarr,start,mid,end,sidearray,animations);
    }
    function mergethem(mainarr,start,mid,end,sidearray,animations){
         var i=start;
         var k=start;
         var j=mid+1;
         while(i<=mid&&j<=end){
             animations.push([i,j]);
             animations.push([i,j]);
             if(sidearray[i]<=sidearray[j]){
                    animations.push([k,sidearray[i]]);
                    mainarr[k++]=sidearray[i++];
             }
             else{
                 animations.push([k,sidearray[j]]);
                 mainarr[k++]=sidearray[j++];
             }
         }

      while(i<=mid){
          animations.push([i,i]);
          animations.push([i,i]);
          animations.push([k,sidearray[i]]);
          mainarr[k++]=sidearray[i++];
      }
      while(j<=end){
          animations.push([j,j]);
          animations.push([j,j]);
          animations.push([k,sidearray[j]]);
          mainarr[k++]=sidearray[j++];
      }
     
    }
    return animations;   //we will be returning different animations needed to perform sorting which were used while sorting
}