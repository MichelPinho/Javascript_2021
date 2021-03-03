function verificar (){
    var data = new Date()
    var ano = data.getFullYear() /*fullYear -> é o método para daar o ano completo. Ex: 1998. */
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('Informação incorreta, refaça a operação !')
    }   else{
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fAno.value)
            
        }

}