const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');

const Obra = db.define('obra', {
  IdEstatus: {
    type: DataTypes.INTEGER,
  },
  PorcentajeAvanceEstimaciones: {
    type: DataTypes.STRING,
  },
  ConceptoDeViviendas: {
    type: DataTypes.STRING,
  },
  Configuracion: {
    type: DataTypes.STRING,
  },
  FolioContrato: {
    type: DataTypes.STRING,
  },
  ImporteCostoIndirecto: {
    type: DataTypes.STRING,
  },
  ImportePresupuestoContratado: {
    type: DataTypes.STRING,
  },
  ImporteCostoDirectoMasIndirecto: {
    type: DataTypes.STRING,
  },
  ImportePresupuestoActual: {
    type: DataTypes.STRING,
  },
  NumeroDepartamentoCOI: {
    type: DataTypes.STRING,
  },
  Descripcion: {
    type: DataTypes.STRING,
  },
  Direccion: {
    type: DataTypes.STRING,
  },
  SeEstimaEn2Monedas: {
    type: DataTypes.STRING,
  },
  FechaInicioContrato: {
    type: DataTypes.STRING,
  },
  FechaFinContrato: {
    type: DataTypes.STRING,
  },
  Created: {
    type: DataTypes.STRING,
  },
  Imagen: {
    type: DataTypes.STRING,
  },
  EsObraDeGastosIndAdministrativos: {
    type: DataTypes.STRING,
  },
  IdCliente: {
    type: DataTypes.STRING,
  },
  IdCCCosto: {
    type: DataTypes.STRING,
  },
  IdResidenteResponsable: {
    type: DataTypes.STRING,
  },
  IdFraccionamiento: {
    type: DataTypes.STRING,
  },
  IdMoneda: {
    type: DataTypes.STRING,
  },
  IdOrdenCambioActual: {
    type: DataTypes.STRING,
  },
  IdSucursal: {
    type: DataTypes.STRING,
  },
  IdUsuarioCreo: {
    type: DataTypes.STRING,
  },
  ImporteAvanceEstimaciones: {
    type: DataTypes.STRING,
  },
  ModoExplosionInsumos: {
    type: DataTypes.STRING,
  },
  IdMonedaExtranjera: {
    type: DataTypes.STRING,
  },
  NombreCorto: {
    type: DataTypes.STRING,
  },
  Notas: {
    type: DataTypes.STRING,
  },
  NumeroDecimalesEstimaciones: {
    type: DataTypes.STRING,
  },
  RutaPresupuestoOPUS: {
    type: DataTypes.STRING,
  },
  PorcentajeIndirecto: {
    type: DataTypes.STRING,
  },
  PorcentajeDescuentoEnVentas: {
    type: DataTypes.STRING,
  },
  EsPresupuestoManual: {
    type: DataTypes.STRING,
  },
  ImporteExpInsAcarreo: {
    type: DataTypes.STRING,
  },
  ImporteExpInsAuxiliares: {
    type: DataTypes.STRING,
  },
  ImporteExpInsDestajos: {
    type: DataTypes.STRING,
  },
  ImporteExpInsEquipos: {
    type: DataTypes.STRING,
  },
  ImporteExpInsHerramientas: {
    type: DataTypes.STRING,
  },
  ImporteExpInsMateriales: {
    type: DataTypes.STRING,
  },
  ImporteExpInsManoDeObra: {
    type: DataTypes.STRING,
  },
  ImporteExpInsSubcontratos: {
    type: DataTypes.STRING,
  },
  ImporteExpInsTotal: {
    type: DataTypes.STRING,
  },
  EsObraInterna: {
    type: DataTypes.STRING,
  },
  IdEmpleadoSuperIntendente: {
    type: DataTypes.STRING,
  },
  SupervisorDelCliente: {
    type: DataTypes.STRING,
  },
  TabuladorDeCostosParaRentas: {
    type: DataTypes.STRING,
  },
  TipoDeCambio: {
    type: DataTypes.STRING,
  },
  ImporteTopeDeGastos: {
    type: DataTypes.STRING,
  },
  PermisosUsuarios: {
    type: DataTypes.STRING,
  },
  UtilidadMinima: {
    type: DataTypes.STRING,
  },
  SePuedeFacturarAnticipo: {
    type: DataTypes.STRING,
  },
  IdObra: {
    type: DataTypes.STRING,
  },
  PorcentajeAnticipoAutorizado: {
    type: DataTypes.STRING,
  },
  ImporteAnticipoAutorizado: {
    type: DataTypes.STRING,
  },
  IdFacturaDelAnticipo: {
    type: DataTypes.STRING,
  },
  PorcentajeFondoGtiaConfigurado: {
    type: DataTypes.STRING,
  },
  ImporteFondoGtiaConfigurado: {
    type: DataTypes.STRING,
  },
  ImporteExpInsConceptos: {
    type: DataTypes.STRING,
  },
  ImporteExpInsOtros: {
    type: DataTypes.STRING,
  },
  ImporteUtilidad: {
    type: DataTypes.STRING,
  },
  PorcentajeUtilidad: {
    type: DataTypes.STRING,
  },
  FechaRecalendarizacionInicio: {
    type: DataTypes.STRING,
  },
  FechaRecalendarizacionFin: {
    type: DataTypes.STRING,
  },
  FechaProrrogaInicio: {
    type: DataTypes.STRING,
  },
  FechaProrrogaFin: {
    type: DataTypes.STRING,
  },
  MontoAdicionalLiberadoIndirectos: {
    type: DataTypes.STRING,
  },
  TieneExplosionInsumosIndirectos: {
    type: DataTypes.STRING,
  },
  FechaDeSalida: {
    type: DataTypes.STRING,
  },
  PuertoDeSalida: {
    type: DataTypes.STRING,
  },
  ContadorPrincipalDeSalida: {
    type: DataTypes.STRING,
  },
  ContadorAuxiliarDeSalida: {
    type: DataTypes.STRING,
  },
  LugarDeCaptura: {
    type: DataTypes.STRING,
  },
  FechaDeArribo: {
    type: DataTypes.STRING,
  },
  LugarDeDesembarque: {
    type: DataTypes.STRING,
  },
  ContadorPrincipalDeArribo: {
    type: DataTypes.STRING,
  },
  ContadorAuxiliarDeArribo: {
    type: DataTypes.STRING,
  },
  FolioDeArribo: {
    type: DataTypes.STRING,
  },
  DiasDeViaje: {
    type: DataTypes.STRING,
  },
  DiasDePesca: {
    type: DataTypes.STRING,
  },
  CantidadDeDieselInicioDeViaje: {
    type: DataTypes.STRING,
  },
  CantidadDeDieselTerminoDeViaje: {
    type: DataTypes.STRING,
  },
  CantidadDeDieselTraspasado: {
    type: DataTypes.STRING,
  },
  CantidadDeDieselConsumido: {
    type: DataTypes.STRING,
  },
  HorasDeTrabajoPorDia: {
    type: DataTypes.STRING,
  },
  CantidadDeDieselConsumidoPorDia: {
    type: DataTypes.STRING,
  },
  IdBarco: {
    type: DataTypes.STRING,
  },
  IdTemporadaDeViaje: {
    type: DataTypes.STRING,
  },
  PorcentajeGananciaTripulacion: {
    type: DataTypes.STRING,
  },
  PorcentajePremioCapitan: {
    type: DataTypes.STRING,
  },
  PorcentajePagoCooperativa: {
    type: DataTypes.STRING,
  },
  FechaEntrada: {
    type: DataTypes.STRING,
  },
  IdClasificacionObra: {
    type: DataTypes.STRING,
  },
  KmInicial: {
    type: DataTypes.STRING,
  },
  KmFinal: {
    type: DataTypes.STRING,
  },
  KmOrigen: {
    type: DataTypes.STRING,
  },
  Residencia: {
    type: DataTypes.STRING,
  },
  IdConceptoGastosViviendas: {
    type: DataTypes.STRING,
  },
  NumeroLicitacion: {
    type: DataTypes.STRING,
  },
  NumeroConvenio: {
    type: DataTypes.STRING,
  },
  IdRegistroPatronal: {
    type: DataTypes.STRING,
  },
});

module.exports = Obra;
