import { useEffect, useState } from "react"
import merge from './merge'
import bubblesorting from './bubblesorting'
import quicksorting from './quicksorting'
import selectionsorting from "./selectionsorting";
export default function Visualizer(){
    const wid=Math.floor(window.innerWidth/5);
    const hei=Math.floor(window.innerHeight-90);

      useEffect(()=>{  resetArr();},[]);
    const [arr,setArr]=useState([]);

    function resetArr(){
        const array1=[];
        for(let i=0;i< wid;i++){
             array1.push(Math.floor(Math.random()*(hei-5+1)+5));
        }
        setArr(array1)
    }
    function selectionsort(){
        const gotanimations=selectionsorting(arr);
        console.log(gotanimations);
        for(let i=0;i<gotanimations.length;i++){
            var bars=document.getElementsByClassName("make");
            var colorchange= gotanimations[i][0]==="comp1"||gotanimations[i][0]==="comp2";
            if(colorchange){
               const[ans,bar1Indx,bar2Indx]=gotanimations[i];
               console.log(bar1Indx+" "+bar2Indx);
               const bar1=bars[bar1Indx].style;
               const bar2=bars[bar2Indx].style;
               const color = gotanimations[i][0]==="comp1"?'green' : 'rgb(93, 230, 93)';
               setTimeout(() => {
                  bar1.backgroundColor=color;
                  bar2.backgroundColor=color;
               }, Math.floor(i/4));
            }
            else{
                const [ans,barIndx, newheight] = gotanimations[i];
                const bar=bars[barIndx].style;
                setTimeout(()=>{
                  bar.height=`${newheight}px`;
                }, Math.floor(i/4));
            }
        }
    }
    function quicksort(){
        const gotanimations= quicksorting(arr);
        console.log(gotanimations);
        for(let i=0;i<gotanimations.length;i++){
            var bars=document.getElementsByClassName("make");
            var colorchange= gotanimations[i][0]==="comp1"||gotanimations[i][0]==="comp2";
            if(colorchange){
               const[ans,bar1Indx,bar2Indx]=gotanimations[i];
               console.log(bar1Indx+" "+bar2Indx);
               const bar1=bars[bar1Indx].style;
               const bar2=bars[bar2Indx].style;
               const color = gotanimations[i][0]==="comp1"?'purple' : 'rgb(93, 230, 93)';
               setTimeout(() => {
                  bar1.backgroundColor=color;
                  bar2.backgroundColor=color;
               }, Math.floor(i*100));
            }
            else{
     
                const [ans,barIndx, newheight] = gotanimations[i];
                const bar=bars[barIndx].style;
                setTimeout(()=>{
                  bar.height=`${newheight}px`;
                }, Math.floor(i*100));
            }
        }
    
    }
    function bubblesort(){
        const gotanimations=bubblesorting(arr);
        console.log(gotanimations);
        for(let i=0;i<gotanimations.length;i++){
            var bars=document.getElementsByClassName("make");
            var colorchange= gotanimations[i][0]==="comp1"||gotanimations[i][0]==="comp2";
            if(colorchange){
               const[ans,bar1Indx,bar2Indx]=gotanimations[i];
               console.log(bar1Indx+" "+bar2Indx);
               const bar1=bars[bar1Indx].style;
               const bar2=bars[bar2Indx].style;
               const color = gotanimations[i][0]==="comp1"?'green' : 'rgb(93, 230, 93)';
               setTimeout(() => {
                  bar1.backgroundColor=color;
                  bar2.backgroundColor=color;
               }, Math.floor(i/4));
            }
            else{
                const [ans,barIndx, newheight] = gotanimations[i];
                const bar=bars[barIndx].style;
                setTimeout(()=>{
                  bar.height=`${newheight}px`;
                }, Math.floor(i/4));
            }
        }
    }
    function mergesort(){
          const gotanimations=merge(arr);
          console.log(gotanimations);
          for(let i=0;i<gotanimations.length;i++){
              var bars=document.getElementsByClassName("make");
              var colorchange= i%3 !==2;
              if(colorchange){
                 const[bar1Indx,bar2Indx]=gotanimations[i];
                 const bar1=bars[bar1Indx].style;
                 const bar2=bars[bar2Indx].style;
                 const color = i % 3 === 0 ? 'green' : 'rgb(93, 230, 93)';
                 setTimeout(() => {
                    bar1.backgroundColor=color;
                    bar2.backgroundColor=color;
                 }, i*2);
              }
              else{
                  setTimeout(()=>{
                    const[barIndx,newheight]=gotanimations[i];
                    const bar=bars[barIndx].style;
                    bar.height=`${newheight}px`;
                  },i*2);
              }
          }    
    }
   return(
       <>
       <div className="top">
           <div><h3 className="box">Sorting Visualizer</h3></div>
       <div className="content">
        {arr.map((v,i)=>{
           return <div className="make" key={i} style={{height:`${v}px`}}></div>   
        })}
        </div>
        <div className="buttons">
        <button id="button1" onClick={mergesort}>Merge sort</button>
        <button id="button1" onClick={quicksort}>Quick sort</button>
        <button id="button1" onClick={bubblesort}>Bubble sort</button>
        <button id="button1" onClick={selectionsort}>Selection sort</button>
        <button id="button2" onClick={resetArr}>Reset</button>
        </div>
        </div>
       </>
   )

}