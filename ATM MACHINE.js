const main = document.querySelector(".main")
const balance = document.querySelector(".balance-show")
const withdraw = document.querySelector(".withdraw-show")
const deposit = document.querySelector(".deposit-show")
const exit = document.querySelector(".exit-show")
// const exitBal = document.querySelector(".exitBal")
const trans = document.querySelector(".trans")
const submit = document.querySelector(".submit")
const totalBal = document.querySelector(".totalBal")
const balancebtn = document.querySelector(".balancebtn")

const TOTALBALANCE = 500

totalBal.innerHTML = TOTALBALANCE;
// show transactions
const balanceShow = () => {
    balance.style.display = "block";
    withdraw.style.display = "none";
    deposit.style.display = "none";
    deposit.style.display = "none";

    // totalBal.innerText = TOTALBALANCE + withdrawAmnt.value - depositAmnt.value;
}
const withdrawShow = () => {
    balance.style.display = "none";
    withdraw.style.display = "block";
    deposit.style.display = "none";
    exit.style.display = "none";
    balancebtn.style.display = "block";
    

     
}

const depositShow = () => {
    balance.style.display = "none";
    withdraw.style.display = "none";
    deposit.style.display = "block";
    exit.style.display = "none";
}

const exitShow = () => {
    balance.style.display = "none";
    withdraw.style.display = "none";
    deposit.style.display = "none";
    exit.style.display = "block";
    main.style.display = "none";
}

const checkBal = () =>  {
    balance.style.display = "block";
    const withdrawAmnt = document.querySelector(".withdrawAmnt");
    const depositAmnt = document.querySelector(".depositAmnt");
    totalBal.innerText = TOTALBALANCE - parseInt(withdrawAmnt.value) + parseInt(depositAmnt.value)
    
}


// compute transaction

const wTotal = () => {
    
    balance.style.display = "block";
    const withdrawAmnt = document.querySelector(".withdrawAmnt");
    const withdrawBal = document.querySelector(".withdrawBal");
   
    
    
    if (TOTALBALANCE < withdrawAmnt.value){
        alert("You enter amount greater than your Balance, please enter again.")
    }

    else{
        var withdrawal = TOTALBALANCE - withdrawAmnt.value;
        totalBal.innerText = withdrawal;
    }

    
}

const dTotal = () => {
    
    balance.style.display = "block";
    const withdrawAmnt = document.querySelector(".withdrawAmnt");
    const depositAmnt = document.querySelector(".depositAmnt");
    const depositBal = document.querySelector(".depositBal");
   
    // var a = TOTALBALANCE;
    // var b = depositAmnt.value;

    var withdrawal = TOTALBALANCE - withdrawAmnt.value;
    totalBal.innerText = withdrawal  + parseInt(depositAmnt.value)
    
}



const back = () => {
    main.style.display = "block";
    exit.style.display = "none";
    balancebtn.style.display = "block";
    

}

// const exitBal = () => {
//     balance.style.display = "none";
//     main.style.display = "none";
//     exit.style.display = "block";
// }
















// const checkTrans = () =>{
//     const transVal = trans.value;
//     var display;
    
//     switch(transVal){
//         case "1":
            
//             balance.style.display = "block";break;
    
//         case "2":
//             withdraw.style.display = "block";break;
//             deposit.style.display = "none";break;

//         case "3":
//             withdraw.style.display = "none";break;
//             deposit.style.display = "block";break;
    
//         case "4":
//             balance.style.display = "none";break;
//             deposit.style.display = "none";break;
//             main.style.display = "none";
//             exit.style.display = "block"; break;

//         default:
//             alert("Please Enter Valid Number")
//     }

//     const transaction = document.querySelector(".transaction").innerHTML = display


    

// }

// const checkTrans = () =>{
//     const trans = document.querySelector(".trans").value.trim();
    

//     // const transVal = transValue.value
//     // alert(trans);
//     switch(trans){
//         case trans.value === 1:
//             alert("equals to one")
//             balance.style.display = "block";break;
    
//         case trans === "2":
//             withdraw.style.display = "block";break;
    
//         case trans === "3":
//             deposit.style.display = "block";break;
    
//         case trans === "hello":
//             main.style.display = "none";
//             exit.style.display = "block"; break;

//         default:
//             alert("Please Enter Valid Number")
//     }

// }


