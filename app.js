
eventListeners();

function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateWord);

    document.getElementById("language").onchange = function(){
        //UI işlemleri
        ui.changeUI();

    }

}

const translate = new Translate(document.getElementById("word").value,document.getElementById("language").value);
const ui = new UI();
console.log(translate);

function translateWord(e){

    translate.changeParameters(document.getElementById("word").value,document.getElementById("language").value);

    translate.translateWord(function(err,response){
        if(err){
            console.log(err);
        }
        else{
            console.log(response);
            ui.displayTranslate(response);
        }
    }) ;
    
    
    e.preventDefault(); //submit oldugunda sayfanin yenilenmesimi önlemek için
}