function contar(){
    var ini = document.getElementById('ini');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('pass');
    var res = document.getElementById('res');


    if( ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltando alguns dados!')
        res.innerHTML = 'Impossível contar!';
    } else {
        res.innerHTML = 'Contando: <br>';
        var i = Number(ini.value);
        var f = Number(fim.value);
        var p = Number(passo.value);

        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1;
        }

        if(i < f){
            for(c = i; c <=f; c+=p){
                    res.innerHTML += ` ${c},`
            }
            res.innerHTML += ' FIM.';
        } else {
            for (c = i; c >= f; c-=p){
                res.innerHTML += ` ${c},`
            }
            res.innerHTML += ' FIM.';
        }
    }   
}