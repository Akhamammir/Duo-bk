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
  IdUnidad: {
    type: DataTypes.STRING,
  },
  IdEstatus: {
    type: DataTypes.STRING,
  },
  Anio: {
    type: DataTypes.STRING,
  },
  IdObra: {
    type: DataTypes.STRING,
  },
  IdEquipo: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  RNP: {
    type: DataTypes.STRING,
  },
  MatriculaNumero: {
    type: DataTypes.STRING,
  },
  MatriculaAño: {
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
  }
}, {timestamps: false});

module.exports = Equipo;
