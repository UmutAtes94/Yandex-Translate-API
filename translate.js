function Translate(word,language){

    this.word = word;
    this.language = language;
    this.apikey = "trnsl.1.1.20190126T212647Z.d035c0a8c8f08055.280d3cd7603768cabd1f2a6722aa842d5e57c8b3"

    //XHR Objesi

    this.xhr = new XMLHttpRequest();

}

Translate.prototype.translateWord = function(callback){
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;
    
    // GET REQUEST
    this.xhr.open("GET",endpoint,true);
    
    this.xhr.onload = () =>{ //requestten response dönerse
        if(this.xhr.status === 200){ //sıkıntı olmadan dönmüşse
            console.log(typeof(this.xhr.responseText)); //string döndürüyor JSON'a cevircez
            console.log(this.xhr.responseText);

            const json = JSON.parse(this.xhr.responseText);
            //console.log(json);
            const text = json.text[0];

            //console.log(text);

            callback(null,text);


        }
        else{
            callback("bir hata olustu!!!",null)
        }
    };

    this.xhr.send();


}

Translate.prototype.changeParameters = function(newWord,newLanguage){
    this.word = newWord;
    this.language = newLanguage;
    console.log(language);
}