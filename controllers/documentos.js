const bitacora = require('../models').bitacora;
var excel = require('excel4node');

module.exports={
    excel(_,res){
        var wb = new excel.Workbook();

        var ws = wb.addWorksheet('Sistemas Programables');
        var ws2 = wb.addWorksheet('Redes');
        var ws3 = wb.addWorksheet('Arquitectura de Computadoras');
        var ws4 = wb.addWorksheet('Idiomas');

        ws.cell(1, 1).string('Fecha');
        ws.cell(1, 2).string('Hora Entrada');
        ws.cell(1, 3).string('Hora Salida');
        ws.cell(1, 4).string('Docente');
        ws.cell(1, 5).string('Materia');
        ws.cell(1, 6).string('Grupo');
        ws.cell(1, 7).string('Carrera');
        ws.cell(1, 8).string('Num. Practica');
        ws.cell(1, 9).string('Nom. Practica');

        let num1 = 2;
        bitacora.findAll({
            where:{
                laboratorio:"SP"
            }
        }).then(x => {
            ws.cell(num1,1).string(x.fecha);
           ws.cell(num1,2).string(x.h_entrada);
           ws.cell(num1,3).string("");
           ws.cell(num1,4).string(x.encargado);
           ws.cell(num1,5).string(x.materia);
           ws.cell(num1,6).string(x.grupo);
           ws.cell(num1,7).string("ISC");
           ws.cell(num1,8).string(x.practica);
           ws.cell(num1,9).string(x.nombre_practica);
           num1++;
        });

        ws2.cell(1, 1).string('Fecha');
        ws2.cell(1, 2).string('Hora Entrada');
        ws2.cell(1, 3).string('Hora Salida');
        ws2.cell(1, 4).string('Docente');
        ws2.cell(1, 5).string('Materia');
        ws2.cell(1, 6).string('Grupo');
        ws2.cell(1, 7).string('Carrera');
        ws2.cell(1, 8).string('Num. Practica');
        ws2.cell(1, 9).string('Nom. Practica');

        let num2 = 2;
        bitacora.findAll({
            where:{
                laboratorio:"R"
            }
        }).then(x=>{
            ws2.cell(num2,1).string(x.fecha);
           ws2.cell(num2,2).string(x.h_entrada);
           ws2.cell(num2,3).string("");
           ws2.cell(num2,4).string(x.encargado);
           ws2.cell(num2,5).string(x.materia);
           ws2.cell(num2,6).string(x.grupo);
           ws2.cell(num2,7).string("ISC");
           ws2.cell(num2,8).string(x.practica);
           ws2.cell(num2,9).string(x.nombre_practica);
           num2++;
        });

        ws3.cell(1, 1).string('Fecha');
        ws3.cell(1, 2).string('Hora Entrada');
        ws3.cell(1, 3).string('Hora Salida');
        ws3.cell(1, 4).string('Docente');
        ws3.cell(1, 5).string('Materia');
        ws3.cell(1, 6).string('Grupo');
        ws3.cell(1, 7).string('Carrera');
        ws3.cell(1, 8).string('Num. Practica');
        ws3.cell(1, 9).string('Nom. Practica');

        let num3 = 2;
        bitacora.findAll({
            where:{
                laboratorio:"AC"
            }
        }).then(x=>{
            ws3.cell(num3,1).string(x.fecha);
           ws3.cell(num3,2).string(x.h_entrada);
           ws3.cell(num3,3).string("");
           ws3.cell(num3,4).string(x.encargado);
           ws3.cell(num3,5).string(x.materia);
           ws3.cell(num3,6).string(x.grupo);
           ws3.cell(num3,7).string("ISC");
           ws3.cell(num3,8).string(x.practica);
           ws3.cell(num3,9).string(x.nombre_practica);
           num3++;
        });
        
        ws4.cell(1, 1).string('Fecha');
        ws4.cell(1, 2).string('Hora Entrada');
        ws4.cell(1, 3).string('Hora Salida');
        ws4.cell(1, 4).string('Docente');
        ws4.cell(1, 5).string('Materia');
        ws4.cell(1, 6).string('Grupo');
        ws4.cell(1, 7).string('Carrera');
        ws4.cell(1, 8).string('Num. Practica');
        ws4.cell(1, 9).string('Nom. Practica');

        let num4 = 2;
        bitacora.findAll({
            where:{
                laboratorio:"I"
            }
        }).then(x=>{
            ws4.cell(num4,1).string(x.fecha);
           ws4.cell(num4,2).string(x.h_entrada);
           ws4.cell(num4,3).string("");
           ws4.cell(num4,4).string(x.encargado);
           ws4.cell(num4,5).string(x.materia);
           ws4.cell(num4,6).string(x.grupo);
           ws4.cell(num4,7).string("ISC");
           ws4.cell(num4,8).string(x.practica);
           ws4.cell(num4,9).string(x.nombre_practica);
           num4++;
        });
        
        wb.write('Bitacoras.xlsx',res);
    }
}