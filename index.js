

function getWordCount(str){
  let splitted = str.trim().split(/\s+/)
  if(splitted==''){
    return 0;
}
  return splitted.length
}


function counter(str){
    let alphacount = 0
    let numcount = 0
 
    for(i=0;i<=str.length;i++){
       if(str[i]>="a"&& str[i]<="z"   || str[i]>="A"&&str[i]<="Z" ){               
        alphacount++;
       }else if (str[i]>='0' && str[i]<='9'){
        numcount++;
       }
}

document.getElementById("alphabets").value=alphacount
document.getElementById("numbers").value=numcount
};


// || str[i]>="A"&&str[i]<="Z"



function wordCounter(){
    const input = document.getElementById("inputBox").value
    let words = getWordCount(input)

    document.getElementById("words").value=words

    counter(input)
   
    
}