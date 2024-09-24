
function donateBtnClicked(ID) {
    
    document.querySelector("#history").classList.add('hidden');
    document.querySelector(ID).classList.remove('hidden');
    document.querySelector("#historyBtn").classList.remove('btn-success')
}

function historyBtnClicked(ID) {

    document.querySelector(ID).classList.remove('hidden','btn-success');
    document.querySelector("#donate").classList.add('hidden');
    document.querySelector("#donateBtn").classList.remove('btn-success')
}

// Corrected event listeners
document.querySelector("#donateBtn").addEventListener("click", function(){
    donateBtnClicked("#donate");
    document.querySelector("#donateBtn").classList.add('btn-success')
    
});

document.querySelector("#historyBtn").addEventListener("click", function(){
    historyBtnClicked("#history");
    document.querySelector("#historyBtn").classList.add('btn-success')

});

function onClickBlog() {
    location.replace("")
  }

