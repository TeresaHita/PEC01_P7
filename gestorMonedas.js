(function(angular) {

angular.module('gestorMonedas', ['conversorMonedas'])
  .controller('ControladorGestorMonedas', ['conversorMoneda', function(conversorMoneda) {
    /*inicialización de variables ctd (cantidad), moneda de entrada, moneda de salida, monedas con su conversion*/
	this.ctd	= 1;
    this.monedaEntrada = 'EUR';
	this.monedaSalida = 'USD';	
    this.monedas = conversorMoneda.monedas;
	/*funcion que calcula el total que recibe como parametros la ctd, moneda de entrada y moneda de salida - devuelve la conversion*/
    this.total = function total(monedaSalida) {
      return conversorMoneda.conversion(this.ctd, this.monedaEntrada, this.monedaSalida);
    };
  }]);
})(window.angular);

