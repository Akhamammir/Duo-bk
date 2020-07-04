const express = require('express');
const router = express.Router();

const { Op } = require('sequelize');
const db = require('../config/database');

router.post('/', (req, res, next) => {
  console.log('ln-8', req.body);

  function completar(x) {
    if (0 <= x && x < 10) return '0' + x.toString();
    if (-10 < x && x < 0) return '-0' + (-1 * x).toString();
    return x.toString();
  }

  Date.prototype.toDateTimeFormat = function () {
    return (
      this.getFullYear() +
      '-' +
      completar(1 + this.getMonth()) +
      '-' +
      completar(this.getDate()) +
      ' ' +
      completar(this.getHours()) +
      ':' +
      completar(this.getMinutes()) +
      ':' +
      completar(this.getSeconds())
    );
  };
 //const Fecha = new Date().toDateTimeFormat();

  var {
    IdEquipo,
    IdEmpleadoOperador,
    IdObra,
    ContadorInicial, //Horometro Inicial
    ContadorFinal, //Horometro Inicial
    HrsEspera, //horas de trasnporte
    HrsInactivo, //Horas Ociosas
    HrsMantenimiento, //Horas de Reparación
    HrsEfectivo, //Horas de Trabajo
    TipoCombustible,
    CantidadGas,
    CantidadDiesel,
    CantidadGrease,
    CantidadOil,
    CantidadOilM,
    CantidadOilT,
    Notas,
    Fecha,
    FolioInternoSuministro,
    ContadorEquipo// valor 2do Horometro
  } = req.body.data;

  let FechaAnterior = new Date(Fecha);
  FechaAnterior = new Date(FechaAnterior.setDate(Fecha.getDate()-1)).toDateTimeFormat();
  
  Fecha = new Date(Fecha).toDateTimeFormat();
  
  const Insumos = {
    GASOLINA: {id:'COMB-004',cantidad:CantidadGas},
    DIESEL:{id:'COMB-006',cantidad:CantidadDiesel}
  }
  
  ContadorInicial = +ContadorInicial;
  ContadorFinal = +ContadorFinal;
  console.log(HrsEspera);
  console.log('begin declarate values');
try {
  //Campos Tabla usosEquipos
  var IdUsoEquipo;
  const Turno = "''";
  const MotivoEspera = "''";
  const Trabajo = "''";
  //const Notas = "''";
  const Horario = "''";
  const IdContratoArrendamiento = 0;
  const CostoUnitario = 0;
  const MotivoInactivo = "''";
  const MotivoMantenimiento = "''";
  const VolumenTrabajo = 0;
  const TipoCosto = 0;
  const Created = Fecha;
  const ContadorMotor = 0;
  const Costo = 0;
  const IdUsuarioCreo = 261; //usuario logeado
  const HorasNormales = 0;
  const HorasExtras = 0;
  const HorasCucharon = 0;
  const HorasMartillo = 0;
  const SueldoxHoraNormal = 0;
  const SueldoxHoraExtra = 0;
  const SueldoxHoraCucharon = 0;
  const SueldoxHoraMartillo = 0;
  const ImporteNormal = 0;
  const ImporteExtra = 0;
  const ImporteCucharon = 0;
  const ImporteMartillo = 0;
  const TipoDeCosto = 'DIR';//Check wtf here
  const IdUnidad = 0;

  //
  //Valores Tabla MovsAlmacen
  //
  var IdMovAlmacen; //char
  var IdMovAlmacenNumerico; //number
  const IdOrdenCompra = '  '; //char
  const IdProveedor = '  '; //char
  // const Fecha = '  ';//datetime
  const IdEmpleadoRecibio = 0; //number-usuario logeado
  const IdAlmacenDestino = 0; //number FIX HERE
  // const IdUsuarioCreo = '  ';//number-usuario logeado
  const IdObraOrigen = '  '; //char FIX HERE RENTAS 2020
  const IdSucursal = 1; //number
  // const Notas = '  ';//text
  const TipoMovAlmacen = 'S'; //char
  const IdAlmacenOrigen = 22; //number
  const IdEmpleadoEntrego = 0; //number
  const IdFacturaDeProveedor = '  '; //char
  // const Created = '  ';//datetime
  const Pedimento = '  '; //char
  const TipoPedimento = '  '; //char
  const DescripcionCorta = '  '; //text
  const Importe = 0; //float
  const PorcentajeIVA = 0; //float
  const ImporteTotal = 0; //float
  const IdMoneda = 0; //number
  const TipoDeCambio = 0; //float-precioDolar
  const IdRequisicion = '  '; //char
  const IdObraDestino = '  '; //char - RENTAS"="="
  const FolioUsuario = '  '; //char
  const NumeroEmbarque = '  '; //char
  const NumeroDeGuia = '  '; //char
  const FolioFactura = '  '; //char
  const IdProveedorTransportista = '  '; //char
  const IdOrdenTrabajo = '  '; //char
  // const IdEquipo = '  ';//char
  const Modulo = '2'; //char
  const IdRequisicionDeAlmacen = '  '; //char
  const Poliza = '  '; //char
  const ImporteIVA = 0; //float
  const TipoAfectacion = 'S'; //char(1) - E/S
  const IdViaje = '  '; //char
  const IdFacturacionClientes = '  '; //char
  const IdMovAlmacenSalidaxPrestamo = '  '; //char
  const IdLectura = '  '; //char
  const IdEstatus = 1; //number - 1=Pendiente
  const IdUsuarioAutorizo = 0; //number
  const FechaAutorizacion = Fecha; //datetime
  const NotasAutorizacion = '  '; //text
  const NumeroDeLote = '  '; //char
  const LugarDePesca = '  '; //char
  const NumeroDeArribo = '  '; //char
  const IdEstatusRecepcion = 0; //number
  const IdDescargaDeBarcos = 0; //number
  const IdClienteDevolucionDeEmpaques = '  '; //char
  const EsDevolucionDeEmpaques = 0; //int
  const EsBajaDeHerramienta = 0; //int
  const IdMovHerramientaResguardo = 0; //number

  //
  //Valores Tabla MovsAlmacenD
  //
  console.log(TipoCombustible.trim(), 'Ln 156 rsult')
  var ID;
  //var IdMovAlmacen = '   ';//char
  const IdInsumo = Insumos[''+TipoCombustible.trim().toUpperCase()].id; //char COMB-004|COMB-006 --TipoCombustible
  const Cantidad = Insumos[''+TipoCombustible.trim().toUpperCase()].cantidad; //float CantidadGas | CantidadDiesel
  // const IdObraOrigen = '   '; //char
  // const IdSucursal = '   ';//number
  // const IdUnidad = '   ';//number
  // const Notas = '   ';//text
  const CantidadUtilizada = 0; //float
  const Precio = 0; //float
  // const IdObraDestino = '   ';//char
  // const Importe = '   ';//float
  const IdAreaCosteo = 0; //number
  // const TipoCosto = '   ';//Char(3)
  const PrecioSegunOC = 0; //float
  // const Created = '   ';//datetime
  // const IdUsuarioCreo = '   ';//number
  //const ContadorEquipo = 0; //float
  // const ContadorMotor = 0;//float
 // const FolioInternoSuministro = '   '; //char
  // const IdEmpleadoOperador = '   ';//number
  // const IdEquipo = '   ';//char
  const IdObraUbicacion = '   '; //char - RENTAS2020
  // const IdOrdenTrabajo = '   ';//char
  const IdAreaCosteoDestino = 0; //number
  // const Costo = '   ';//float
  const CostoD = 0; //float
  const CostoP = 0; //float
  const PrecioDeVenta = 0; //float
  const ImporteD = 0; //float
  const IdEspecieSegunMarea = 0; //number
  const CantidadDeEmpaques = 0; //float
  const KgsProduccionBruta = 0; //float
  const PesoDeEmpaques = 0; //float
  // const IdDescargaDeBarcos = '   ';//number
  const IdAlmacen = 0; //number
  const PeriodoDeCargo = '1900-01-01 00:00:00.000'; //datetime
  const TipoCostoDestino = '   '; //char(3)
  const PeriodoDeCargoDestino = '1900-01-01 00:00:00.000'; //datetime

  console.log('begin declarate querys');
  
    //obtener ultimo ID registrado en UsosEquipo
    console.log('begin execute querys');
    db.query(
      'SELECT TOP 1 IdUsoEquipo FROM UsosEquipo ORDER BY IdUsoEquipo DESC'
    )
      .then((data) => {
        console.log('query IdUsoEquipo', data);
        IdUsoEquipo = data[0][0].IdUsoEquipo + 1;
        console.log('IdUsoEquipo: ', IdUsoEquipo);

        const queryUsosEquipos = `INSERT INTO UsosEquipo (IdUsoEquipo, IdEquipo, IdEmpleadoOperador, Fecha ,Turno ,ContadorInicial ,ContadorFinal ,HrsEspera ,MotivoEspera ,Trabajo ,Notas ,Horario ,IdContratoArrendamiento ,CostoUnitario ,HrsInactivo ,MotivoInactivo ,HrsMantenimiento ,MotivoMantenimiento ,HrsEfectivo ,VolumenTrabajo ,TipoCosto ,Created ,IdObra ,ContadorMotor ,Costo ,IdUsuarioCreo ,HorasNormales ,HorasExtras ,HorasCucharon ,HorasMartillo ,SueldoxHoraNormal ,SueldoxHoraExtra ,SueldoxHoraCucharon ,SueldoxHoraMartillo ,ImporteNormal ,ImporteExtra ,ImporteCucharon ,ImporteMartillo ,TipoDeCosto ,IdUnidad ) VALUES (${IdUsoEquipo},'${IdEquipo}',${IdEmpleadoOperador},'${FechaAnterior}',${Turno},${ContadorInicial},${ContadorFinal},${HrsEspera},${MotivoEspera},${Trabajo},${Notas},${Horario},${IdContratoArrendamiento},${CostoUnitario},${HrsInactivo},${MotivoInactivo},${HrsMantenimiento},${MotivoMantenimiento},${HrsEfectivo},${VolumenTrabajo},${TipoCosto},'${Created}','${IdObra}',${ContadorMotor},${Costo},${IdUsuarioCreo},${HorasNormales},${HorasExtras},${HorasCucharon},${HorasMartillo},${SueldoxHoraNormal},${SueldoxHoraExtra},${SueldoxHoraCucharon},${SueldoxHoraMartillo},${ImporteNormal},${ImporteExtra},${ImporteCucharon},${ImporteMartillo},'${TipoDeCosto}',${IdUnidad})`;

        //registro usosEquipo
        db.query(queryUsosEquipos)
          .then((data) => {
            console.log('queryUsosEquipos:', data);

            //obtener ultimo ID registrado en MovsAlmacen
            db.query(
              'SELECT TOP 1 IdMovAlmacenNumerico FROM MovsAlmacen ORDER BY IdMovAlmacenNumerico DESC'
            )
              .then((data) => {
                console.log('query IdMovAlmacenNumerico', data);
                IdMovAlmacenNumerico = data[0][0].IdMovAlmacenNumerico + 1;
                IdMovAlmacen = `1-${data[0][0].IdMovAlmacenNumerico + 1}`;

                const queryAlmacen = `INSERT INTO MovsAlmacen (IdMovAlmacen, IdMovAlmacenNumerico, IdOrdenCompra , IdProveedor, Fecha, IdEmpleadoRecibio, IdAlmacenDestino, IdUsuarioCreo, IdObraOrigen, IdSucursal, Notas, TipoMovAlmacen, IdAlmacenOrigen, IdEmpleadoEntrego, IdFacturaDeProveedor, Created, Pedimento, TipoPedimento, DescripcionCorta, Importe, PorcentajeIVA, ImporteTotal, IdMoneda, TipoDeCambio, IdRequisicion, IdObraDestino, FolioUsuario, NumeroEmbarque, NumeroDeGuia, FolioFactura, IdProveedorTransportista, IdOrdenTrabajo, IdEquipo, Modulo, IdRequisicionDeAlmacen, Poliza, ImporteIVA, TipoAfectacion, IdViaje, IdFacturacionClientes, IdMovAlmacenSalidaxPrestamo, IdLectura, IdEstatus, IdUsuarioAutorizo, FechaAutorizacion, NotasAutorizacion, NumeroDeLote, LugarDePesca, NumeroDeArribo, IdEstatusRecepcion, IdDescargaDeBarcos, IdClienteDevolucionDeEmpaques, EsDevolucionDeEmpaques, EsBajaDeHerramienta, IdMovHerramientaResguardo) VALUES ('${IdMovAlmacen}', ${IdMovAlmacenNumerico}, '${IdOrdenCompra}', '${IdProveedor}',  '${Fecha}',  ${IdEmpleadoRecibio}, ${IdAlmacenDestino}, ${IdUsuarioCreo}, '${IdObraOrigen}',  ${IdSucursal}, '${Notas}',  '${TipoMovAlmacen}', ${IdAlmacenOrigen}, ${IdEmpleadoEntrego}, '${IdFacturaDeProveedor}',  '${Created}',  '${Pedimento}', '${TipoPedimento}', '${DescripcionCorta}', ${Importe}, ${PorcentajeIVA}, ${ImporteTotal}, ${IdMoneda}, ${TipoDeCambio}, '${IdRequisicion}', '${IdObraDestino}',  '${FolioUsuario}', '${NumeroEmbarque}', '${NumeroDeGuia}', '${FolioFactura}', '${IdProveedorTransportista}', '${IdOrdenTrabajo}', '${IdEquipo}', '${Modulo}', '${IdRequisicionDeAlmacen}', '${Poliza}', ${ImporteIVA}, '${TipoAfectacion}', '${IdViaje}', '${IdFacturacionClientes}', '${IdMovAlmacenSalidaxPrestamo}', '${IdLectura}', ${IdEstatus}, ${IdUsuarioAutorizo}, '${FechaAutorizacion}', '${NotasAutorizacion}', '${NumeroDeLote}', '${LugarDePesca}', '${NumeroDeArribo}', ${IdEstatusRecepcion}, ${IdDescargaDeBarcos}, '${IdClienteDevolucionDeEmpaques}', ${EsDevolucionDeEmpaques}, ${EsBajaDeHerramienta}, ${IdMovHerramientaResguardo})`;

                //Registro en tabla MovsAlmacen
                db.query(queryAlmacen)
                  .then((data) => {
                    console.log('queryAlmacen:', data);

                    //obtener ultimo ID registrado en MovsAlmacen
                    db.query(
                      'SELECT TOP 1 ID FROM MovsAlmacenD ORDER BY ID DESC'
                    )
                      .then((data) => {
                        ID = data[0][0].ID + 1;

                        const queryAlmacenD = `INSERT INTO MovsAlmacenD (IdMovAlmacen, IdInsumo, Cantidad, IdObraOrigen, IdSucursal, IdUnidad, Notas, CantidadUtilizada, Precio, IdObraDestino, Importe, IdAreaCosteo, TipoCosto, PrecioSegunOC, Created, IdUsuarioCreo, ContadorEquipo, ContadorMotor, FolioInternoSuministro, IdEmpleadoOperador, IdEquipo, IdObraUbicacion, IdOrdenTrabajo, IdAreaCosteoDestino, Costo, CostoD, CostoP, PrecioDeVenta, ImporteD, IdEspecieSegunMarea, CantidadDeEmpaques, KgsProduccionBruta, PesoDeEmpaques, IdDescargaDeBarcos, IdAlmacen, PeriodoDeCargo, TipoCostoDestino, PeriodoDeCargoDestino) VALUES ('${IdMovAlmacen}', '${IdInsumo}', ${Cantidad}, '${IdObraOrigen}', ${IdSucursal}, ${IdUnidad}, ${Notas}, ${CantidadUtilizada}, ${Precio}, '${IdObraDestino}', ${Importe}, ${IdAreaCosteo}, ${TipoDeCosto}, ${PrecioSegunOC}, '${Created}', ${IdUsuarioCreo}, ${ContadorEquipo}, ${ContadorMotor}, '${FolioInternoSuministro}', ${IdEmpleadoOperador}, '${IdEquipo}', '${IdObraUbicacion}', '${IdOrdenTrabajo}', ${IdAreaCosteoDestino}, ${Costo}, ${CostoD}, ${CostoP}, ${PrecioDeVenta}, ${ImporteD}, ${IdEspecieSegunMarea}, ${CantidadDeEmpaques}, ${KgsProduccionBruta}, ${PesoDeEmpaques}, ${IdDescargaDeBarcos}, ${IdAlmacen}, '${PeriodoDeCargo}', '${TipoCostoDestino}', '${PeriodoDeCargoDestino}')`;

                        //Registro en tabla MovsAlmacenD
                        db.query(queryAlmacenD)
                          .then((data) => {
                            console.log('queryAlmacen:', data);
                            res.send('respond with a resource');
                          })
                          .catch((e) =>
                            console.log('Ha ocurrido un error: ', e)
                          );
                      })
                      .catch((e) => console.log('Ha ocurrido un error: ', e));
                  })
                  .catch((e) => console.log('Ha ocurrido un error: ', e));
              })
              .catch((e) => console.log('Ha ocurrido un error: ', e));
          })
          .catch((e) => console.log('Ha ocurrido un error: ', e));
      })
      .catch((e) => console.log('Ha ocurrido un error: ', e));
  } catch (error) {
    console.log(error);
  }

  /*
  db.query(queryUsosEquipos)
    .then((data) => {
      //registro usosEquipo
      console.log('queryUsosEquipos:', data);
      db.query(queryAlmacen)
        .then((data) => {
          //obtener ID del registro
          console.log('queryAlmacen:', data);
          db.query(
            'SELECT TOP 1 IdMovAlmacen, Fecha FROM MovsAlmacen ORDER BY Fecha DESC'
          )
            .then((data) => {
              // usar idAlmacen para registrar MovAlmacenD
              IdMovAlmacen = data[0][0].IdMovAlmacen
              db.query(queryAlmacenD)
                .then((data) => {
                  //registro MovsAlmacenD
                  console.log('queryAlmacen:', data);
                    res.send('respond with a resource');
                })
                .catch((e) => console.log('Ha ocurrido un error: ', e));
            })
            .catch((e) => console.log('Ha ocurrido un error: ', e));
        })
        .catch((e) => console.log('Ha ocurrido un error: ', e));
    })
    .catch((e) => console.log('Ha ocurrido un error: ', e));*/
});

module.exports = router;
