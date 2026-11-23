const Bead=document.querySelectorAll('.bead')
const firstStickBeads=document.querySelectorAll('#firstStick .bead')
const secondStickBeads=document.querySelectorAll('#secondStick .bead')
const thirdStickBeads=document.querySelectorAll('#thirdStick .bead')
const fourthStickBeads=document.querySelectorAll('#fourthStick .bead')

const easySticks=document.querySelectorAll(".easyStick")
//stickes selection counter 
let selectedEl
let selectionInitiated= false
let firstStickSelected= false
let secondStickSelected= false
let thirdtickSelected= false
let fourthStickSelected= false
//this var will either 
/*const Bead=document.querySelectorAll('#firstStick.bead')
const Bead=document.querySelectorAll('.bead')
const Bead=document.querySelectorAll('.bead')*/
//console.log(firstStickBeads)
//console.log(secondStickBeads)
//console.log(thirdStickBeads)
//console.log(fourthStickBeads)
//console.dir(Bead)


function transformPiece(selectedStick,distStickId){
    
    






}
easySticks.forEach((stick,index)=>{
    stick.addEventListener('click',()=>{
          console.dir()
        if(selectionInitiated && ((stick.childElementCount<3)||(stick.id===selectedId))){
            console.log('here is the dirction op')
            transformPiece(selectedEl,stick)
            selectionInitiated=false
            selectedEl=null
            
        }
        else if(!selectionInitiated){
            if(index===0){
                selectedEl=firstStickBeads
                selectionInitiated=true
                console.log('first selected')
            }
            else if(index===1){
                selectedEl=secondStickBeads
                selectionInitiated=true
                console.log('second selected')

            }
            else if(index===2){
                selectedEl=thirdStickBeads
                selectionInitiated=true
                console.log('third selected')

            }
            else if(index===3){
                selectedEl=fourthStickBeads
                selectionInitiated=true
                console.log('fourth selected')

            }

        }
    })
})
