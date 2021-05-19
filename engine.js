function whenIsMybDay(){

                    var $day = document.querySelector("#day");
                    var $month = document.querySelector("#month");
                    var $result = document.querySelector("#result");
                    var $body = document.querySelector("body");
                    
                    if(!isNaN($day.value) && !isNaN($month.value) && $day.value<=31 && $month.value<=12 && $day.value !== "" && $month.value !== ""){

                      var dataAtual = new Date();
                      dataAtual.setHours(0);
                      dataAtual.setMinutes(0);
                      dataAtual.setSeconds(0);
                      dataAtual.setMilliseconds(0);
                      var anoAtual = dataAtual.getFullYear();
                      var dataNiver = new Date(anoAtual,parseInt($month.value)-1,parseInt($day.value));
                      
                      var dataAtualTS = dataAtual.getTime();
                      var dataNiverTS = dataNiver.getTime();
                      
                      if(dataNiverTS<dataAtualTS){
                          dataNiver.setFullYear(++anoAtual);
                          dataNiverTS = dataNiver.getTime();
                      }
                      if(dataNiverTS===dataAtualTS){
                          $result.innerHTML ="🎂️ Feliz Aniversário! 🎉️🎉️🎉️";
                          $result.style.fontSize= "100px";
                          $body.style.animation= "transition 3s infinite"
                          return;
                      }

                      const UM_DIA_TS = 24*60*60*1000 //quantos milisegundos em um dia
                      
                          $result.innerHTML = "Faltam " + (dataNiverTS - dataAtualTS)/UM_DIA_TS + " dias para o seu aniversário!";
                          $result.style.fontSize= "30px";
    
                    }else{
                      alert("Dia ou mês inválido");
                      return
                    }

              
              };               