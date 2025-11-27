var flag=false;

function playAudio(url) {
    if (!flag) {
        var audio = new Audio(url);
        audio.loop = true;
        audio.play();
        flag=true;
    }
}

