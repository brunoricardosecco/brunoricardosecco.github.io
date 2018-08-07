/* ==========================================================================
   VARIAVEIS
   ========================================================================== */

var cover = document.getElementById('cover');

var popupReservar = document.getElementById('popupReservar');

var popupConfirm = document.getElementById('popupConfirm');

var popupLiberar = document.getElementById('popupLiberar');

var popupDados = document.getElementById('popupDados');

var popupMinhasReservas = document.getElementById('popupMinhasReservas');

var popupReservarClose = document.getElementById('popupReservarClose');

var popupConfirmClose = document.getElementById('popupConfirmClose');

var popupLiberarClose = document.getElementById('popupLiberarClose');

var popupDadosClose = document.getElementById('popupDadosClose');

var popupMinhasReservasClose = document.getElementById('popupMinhasReservasClose');

var reservarBt = document.getElementById('reservarBt');

var reservarVoltarBt = document.getElementById('reservarVoltarBt');

var reservarConfirmBt = document.getElementById('reservarConfirmBt');

var liberarVoltarBt = document.getElementById('liberarVoltarBt');

var liberarConfirmBt = document.getElementById('liberarConfirmBt');

var salvarBt = document.getElementById('salvarBt');

var liberarReservaBt = document.getElementById('liberarReservaBt');

var popups = [popupReservar, popupConfirm, popupLiberar, popupDados, popupMinhasReservas];

var troca = 0;

var trocaSalaBtn = document.getElementById("trocaSalaBtn");

var nome_sala = document.getElementById("nome_sala");

var nome_sala2 = document.getElementById("nome_sala2");

var adicionarReservas = document.getElementById("adicionarReservas");

var reservasSeta = document.getElementById('reservasSeta');

$wrap = $('#wrap');

/* ==========================================================================
 TROCAR NOME DA SALA NA TELA DE RESERVAS
   ========================================================================== */

trocaSalaBtn.addEventListener("click", function() {
    if (troca == 0) {
        nome_sala.classList.add("animation-animateDesap");
        setTimeout(function() {
            nome_sala.classList.remove("animation-animateDesap");
            nome_sala.style.opacity = "0";
        }, 1000);
        nome_sala2.classList.add("animation-animateAparec");
        setTimeout(function() {
            nome_sala2.classList.remove("animation-animateAparec");
            nome_sala2.style.opacity = "1";
        }, 1000);
        troca = 1;
    } else {
        nome_sala.classList.add("animation-animateAparec");
        setTimeout(function() {
            nome_sala.classList.remove("animation-animateAparec");
            nome_sala.style.opacity = "1";
        }, 1000);
        nome_sala2.classList.add("animation-animateDesap");
        setTimeout(function() {
            nome_sala2.classList.remove("animation-animateDesap");
            nome_sala2.style.opacity = "0";
        }, 1000);
        troca = 0;
    }
});


/* ==========================================================================
 POPUPS
   ========================================================================== */

function closePopup(num) {

    popups[num].style.display = 'none';

    cover.style.display = 'none';

}

function openPopup(num) {

    cover.style.display = 'block';

    setTimeout(function() {

        popups[num].style.display = 'flex';

    }, 300);

}

adicionarReservas.onclick = function() {

    openPopup(0);

}
// Esse evento tem dar bind a cada li gerado posteriormente
liberarReservaBt.onclick = function() {

    closePopup(4);
    openPopup(2);

}

salvarBt.onclick = function() {

    closePopup(3);

}

liberarVoltarBt.onclick = function() {

    closePopup(2);
    openPopup(4);

}

liberarConfirmBt.onclick = function() {

    closePopup(2);

}

reservarBt.onclick = function() {

    closePopup(0);
    openPopup(1);

};

reservarVoltarBt.onclick = function() {

    closePopup(1);
    openPopup(0);

}

reservarConfirmBt.onclick = function() {

    closePopup(1);

}

popupReservarClose.onclick = function() { closePopup(0) };

popupConfirmClose.onclick = function() { closePopup(1) };

popupLiberarClose.onclick = function() { closePopup(2) };

popupDadosClose.onclick = function() { closePopup(3) };

popupMinhasReservasClose.onclick = function() { closePopup(4) };

reservasSeta.onclick = function() { $wrap.animate({ scrollLeft: -($wrap.width()) }, 400); }



