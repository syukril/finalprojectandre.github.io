const txtElement =['Freelance','Web Developer','Grapihc Desaigner'];
let count =0;
let txtIndex = 0;
let currentTxt ='';
let word='';
(function ngetik(){
    if(count == txtElement.length){
        count=0;
    }
    currentTxt=txtElement[count];
    word=currentTxt.slice(0,++txtIndex);
    document.querySelector('.efek-ngetik').textContent=word;
    if(word.length==currentTxt.length){
        count++;
        txtIndex=0;
    }
    setTimeout(ngetik,300);
      
})();

