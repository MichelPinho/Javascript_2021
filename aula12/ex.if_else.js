var idade = 101
if (idade < 16){
    console.log('Você Não vota.')
}   else if(idade < 18){
        console.log('Você pode votar, mas seu voto é facultativo.')
    }   else if(idade > 18 && idade < 60){
            console.log('Voto obrigatório.')
        }   else{
                console.log('Você pode votar, mas seu voto é facultativo.')
            }
