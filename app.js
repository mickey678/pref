
const httpRequester = require("./request/httpRequester");
const mailAdress = "http://www.val-doise.gouv.fr/Prendre-un-rendez-vous";
var messagePasDeDsipoHoraires = "merci de bien vouloir renouveler votre demande quelques jours plus tard, car tous les rendez-vous mis en ligne ont déjà été réservés.";
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = jQuery = require('jquery')(window);
httpRequester.get(mailAdress).then((resultat)=>{
    var textDuContenu="";
    $("body").html(resultat.body);
    const itemSelected = ".encadrement p";
    $(itemSelected).each(function(index,value){
      if(index<3 && index>1){
        textDuContenu =textDuContenu +""+ $(value).text().trim();
      } 
    })
   var checkAvailableTime = (textDuContenu===messagePasDeDsipoHoraires) ? require("./gmailSender/gmailSender") : false;
})

