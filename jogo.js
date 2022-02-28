var altura = 0    //declarar variaveis
var largura = 0
var vidas= 1
var tempo = 10

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {

	criaMosquitoTempo = 1500

}else if (nivel === 'dificil') {

	criaMosquitoTempo = 1000
}else if (nivel === 'chucknorris') {
	criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {

	altura = window.innerHeight  //definir altura interna
	largura = window.innerWidth  // definir largura interna


	console.log(largura, altura)  //mostra no console a altura e a largura
}

ajustaTamanhoPalcoJogo()  //chamar função

	var cronometro =setInterval(function(){
		tempo -= 1

		if(tempo < 0) {
			clearInterval(cronometro)   //limpar memoria
			clearInterval(criaMosquito)

			window.location.href = 'vitoria.html'

		} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
		
	},1000)




	function posicaoRandomica() {

		//remover mosquito anterior (caso exista)
		if(document.getElementById('mosquito')) {
			document.getElementById('mosquito').remove() //essa função remove  o mosquito anterior

			//console.log(elemento selecionado foi: 'v' + vidas)

			if(vidas > 3)  {
				window.location.href = 'fim_de_jogo.html'    //para ir para a tela de fim de jogo depois que perder os 3 pontos
			} else {



			document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"

			vidas++

			}	
		}

		var posicaoX = Math.floor(Math.random() * largura) - 90  //reproduzir de foma aleatoria 0 a 1, precisamos que seja 
		var posicaoY = Math.floor(Math.random() * altura)  -90 //reproduzido de forma aleatoria o tamanho da tela, que ja foi definido pela largura e altura
		//math.floor é para arredondar valor                 -90 é para o mosquito não ficar fora da tela


		posicaoX = posicaoX < 0 ? 0 : posicaoX		
		//posiçãoX for menor que zero, se for(?) recebe zero, se não recebe ela mesmo
		posicaoY = posicaoY < 0 ? 0 : posicaoY		
		console.log(posicaoX, posicaoY)

		//criar elemento html

		var mosquito = document.createElement('img')
		//mosquito variavel

		mosquito.src = 'imagens/mosquito.png'
		mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
		mosquito.style.left = posicaoX + 'px'  //pra formar a coordenada em pixel
		mosquito.style.top = posicaoY + 'px'
		mosquito.style.position = 'absolute'
		mosquito.id = 'mosquito'
		mosquito.onclick = function() {
			this.remove()     //remove o elemento(mosquito) quando clica neles
		}


		document.body.appendChild(mosquito)    //anexar (filho) no body

		console.log(tamanhoAleatorio())
	}

	function tamanhoAleatorio(){
		var classe = Math.floor( Math.random() * 3 )//random vai de 0 a proximo de 1
								//Math.floor para arredondar numero para baixo

		switch(classe) {         //switch para tomada de decisão
			case 0:
				return 'mosquito1'

			case 1:
				return 'mosquito2'

			case 2:
				return 'mosquito3'

		} 
		console.log(classe)

	}

	function ladoAleatorio() { 
	   //para deixar o mosquito virado para esquerda e direita aleatorio
		var classe = Math.floor(Math.random() * 2)

		switch(classe) {
			case 0:
				return 'ladoA'

			case 1: 
				return 'ladoB'
		}



	}console.log(ladoAleatorio())


