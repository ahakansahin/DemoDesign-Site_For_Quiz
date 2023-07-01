function Quiz(sorular){
    this.sorular=sorular;
    this.soruIndex=0;
    this.dogruCevapSayisi=0;
}

let sorular = [
new Soru("1-Hangisi javascript paket yönetim uygulasıdır?",["Node","Typescript","Npm","Nuget"],"Npm"),
new Soru("2-Hangisi javascript web geliştirme platfor mudur?",["Node","Typescript","Npm","Nuget"],"Node"),
new Soru("3-Hangisi front end kapsamında değerlendirilmez?",["Css","Html","Javascript","Sql"],"Sql"),
new Soru("4-Hangisi back end kapsamında değerlendirilmez?",["Css","Asp.net","Sql","Php"],"Css")
]