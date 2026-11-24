const Bead=document.querySelectorAll('.bead')
const firstStickBeads=document.querySelectorAll('#firstStick .bead')
const secondStickBeads=document.querySelectorAll('#secondStick .bead')
const thirdStickBeads=document.querySelectorAll('#thirdStick .bead')
const fourthStickBeads=document.querySelectorAll('#fourthStick .bead')
const easySticks=document.querySelectorAll(".easyStick")
const sticksBeadsArr=[[...firstStickBeads],[...secondStickBeads],[...thirdStickBeads],[...fourthStickBeads]]
//stickes selection counter 
let gameDone=false
let selectedEl
let selectionInitiated= false
let matchedStickCount=0
let fbead
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
    console.log(bead)
}
function matchCheck(bead){
    console.log(bead.src)
    console.log(bead.src===fbead.src)
    
    return bead.src===fbead.src
    

}
function checkWin(){

    sticksBeadsArr.forEach((stick,index)=>{
        console.log(`stick${index+1}`)
        if(stick.length===3){
            console.log(`stick${index+1} again`)
            fbead=stick[0]
            console.log(fbead)
            console.log(`number of sticks before the check ${matchedStickCount}`)
            if(stick.every(matchCheck)){
                //console.log(`after check and before run: matched sticks at stick${index+1} is: ${matchedStickCount}`)
                
                matchedStickCount++
                console.log(`stick ${index+1} matched and count is ${matchedStickCount}`)
                
            }
            //stick.every(matchCheck())   
            
           //console.log(`stick${index+1} applies`)
        }

        
    })
    if(matchedStickCount===3){
        matchedStickCount=0
        
        gameDone=true
        return true
    }
    else{
        console.log(matchedStickCount+"from the last else")
        matchedStickCount=0
        fbead=null
        return false
    }
    
}


easySticks.forEach((stick,index)=>{
    stick.addEventListener('click',()=>{
        console.log('ready for a pick')
        console.log(`selectionInitiated is:${selectionInitiated}, gameDone is:${gameDone}`)
        
        if(!gameDone){
                if(selectionInitiated && ((stick.childElementCount<3)||(index===selectedEl))){
                console.log('here is the direction op')
                transformPiece(sticksBeadsArr[selectedEl],selectedEl,sticksBeadsArr[index],index)
                if(checkWin()){
                  console.log('match')
                }
                selectionInitiated=false
                selectedEl=null

                
            }
            else if(!selectionInitiated){
                console.log('inside first selection queue')
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
        }
    })
})
