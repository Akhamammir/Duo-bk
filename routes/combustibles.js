/*const express = require('express');
const router = express.Router();

const { Op } = require("sequelize");
const db = require('../config/database');

router.post('/', (req, res, next) => {

  const { 
    IdEquipo,
    IdEmpleadoOperador,
    ContadorInicial,
    Gas, Diesel
  } = req.body.data

  const IdMovAlmacenNumerico = "  ";
  const IdOrdenCompra = "  ";
  const IdProveedor = "  ";
  const Fecha = new Date();
  const IdEmpleadoRecibio = "  ";
  const IdAlmacenDestino = "  ";
  const IdUsuarioCreo = "  ";
  const IdObraOrigen = "  ";
  const IdSucursal = "  ";
  const Notas = "  ";
  const TipoMovAlmacen = "  ";
  const IdAlmacenOrigen = "  ";
  const IdEmpleadoEntrego = "  ";
  const IdFacturaDeProveedor = "  ";
  const Created = "  ";
  const Pedimento = "  ";
  const TipoPedimento = "  ";
  const DescripcionCorta = "  ";
  const Importe = "  ";
  const PorcentajeIVA = "  ";
  const ImporteTotal = "  ";
  const IdMoneda = "  ";
  const TipoDeCambio = "  ";
  const IdRequisicion = "  ";
  const IdObraDestino = "  ";
  const FolioUsuario = "  ";
  const NumeroEmbarque = "  ";
  const NumeroDeGuia = "  ";
  const FolioFactura = "  ";
  const IdProveedorTransportista = "  ";
  const IdOrdenTrabajo = "  ";
  const IdEquipo = "  ";
  const Modulo = "  ";
  const IdRequisicionDeAlmacen = "  ";
  const Poliza = "  ";
  const ImporteIVA = "  ";
  const TipoAfectacion = "  ";
  const IdViaje = "  ";
  const IdFacturacionClientes = "  ";
  const IdMovAlmacenSalidaxPrestamo = "  ";
  const IdLectura = "  ";
  const IdEstatus = "  ";
  const IdUsuarioAutorizo = "  ";
  const FechaAutorizacion = "  ";
  const NotasAutorizacion = "  ";
  const NumeroDeLote = "  ";
  const LugarDePesca = "  ";
  const NumeroDeArribo = "  ";
  const IdEstatusRecepcion = "  ";
  const IdDescargaDeBarcos = "  ";
  const IdClienteDevolucionDeEmpaques = "  ";
  const EsDevolucionDeEmpaques = "  ";
  const EsBajaDeHerramienta = "  ";
  const IdMovHerramientaResguardo = "  "; 

  const IdMovAlmacen = "   ";
  const IdInsumo = "   ";
  const Cantidad = "   ";
  const IdObraOrigen = "   ";
  const IdSucursal = "   ";
  const IdUnidad = "   ";
  const Notas = "   ";
  const CantidadUtilizada = "   ";
  const Precio = "   ";
  const IdObraDestino = "   ";
  const Importe = "   ";
  const IdAreaCosteo = "   ";
  const TipoCosto = "   ";
  const PrecioSegunOC = "   ";
  const Created = "   ";
  const IdUsuarioCreo = "   ";
  const ContadorEquipo = "   ";
  const ContadorMotor = "   ";
  const FolioInternoSuministro = "   ";
  const IdEmpleadoOperador = "   ";
  const IdEquipo = "   ";
  const IdObraUbicacion = "   ";
  const IdOrdenTrabajo = "   ";
  const IdAreaCosteoDestino = "   ";
  const Costo = "   ";
  const CostoD = "   ";
  const CostoP = "   ";
  const PrecioDeVenta = "   ";
  const ImporteD = "   ";
  const IdEspecieSegunMarea = "   ";
  const CantidadDeEmpaques = "   ";
  const KgsProduccionBruta = "   ";
  const PesoDeEmpaques = "   ";
  const IdDescargaDeBarcos = "   ";
  const IdAlmacen = "   ";
  const PeriodoDeCargo = "   ";
  const TipoCostoDestino = "   ";
  const PeriodoDeCargoDestino = "   ";
  
const queryAlmacen = `INSERT INTO MovsAlmacen (IdMovAlmacenNumerico, IdOrdenCompra, IdProveedor, Fecha, IdEmpleadoRecibio, IdAlmacenDestino, IdUsuarioCreo, IdObraOrigen, IdSucursal, Notas, TipoMovAlmacen, IdAlmacenOrigen, IdEmpleadoEntrego, IdFacturaDeProveedor, Created, Pedimento, TipoPedimento, DescripcionCorta, Importe, PorcentajeIVA, ImporteTotal, IdMoneda, TipoDeCambio, IdRequisicion, IdObraDestino, FolioUsuario, NumeroEmbarque, NumeroDeGuia, FolioFactura, IdProveedorTransportista, IdOrdenTrabajo, IdEquipo, Modulo, IdRequisicionDeAlmacen, Poliza, ImporteIVA, TipoAfectacion, IdViaje, IdFacturacionClientes, IdMovAlmacenSalidaxPrestamo, IdLectura, IdEstatus, IdUsuarioAutorizo, FechaAutorizacion, NotasAutorizacion, NumeroDeLote, LugarDePesca, NumeroDeArribo, IdEstatusRecepcion, IdDescargaDeBarcos, IdClienteDevolucionDeEmpaques, EsDevolucionDeEmpaques, EsBajaDeHerramienta, IdMovHerramientaResguardo) VALUES (${IdMovAlmacenNumerico}, ${IdOrdenCompra}, ${IdProveedor}, ${Fecha}, ${IdEmpleadoRecibio}, ${IdAlmacenDestino}, ${IdUsuarioCreo}, ${IdObraOrigen}, ${IdSucursal}, ${Notas}, ${TipoMovAlmacen}, ${IdAlmacenOrigen}, ${IdEmpleadoEntrego}, ${IdFacturaDeProveedor}, ${Created}, ${Pedimento}, ${TipoPedimento}, ${DescripcionCorta}, ${Importe}, ${PorcentajeIVA}, ${ImporteTotal}, ${IdMoneda}, ${TipoDeCambio}, ${IdRequisicion}, ${IdObraDestino}, ${FolioUsuario}, ${NumeroEmbarque}, ${NumeroDeGuia}, ${FolioFactura}, ${IdProveedorTransportista}, ${IdOrdenTrabajo}, ${IdEquipo}, ${Modulo}, ${IdRequisicionDeAlmacen}, ${Poliza}, ${ImporteIVA}, ${TipoAfectacion}, ${IdViaje}, ${IdFacturacionClientes}, ${IdMovAlmacenSalidaxPrestamo}, ${IdLectura}, ${IdEstatus}, ${IdUsuarioAutorizo}, ${FechaAutorizacion}, ${NotasAutorizacion}, ${NumeroDeLote}, ${LugarDePesca}, ${NumeroDeArribo}, ${IdEstatusRecepcion}, ${IdDescargaDeBarcos}, ${IdClienteDevolucionDeEmpaques}, ${EsDevolucionDeEmpaques}, ${EsBajaDeHerramienta}, ${IdMovHerramientaResguardo})`;
  
  const queryAlmacenD = `INSERT INTO MovsAlmacenD (IdMovAlmacen, IdInsumo, Cantidad, IdObraOrigen, IdSucursal, IdUnidad, Notas, CantidadUtilizada, Precio, IdObraDestino, Importe, IdAreaCosteo, TipoCosto, PrecioSegunOC, Created, IdUsuarioCreo, ContadorEquipo, ContadorMotor, FolioInternoSuministro, IdEmpleadoOperador, IdEquipo, IdObraUbicacion, IdOrdenTrabajo, IdAreaCosteoDestino, Costo, CostoD, CostoP, PrecioDeVenta, ImporteD, IdEspecieSegunMarea, CantidadDeEmpaques, KgsProduccionBruta, PesoDeEmpaques, IdDescargaDeBarcos, IdAlmacen, PeriodoDeCargo, TipoCostoDestino, PeriodoDeCargoDestino) VALUES (${IdMovAlmacen}, ${IdInsumo}, ${Cantidad}, ${IdObraOrigen}, ${IdSucursal}, ${IdUnidad}, ${Notas}, ${CantidadUtilizada}, ${Precio}, ${IdObraDestino}, ${Importe}, ${IdAreaCosteo}, ${TipoCosto}, ${PrecioSegunOC}, ${Created}, ${IdUsuarioCreo}, ${ContadorEquipo}, ${ContadorMotor}, ${FolioInternoSuministro}, ${IdEmpleadoOperador}, ${IdEquipo}, ${IdObraUbicacion}, ${IdOrdenTrabajo}, ${IdAreaCosteoDestino}, ${Costo}, ${CostoD}, ${CostoP}, ${PrecioDeVenta}, ${ImporteD}, ${IdEspecieSegunMarea}, ${CantidadDeEmpaques}, ${KgsProduccionBruta}, ${PesoDeEmpaques}, ${IdDescargaDeBarcos}, ${IdAlmacen}, ${PeriodoDeCargo}, ${TipoCostoDestino}, ${PeriodoDeCargoDestino})`;
  
  db.query(queryAlmacen)
    .then((data) => {
      //console.log('Soolushun:',data);
      res.send({
        data
      });
    })
    .catch((e) => console.log('Ha ocurrido un error: ', e))
});

module.exports = router;

/*SELECT TOP 1000 [IdMovAlmacen]
      ,[IdMovAlmacenNumerico]
      ,[IdOrdenCompra]
      ,[IdProveedor]
      ,[Fecha]
      ,[IdEmpleadoRecibio]
      ,[IdAlmacenDestino]
      ,[IdUsuarioCreo]
      ,[IdObraOrigen]
      ,[IdSucursal]
      ,[Notas]
      ,[TipoMovAlmacen]
      ,[IdAlmacenOrigen]
      ,[IdEmpleadoEntrego]
      ,[IdFacturaDeProveedor]
      ,[Created]
      ,[Pedimento]
      ,[TipoPedimento]
      ,[DescripcionCorta]
      ,[Importe]
      ,[PorcentajeIVA]
      ,[ImporteTotal]
      ,[IdMoneda]
      ,[TipoDeCambio]
      ,[IdRequisicion]
      ,[IdObraDestino]
      ,[FolioUsuario]
      ,[NumeroEmbarque]
      ,[NumeroDeGuia]
      ,[FolioFactura]
      ,[IdProveedorTransportista]
      ,[IdOrdenTrabajo]
      ,[IdEquipo]
      ,[Modulo]
      ,[IdRequisicionDeAlmacen]
      ,[Poliza]
      ,[ImporteIVA]
      ,[TipoAfectacion]
      ,[IdViaje]
      ,[IdFacturacionClientes]
      ,[IdMovAlmacenSalidaxPrestamo]
      ,[IdLectura]
      ,[IdEstatus]
      ,[IdUsuarioAutorizo]
      ,[FechaAutorizacion]
      ,[NotasAutorizacion]
      ,[NumeroDeLote]
      ,[LugarDePesca]
      ,[NumeroDeArribo]
      ,[IdEstatusRecepcion]
      ,[IdDescargaDeBarcos]
      ,[IdClienteDevolucionDeEmpaques]
      ,[EsDevolucionDeEmpaques]
      ,[EsBajaDeHerramienta]
      ,[IdMovHerramientaResguardo]
  FROM [DESUR].[dbo].[MovsAlmacen]*/
var express = require('express');
var router = express.Router();
const { Op } = require('sequelize');
const db = require('../config/database');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.query('SELECT TOP 1 IdMovAlmacen, Fecha FROM MovsAlmacen ORDER BY Fecha DESC')
    .then((data) => {
      const {IdMovAlmacen} = data[0][0]
    // usar idAlmacen para registrar MovAlmacenD
      console.log(IdMovAlmacen)

      res.send(data[0]);
    })
    .catch((e) => console.log('Ha ocurrido un error: ', e))
});

module.exports = router;
