
function isPresent(emotion, key){
    if(emotion.indexOf(key) < emotion.length && emotion.indexOf(key) > -1){
       return true;
    }
    console.log(emotion)
    return false;
}

module.exports.isPresentFunction = isPresent;