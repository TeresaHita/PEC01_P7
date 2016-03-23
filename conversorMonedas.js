(function(angular) {

angular.module('conversorMonedas', [])
  .factory('conversorMoneda', function() {
    /*monedas con las que vamos a trabajar en la conversion*/
	var monedas = ['USD', 'EUR', 'GBP'];
    /*definicion como constante el valor de cada moneda*/
	const valorCambio = {
      USD: 1,
      EUR: 0.83,
      GBP: 1.4
    };
	/*llamada a la funcion que realiza la conversion pasando como parametros la cantidad, moneda de entrada y moneda de salida*/
    var conversion = function (cantidad, monedaEntrada, monedaSalida) {
      /*devuelve la operacion de conversion que es la multiplicacion de la cantifad por el valor de la moneda de salida,
	  dividido por el valor de la moneda de entrada*/
	  /*destaco que al retornar el valor lo hace con un redondeo a 3 decimales con toFixed*/
	  return (cantidad * valorCambio[monedaSalida] / valorCambio[monedaEntrada]).toFixed(3);
    };
    return {
	  /*el conversor de la moneda devuelve por un lado las monedas y por otro el resultado de la conversion*/
      monedas: monedas,
      conversion: conversion
    };
  });
})(window.angular);

