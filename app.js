const blueBead=document.createElement('img')
blueBead.className='bead'
blueBead.src = './assets/Blue-bead.png'
const yellowBead=document.createElement('img')
yellowBead.className='bead'
yellowBead.src = './assets/Yellow-bead.png'
const redBead=document.createElement('img')
redBead.className='bead'
redBead.src = './assets/Red-bead.PNG'
//this array contain 9 beads (3 from each color)
const randomizeArr=[redBead,redBead,blueBead,blueBead,redBead,yellowBead,yellowBead,yellowBead,blueBead]
const easySticks=document.querySelectorAll(".easyStick")
function randomize(){
    //console.log(randomizeArr)
    //console.log(randomizeArr.length)
    return (Math.floor(Math.random() * (randomizeArr.length)-1))

}
function randomizeOrder(){
    easySticks.forEach((stick,index)=>{
        if(index===easySticks.length-1){
            return
        }
        else{
            //console.log((randomizeArr.splice(randomize(),1))[0])
            console.log(index)
             //console.log(randomizeArr[randomize()].pop())

             //-->✨dear instructor , after carfull consideration , ive used this good looking .cloneNode(true) part
             //and that's after what my wise eyes sow from benefits and gains in using such a part✨
             //-->jk its bc only one bead of each color was showing and i found that in dom , sometimes the brawser missunderstand 
             // reusing the same var that applies the dom as moving the created piece instead of actually creating a new one 
             //sooo clone node ensure to tell brawser not to
            // console.log(`before round ${index+1}: ${randomizeArr.length}`)
            stick.appendChild(((randomizeArr.splice(randomize(),1))[0]).cloneNode(true))
            stick.appendChild(((randomizeArr.splice(randomize(),1))[0]).cloneNode(true))
            stick.appendChild(((randomizeArr.splice(randomize(),1))[0]).cloneNode(true))
            //console.log(`after round ${index+1}: ${randomizeArr.length}`)
        }
    })

    
    

}
//-->👀ik this section under looks a bit suspicious but i figured out that in order to have the first board 
//randomized , i must keep those get methods in order to have the 
//code live loading the cotent from the sticks in case we restart a game mid session and also for the first game randomization

const firstStickBeads=document.getElementById('firstStick').getElementsByClassName('bead')
const secondStickBeads=document.getElementById('secondStick').getElementsByClassName('bead')
const thirdStickBeads=document.getElementById('thirdStick').getElementsByClassName('bead')
const fourthStickBeads=document.getElementById('fourthStick').getElementsByClassName('bead')
const startPopUp=document.querySelector('#startPopUp')
const timerEl = document.querySelector('#timer')
const startBtn=document.querySelector('#startBtn')


randomizeOrder()
let sticksBeadsArr=[[...firstStickBeads],[...secondStickBeads],[...thirdStickBeads],[...fourthStickBeads]]



let gameDone=false
let selectedEl
let selectionInitiated= false
let matchedStickCount=0
let fbead


//here using the timer functionality
let timeLeft = 20
let timerId = null
timeLeft.textContent = timeLeft
const updateTimer = () => {
  timeLeft = timeLeft - 1
  timerEl.textContent = timeLeft
}
window.addEventListener("DOMContentLoaded", () => {
    // Open as a modal on page load
    startPopUp.showModal();
    console.log('it recived ')
    // Close when clicking the button
    startBtn.addEventListener("click", () => {
      startPopUp.close();
    })


})



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
