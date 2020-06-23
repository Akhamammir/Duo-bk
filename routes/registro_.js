const express = require('express');
const router = express.Router();

const { Op } = require("sequelize");
const db = require('../config/database');

router.post('/', (req, res, next) => {

  const { 
  IdEquipo,
  IdEmpleadoOperador,
  Fecha,
  ContadorInicial,
  ContadorFinal,
  HrsEspera,
  HrsInactivo,
  HrsMantenimiento,
  IdObra,
  HrsEfectivo
} = req.body.data

var values = {    
  Turno: " ",
  MotivoEspera: " ",
  Trabajo: " ",
  Notas: " ",
  Horario: " ",
  IdContratoArrendamiento: " ",
  CostoUnitario: " ",
  MotivoInactivo: " ",
  MotivoMantenimiento: " ",
  VolumenTrabajo: " ",
  TipoCosto: " ",
  Created: " ",
  ContadorMotor: " ",
  Costo: " ",
  IdUsuarioCreo: " ",
  HorasNormales: " ",
  HorasExtras: " ",
  HorasCucharon: " ",
  HorasMartillo: " ",
  SueldoxHoraNormal: " ",
  SueldoxHoraExtra: " ",
  SueldoxHoraCucharon: " ",
  SueldoxHoraMartillo: " ",
  ImporteNormal: " ",
  ImporteExtra: " ",
  ImporteCucharon: " ",
  ImporteMartillo: " ",
  TipoDeCosto: " ",
  IdUnidad: " ",
};  

const query = `INSERT INTO UsosEquipo (IdEquipo ,IdEmpleadoOperador ,Fecha ,Turno ,ContadorInicial ,ContadorFinal ,HrsEspera ,MotivoEspera ,Trabajo ,Notas ,Horario ,IdContratoArrendamiento ,CostoUnitario ,HrsInactivo ,MotivoInactivo ,HrsMantenimiento ,MotivoMantenimiento ,HrsEfectivo ,VolumenTrabajo ,TipoCosto ,Created ,IdObra ,ContadorMotor ,Costo ,IdUsuarioCreo ,HorasNormales ,HorasExtras ,HorasCucharon ,HorasMartillo ,SueldoxHoraNormal ,SueldoxHoraExtra ,SueldoxHoraCucharon ,SueldoxHoraMartillo ,ImporteNormal ,ImporteExtra ,ImporteCucharon ,ImporteMartillo ,TipoDeCosto ,IdUnidad ) VALUES (${IdEquipo},${IdEmpleadoOperador},${Fecha},${Turno},${ContadorInicial},${ContadorFinal},${HrsEspera},${MotivoEspera},${Trabajo},${Notas},${Horario},${IdContratoArrendamiento},${CostoUnitario},${HrsInactivo},${MotivoInactivo},${HrsMantenimiento},${MotivoMantenimiento},${HrsEfectivo},${VolumenTrabajo},${TipoCosto},${Created},${IdObra},${ContadorMotor},${Costo},${IdUsuarioCreo},${HorasNormales},${HorasExtras},${HorasCucharon},${HorasMartillo},${SueldoxHoraNormal},${SueldoxHoraExtra},${SueldoxHoraCucharon},${SueldoxHoraMartillo},${ImporteNormal},${ImporteExtra},${ImporteCucharon},${ImporteMartillo},${TipoDeCosto},${IdUnidad}`;
  
  db.query(query)
    .then((data) => {
      //console.log('Soolushun:',data);
      res.send({
        data
      });
    })
    .catch((e) => console.log('Ha ocurrido un error: ', e))
});

module.exports = router;

/****** Script para el comando SelectTopNRows de SSMS  *****
SELECT TOP 1000 
      ,[IdUsoEquipo]
      ,[IdEquipo]
      ,[IdEmpleadoOperador]
      ,[Fecha]
      ,[Turno]
      ,[ContadorInicial]
      ,[ContadorFinal]
      ,[HrsEspera]
      ,[MotivoEspera]
      ,[Trabajo]
      ,[Notas]
      ,[Horario]
      ,[IdContratoArrendamiento]
      ,[CostoUnitario]
      ,[HrsInactivo]
      ,[MotivoInactivo]
      ,[HrsMantenimiento]
      ,[MotivoMantenimiento]
      ,[HrsEfectivo]
      ,[VolumenTrabajo]
      ,[TipoCosto]
      ,[Created]
      ,[IdObra]
      ,[ContadorMotor]
      ,[Costo]
      ,[IdUsuarioCreo]
      ,[HorasNormales]
      ,[HorasExtras]
      ,[HorasCucharon]
      ,[HorasMartillo]
      ,[SueldoxHoraNormal]
      ,[SueldoxHoraExtra]
      ,[SueldoxHoraCucharon]
      ,[SueldoxHoraMartillo]
      ,[ImporteNormal]
      ,[ImporteExtra]
      ,[ImporteCucharon]
      ,[ImporteMartillo]
      ,[TipoDeCosto]
      ,[IdUnidad]
  FROM [DESUR].[dbo].[]*/