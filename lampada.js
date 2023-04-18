const turnOn = document.getElementById ( 'turnON' );
const turnOff = document.getElementById ( 'turnOFF' );
const lamp = document.getElementById ( 'lamp' );

function isLampadaBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
    if ( !isLampadaBroken () ) {
        lamp.src = './img/ligada.jpg';
    }   
}

function lampOff () {
    if ( !isLampadaBroken () ) {
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}

function lampRepair () {
    lamp.src = './img/desligada.jpg';
}

turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ('dblclick', lampBroken);
repair.addEventListener ('click', lampRepair);