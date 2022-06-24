const calculadora = document.getElementById('calcular')

function litrosAgua ()  {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    let multiplicador = 0 ;
    if (nome.value !== '' && idade !== '' && peso !== '') {

        if (idade <= 17) {
            multiplicador = 40;
        } else if (idade >17 && idade <=55) {
            multiplicador = 35;
        }else if (idade >55 && idade<=65) {
            multiplicador = 30;
        }else if (idade >65) {
            multiplicador = 25;
        }
        
        const qtdAguaIdade = (peso * multiplicador).toFixed(1);
        resultado.textContent = `${nome} você deve beber aproximadamente ${qtdAguaIdade} (ml) de água por dia.`
        
    }
}
calculadora.addEventListener('click', litrosAgua);



