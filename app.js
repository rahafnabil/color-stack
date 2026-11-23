const Bead=document.querySelectorAll('.bead')
const firstStickBeads=document.querySelectorAll('#firstStick .bead')
const secondStickBeads=document.querySelectorAll('#secondStick .bead')
const thirdStickBeads=document.querySelectorAll('#thirdStick .bead')
const fourthStickBeads=document.querySelectorAll('#fourthStick .bead')
const easySticks=document.querySelectorAll(".easyStick")
const sticksBeadsArr=[[...firstStickBeads],[...secondStickBeads],[...thirdStickBeads],[...fourthStickBeads]]
//stickes selection counter 
let selectedEl
let selectionInitiated= false
//console.log(sticksBeadsArr)
//console.log(sticksBeadsArr[1])
/*
let firstStickSelected= false
let secondStickSelected= false
let thirdtickSelected= false
let fourthStickSelected= false*/
//this var will either 
/*const Bead=document.querySelectorAll('#firstStick.bead')
const Bead=document.querySelectorAll('.bead')
const Bead=document.querySelectorAll('.bead')*/
//console.log(firstStickBeads)
//console.log(secondStickBeads)
//console.log(thirdStickBeads)
//console.log(fourthStickBeads)
//console.dir(Bead)


function transformPiece(selectedStick,Sindex,distStickId,Dindex){
    //console.log(selectedStick)
    let bead=selectedStick.pop()
    console.log(selectedStick)

    easySticks[Sindex].removeChild(bead)
    distStickId.push(bead)
    easySticks[Dindex].appendChild(bead)
    console.log(distStickId)

    //console.log(bead)
    
}


easySticks.forEach((stick,index)=>{
    stick.addEventListener('click',()=>{
        
        if(selectionInitiated && ((stick.childElementCount<3)||(index===selectedEl))){
            console.log('here is the direction op')
            transformPiece(sticksBeadsArr[selectedEl],selectedEl,sticksBeadsArr[index],index)
            selectionInitiated=false
            selectedEl=null

            
        }
        else if(!selectionInitiated){
            if(index===0){
                selectedEl=0
                selectionInitiated=true
                console.log('first selected')

            }
            else if(index===1){
                selectedEl=1
                selectionInitiated=true
                console.log('second selected')

            }
            else if(index===2){
                selectedEl=2
                selectionInitiated=true
                console.log('third selected')

            }
            else if(index===3){
                selectedEl=3
                selectionInitiated=true
                console.log('fourth selected')

            }

        }
    })
})
