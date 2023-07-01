function Soru(soruMetni, secenekler, dogruCevap){
    this.soruMetni= soruMetni;
    this.secenekler= secenekler;
    this.dogruCevap= dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap==this.dogruCevap;
}