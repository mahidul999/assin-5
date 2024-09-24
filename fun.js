// function donateBtnClicked(ID) {

//     document.querySelector("#hisory").classList.add('hiddden');
//     document.querySelector(ID).classList.remove('hiddden');
    
// }


// function historyBtnClicked(ID) {

//     document.querySelector(ID).classList.remove('hiddden');
//     document.querySelector("#donate").classList.add('hiddden');
    
// }


// document.querySelector("#donate").addEventListener("clicked", function(){

//     donateBtnClicked("#donate");
// }
//  )

//  document.querySelector("#hisory").addEventListener("clicked", function(){

//     historyBtnClicked("#hisory");
// }
//  )


function donateBtnClicked(ID) {
    document.querySelector("#history").classList.add('hidden'); // Fixed typos
    document.querySelector(ID).classList.remove('hidden');     // Fixed typos
}

function historyBtnClicked(ID) {
    document.querySelector(ID).classList.remove('hidden');
    document.querySelector("#donate").classList.add('hidden');
}

// Corrected event listeners
document.querySelector("#donateBtn").addEventListener("click", function(){
    donateBtnClicked("#donate");
});

document.querySelector("#historyBtn").addEventListener("click", function(){
    historyBtnClicked("#history");
});