//Arrays de dados:
meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
lasemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
diassemana = ["D", "S", "T", "Q", "Q", "S", "S"];
//Carrega Pagina ...
window.onload = function() {
    //fecha actual
    hoy = new Date(); //Data atual
    diasemhoy = hoy.getDay(); //dia semana atual
    diahoy = hoy.getDate(); //dia mes atual
    meshoy = hoy.getMonth(); //mes atual
    annohoy = hoy.getFullYear(); //ano actual
    //HEADER CALENDARIO
    tit = document.getElementById("titulos"); //Mes atual
    ant = document.getElementById("anterior"); //mes anterior
    pos = document.getElementById("posterior"); //mes posterior
    year = document.getElementById("year"); //Ano
    today = document.getElementById("today"); //Dia atual
    // Elementos primeira linha
    f0 = document.getElementById("fila0");
    // Definir elementos iniciais:
    mescal = meshoy; //mes principal
    annocal = annohoy //ano principal
    //iniciar calendario:
    cabecera()
    primeralinea()
    escribirdias()
}
//FUNCIONES de criação do calendario
//cabecera del calendario
function cabecera() {
    year.innerHTML = annocal;
    today.innerHTML = lasemana[diasemhoy] + ", " + diahoy + " de " + meses[meshoy];
    tit.innerHTML = meses[mescal];
    mesant = mescal - 1; //mes anterior
    mespos = mescal + 1; //mes posterior
    if (mesant < 0) {
        mesant = 11;
    }
    if (mespos > 11) {
        mespos = 0;
    }
}
//primera linha do calendario: dias da semana.
function primeralinea() {
    for (i = 0; i < 7; i++) {
        celda0 = f0.getElementsByTagName("th")[i]; //Pega posição do th
        celda0.innerHTML = diassemana[i] //Adiciona os valores do array com dias da semana
    }
}
//Preencher espeaços com os dias
function escribirdias() {
    //Buscar dia de da semana do primeiro dia do mes:
    primeromes = new Date(annocal, mescal, "1") //buscar primeiro dia do mes
    prsem = primeromes.getDay() //buscar día de da semana do dia 1
    diaprmes = primeromes.getDate() //Dia do mes
    prcelda = diaprmes - prsem; //restar días que sobran de la semana
    empezar = primeromes.setDate(prcelda) //empezar= tiempo UNIX 1ª celda
    diames = new Date() //convertir en fecha
    diames.setTime(empezar); //diames=fecha primera celda.
    var count = 0;
    //Percorrer a tabela
    for (i = 1; i < 7; i++) { //localizar linha
        fila = document.getElementById("fila" + i);
        for (j = 0; j < 7; j++) {
            midia = diames.getDate()
            mimes = diames.getMonth()
            mianno = diames.getFullYear()
            celda = fila.getElementsByTagName("td")[j];
            celda.innerHTML = '<a id="elements@' + count + '" class="border-text">' + midia + '</a>';

            var a = document.getElementById('elements@' + count);
            count++

            a.addEventListener('click', function(e) {


                $wrap.animate({ scrollLeft: $wrap.width() }, 200);


            });

            celda.style.color = "black";
            //Dias do outro mes em outra cor
            if (mimes != mescal) {
                celda.style.color = "#a0babc";
                celda.innerHTML = '<a id="elements@' + count + '" class="other-month">' + midia + '</a>';

                var a = document.getElementById('elements@' + count);
                count++

                a.addEventListener('click', function(e) {


                    $wrap.animate({ scrollLeft: $wrap.width() }, 200);


                });

            } else {
                celda.innerHTML = '<a  id="elements@' + count + '" class="border-text">' + midia + '</a>';

                var a = document.getElementById('elements@' + count);
                count++

                a.addEventListener('click', function(e) {


                    $wrap.animate({ scrollLeft: $wrap.width() }, 200);


                });

            }
            //Acrescentar valor
            midia = midia + 1;
            diames.setDate(midia);
        }
    }
}
//Ver mes anterior
function mesantes() {
    nuevomes = new Date() //nova data
    primeromes--; //Receber o dia 1 do mes selecionado
    nuevomes.setTime(primeromes) //cambiamos fecha al mes anterior
    mescal = nuevomes.getMonth() //cambiamos las variables que usarán las funciones
    annocal = nuevomes.getFullYear()
    cabecera() //Chama a função para mudar o titulo
    escribirdias() //Chama a funcão para escrever os valores
}
//ver mes posterior
function mesdespues() {
    nuevomes = new Date() //nova data
    tiempounix = primeromes.getTime() //tiempo de primero mes visible
    tiempounix = tiempounix + (45 * 24 * 60 * 60 * 1000) //le añadimos 45 días
    nuevomes.setTime(tiempounix) //fecha con mes posterior.
    mescal = nuevomes.getMonth() //cambiamos variables
    annocal = nuevomes.getFullYear()
    cabecera() //Chama a função para mudar o titulo
    escribirdias() //Chama a função para escrever os valores
}

// function eventShow(){
//     console.log('oi');



// }

$(document).ready(function() {
    $(".dropdown-trigger").dropdown();


});