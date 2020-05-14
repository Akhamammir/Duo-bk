const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');

const Equipo = db.define('equipo', {
  Nombre: {
    type: DataTypes.STRING,
  },
  Descripcion: {
    type: DataTypes.STRING,
  },
  IdTipoEquipo: {
    type: DataTypes.STRING,
  },
  IdEmpleadoOperador: {
    type: DataTypes.STRING,
  },
  FechaCompra: {
    type: DataTypes.STRING,
  },
  FechaInicioOperaciones: {
    type: DataTypes.STRING,
  },
  FechaGarantiaCompra: {
    type: DataTypes.STRING,
  },
  EstaAsegurado: {
    type: DataTypes.STRING,
  },
  IdMarca: {
    type: DataTypes.STRING,
  },
  Modelo: {
    type: DataTypes.STRING,
  },
  Color: {
    type: DataTypes.STRING,
  },
  SerieEquipo: {
    type: DataTypes.STRING,
  },
  Placas: {
    type: DataTypes.STRING,
  },
  SerieMotor: {
    type: DataTypes.STRING,
  },
  VendedorNombre: {
    type: DataTypes.STRING,
  },
  NumeroActivo: {
    type: DataTypes.STRING,
  },
  ValorDeCompra: {
    type: DataTypes.STRING,
  },
  IdUnidad: {
    type: DataTypes.STRING,
  },
  VidaUtil: {
    type: DataTypes.STRING,
  },
  IdControlDocumentosFoto: {
    type: DataTypes.STRING,
  },
  IdEstatus: {
    type: DataTypes.STRING,
  },
  EsArrendado: {
    type: DataTypes.STRING,
  },
  ValorCampoAdicional1: {
    type: DataTypes.STRING,
  },
  ValorCampoAdicional2: {
    type: DataTypes.STRING,
  },
  ValorCampoAdicional3: {
    type: DataTypes.STRING,
  },
  ValorCampoAdicional4: {
    type: DataTypes.STRING,
  },
  ValorCampoAdicional5: {
    type: DataTypes.STRING,
  },
  ValorCampoAdicional6: {
    type: DataTypes.STRING,
  },
  ValorCampoAdicional7: {
    type: DataTypes.STRING,
  },
  ValorCampoAdicional8: {
    type: DataTypes.STRING,
  },
  ValorCampoAdicional9: {
    type: DataTypes.STRING,
  },
  ValorCampoAdicional10: {
    type: DataTypes.STRING,
  },
  ContadorActualEquipo: {
    type: DataTypes.STRING,
  },
  Anio: {
    type: DataTypes.STRING,
  },
  SeLeDaMantenimiento: {
    type: DataTypes.STRING,
  },
  IdContratoArrendamiento: {
    type: DataTypes.STRING,
  },
  IdPolizaSeguro: {
    type: DataTypes.STRING,
  },
  IdClasificacionSegunViajes: {
    type: DataTypes.STRING,
  },
  IdSucursal: {
    type: DataTypes.STRING,
  },
  Created: {
    type: DataTypes.STRING,
  },
  RangoRendimientoDe: {
    type: DataTypes.STRING,
  },
  RangoRendimientoA: {
    type: DataTypes.STRING,
  },
  IdProveedor: {
    type: DataTypes.STRING,
  },
  IdObra: {
    type: DataTypes.STRING,
  },
  TipoCombustible: {
    type: DataTypes.STRING,
  },
  IdCCCosto: {
    type: DataTypes.STRING,
  },
  ContadorActualMotor: {
    type: DataTypes.STRING,
  },
  IdPermisionarioEquipo: {
    type: DataTypes.STRING,
  },
  EnlaceInsumoControlObras: {
    type: DataTypes.STRING,
  },
  ContadorTotalEquipo: {
    type: DataTypes.STRING,
  },
  ContadorTotalMotor: {
    type: DataTypes.STRING,
  },
  IdClasificacionConcretos: {
    type: DataTypes.STRING,
  },
  IdFamiliaEquipo: {
    type: DataTypes.STRING,
  },
  RangoRendimientoNotacion: {
    type: DataTypes.STRING,
  },
  IdPlantillaEjes: {
    type: DataTypes.STRING,
  },
  IdUsuarioCreo: {
    type: DataTypes.STRING,
  },
  FechaUltimoContadorEquipo: {
    type: DataTypes.STRING,
  },
  IdUltimaOTMP: {
    type: DataTypes.STRING,
  },
  IdUltimaOT: {
    type: DataTypes.STRING,
  },
  IdEquipo: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  IdEstatusDeRenta: {
    type: DataTypes.STRING,
  },
  AfectaGastosOperativos: {
    type: DataTypes.STRING,
  },
  FechaDeBaja: {
    type: DataTypes.STRING,
  },
  MotivoDeBaja: {
    type: DataTypes.STRING,
  },
  IdInsumoEnlaceInventario: {
    type: DataTypes.STRING,
  },
  RNP: {
    type: DataTypes.STRING,
  },
  MatriculaNumero: {
    type: DataTypes.STRING,
  },
  MatriculaPuerto: {
    type: DataTypes.STRING,
  },
  MatriculaClasificacion: {
    type: DataTypes.STRING,
  },
  MatriculaAño: {
    type: DataTypes.STRING,
  },
  TipoDeEmbarcacion: {
    type: DataTypes.STRING,
  },
  SeñalDistintiva: {
    type: DataTypes.STRING,
  },
  UnidadesBrutasArqueo: {
    type: DataTypes.STRING,
  },
  Constructor: {
    type: DataTypes.STRING,
  },
  FechaDeConstruccion: {
    type: DataTypes.STRING,
  },
  DomicilioConstruccion: {
    type: DataTypes.STRING,
  },
  CiudadConstruccion: {
    type: DataTypes.STRING,
  },
  IdEntidadFederativaConstruccion: {
    type: DataTypes.STRING,
  },
  PaisConstruccion: {
    type: DataTypes.STRING,
  },
  MaterialConstruccion: {
    type: DataTypes.STRING,
  },
  TipoDeArboladura: {
    type: DataTypes.STRING,
  },
  DieselPorHora: {
    type: DataTypes.STRING,
  },
  EsloraTotal: {
    type: DataTypes.STRING,
  },
  EsloraEntrePerpendiculares: {
    type: DataTypes.STRING,
  },
  MangaDeCuadernaMayor: {
    type: DataTypes.STRING,
  },
  AlturaLineaDeMaximaCarga: {
    type: DataTypes.STRING,
  },
  Contorno: {
    type: DataTypes.STRING,
  },
  TonelajeBruto: {
    type: DataTypes.STRING,
  },
  PuntalMedio: {
    type: DataTypes.STRING,
  },
  CapacidadDeCasco: {
    type: DataTypes.STRING,
  },
  FormaDeProa: {
    type: DataTypes.STRING,
  },
  FormaDePopa: {
    type: DataTypes.STRING,
  },
  NumeroDeCubiertas: {
    type: DataTypes.STRING,
  },
  LibroeInstrumentos: {
    type: DataTypes.STRING,
  },
  TanquesDeAguaPotable: {
    type: DataTypes.STRING,
  },
  CapacidadDeLosTanques: {
    type: DataTypes.STRING,
  },
  WinchesDeLeva: {
    type: DataTypes.STRING,
  },
  MolinetesDeCarga: {
    type: DataTypes.STRING,
  },
  NumeroDeSuperEstructuras: {
    type: DataTypes.STRING,
  },
  NumeroDeMamparosEstancos: {
    type: DataTypes.STRING,
  },
  RadioDeAccion: {
    type: DataTypes.STRING,
  },
  SuperficieDeAlturaLineaFlotacion: {
    type: DataTypes.STRING,
  },
  TonelajeNeto: {
    type: DataTypes.STRING,
  },
  TonelajeDeDesplazamiento: {
    type: DataTypes.STRING,
  },
  PesoMuerto: {
    type: DataTypes.STRING,
  },
  CoeficienteDeAfinamiento: {
    type: DataTypes.STRING,
  },
  ColadoAProaTodaCarga: {
    type: DataTypes.STRING,
  },
  ColadoDeAlturaLineaFlotacion: {
    type: DataTypes.STRING,
  },
  CapacidadDeCargaBodegas: {
    type: DataTypes.STRING,
  },
  Anclas: {
    type: DataTypes.STRING,
  },
  ColadoAPopaTodaCarga: {
    type: DataTypes.STRING,
  },
  Autonomia: {
    type: DataTypes.STRING,
  },
  ConsumoPorSinglatura: {
    type: DataTypes.STRING,
  },
  NumeroDeBotesCapacidadCertificado: {
    type: DataTypes.STRING,
  },
  CapacidadDeCombustible: {
    type: DataTypes.STRING,
  },
  VelocidadEconomica: {
    type: DataTypes.STRING,
  },
  NumeroDeHelices: {
    type: DataTypes.STRING,
  },
  Diametro: {
    type: DataTypes.STRING,
  },
  Paso: {
    type: DataTypes.STRING,
  },
  VelocidadMaxima: {
    type: DataTypes.STRING,
  },
  NumeroDeBarco: {
    type: DataTypes.STRING,
  },
  IdInsumoCombustibleDelBarco: {
    type: DataTypes.STRING,
  },
  EsBarco: {
    type: DataTypes.STRING,
  },
  Factura: {
    type: DataTypes.STRING,
  },
  Pedimento: {
    type: DataTypes.STRING,
  },
  IdGPS: {
    type: DataTypes.STRING,
  },
  RangoRendimientoMotorDe: {
    type: DataTypes.STRING,
  },
  RangoRendimientoMotorA: {
    type: DataTypes.STRING,
  },
  RangoRendimientoNotacionMotor: {
    type: DataTypes.STRING,
  },
  EsDepreciacionContable: {
    type: DataTypes.STRING,
  },
  EsDepreciacionFiscal: {
    type: DataTypes.STRING,
  },
}, {timestamps: false});

module.exports = Equipo;
