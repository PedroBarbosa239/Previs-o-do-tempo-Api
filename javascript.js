const previsao = async (input) => {

//componentes e const

const apikey = "aac31ce1b7560041a78f477df40f2772"
const cityAtual = input;

const container = document.querySelector('.titulo-cidade');
const temperaturaatual = document.querySelector('.temperatura_atual');
const umidade = document.querySelector('.umidade');
const velocidadevento = document.querySelector('.velocidade_vento');
const descricao = document.querySelector('.desc');

const conta = document.querySelector('.container');
    
//fetch
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityAtual}&units=metric&appid=${apikey}&lang=pt_br`);
    const data = await response.json();   
  
       console.log(data)

    imagemNuvem(data)     

//implementações no html
       container.innerHTML= data.name;
       temperaturaatual.innerHTML= `${parseInt(data.main.temp)} ° C ` ;
       umidade.innerHTML= `${data.main.humidity} % ` ;
       velocidadevento.innerHTML= `${(data.wind.speed).toFixed(2)} km ` ;
       descricao.innerHTML= data.weather[0].description ;

//css animação
       conta.style.height = "450px";
       conta.style.transition = "ease-in-out 0.5s";
    
       temperaturaatual.style.animationName = 'movimento';
       temperaturaatual.style.animationDuration = '0.9s';

       umidade.style.animationName = 'movimento';
       umidade.style.animationDuration = '0.9s';

       velocidadevento.style.animationName = 'movimento';
       velocidadevento.style.animationDuration = '0.9s';
       

//resetando input
       const pesquisa = document.querySelector('#inputs');
       pesquisa.value = "";
   }
   

   
   function imagemNuvem (data) {

    const previsao = document.querySelector('#previsao_img');
   
    switch (data.weather[0].description) {
        case "nublado":
            previsao.setAttribute("src", "images/nuvensn.png");
            previsao.style.height = "155px";
            break;

            case "trovoadas":
                previsao.setAttribute("src", "images/trovao.png");
                previsao.style.height = "140px";
                previsao.style.width = "145px";
                break;

                case "céu limpo":
                    previsao.setAttribute("src", "images/ceu-limpo.png");
                    previsao.style.height = "140px";
                    previsao.style.width = "145px";
                    break;

                    case "chuva leve":
                        previsao.setAttribute("src", "images/chuba_leve.png");
                        previsao.style.height = "140px";
                        previsao.style.width = "145px";
                        break;

                        case "chuva moderada":
                        previsao.setAttribute("src", "images/chuvamoderada.png");
                        previsao.style.height = "140px";
                        previsao.style.width = "145px";
                        break;

                        case "neve":
                            previsao.setAttribute("src", "images/floco-de-neve.png");
                            previsao.style.height = "140px";
                            previsao.style.width = "145px";
                            break;

                            case "algumas nuvens":
                                previsao.setAttribute("src", "images/algumasnuvens.png");
                                previsao.style.height = "130px";
                                previsao.style.width = "140px";
                                break;

                                case "chuva forte":
                                    previsao.setAttribute("src", "images/trovao.png");
                                    previsao.style.height = "130px";
                                    previsao.style.width = "140px";
                                    break;
        default:
            break;
    }
   }

   