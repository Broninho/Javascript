function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    if(fano.value.length == 0){
        window.alert("ERRO, o campo de ano de nascimento está vazio!")
    } else if (fano.value > ano){
        window.alert("ERRO, o campo de ano de nascimento está errado!")
    } else{
        var fsexo = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';

        if(fsexo[0].checked){
            genero = 'Masculino';
        } else{
            genero = 'Feminino';
        }
        res.innerHTML = `${genero} com ${idade} anos.`;
     }
}