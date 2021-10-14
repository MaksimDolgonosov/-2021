window.onload = init;
function init() {
    for (let i = 0; i < document.getElementsByTagName("img").length; i++) {
        document.getElementsByTagName("img")[i].onmouseover = showAnswer;

    };


};

function showAnswer(eventObj) {
    eventObj.target.src = eventObj.target.id + ".jpg";
    //setTimeout(reblur, 1000, eventObj);
    eventObj.target.onmouseout = reblur;
};


function reblur(eventObj) {
    eventObj.target.src = eventObj.target.id + "blur.jpg";

};
