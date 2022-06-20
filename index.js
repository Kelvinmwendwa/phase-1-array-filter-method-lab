// Code your solution here
function findMatching(drivers, nameString){
    return drivers.filter(function(string){
        return((string.toLowerCase()) === nameString.toLowerCase())
    })
}

function fuzzyMatch(drivers, letters){
    return drivers.filter(function(pLetter){
        if((pLetter.indexOf(letters)) === 0){
            return true;
        }else if (pLetter.indexOf(letters)>0){
            return false;
        }
    })
}

function matchName(drivers, string){
    return drivers.filter(function(element){
        return element.name === string;
    })
}