const db = require('../util/database');

module.exports = class User {
    constructor(Cedula, Nombre, Apellido, Telefono, Correo, Carrera, Semestre, Fecha_Registro , Categoria, Usuario, Contrasenia) {
        this.Cedula = Cedula;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Telefono = Telefono;
        this.Correo = Correo;
        this.Carrera = Carrera;
        this.Semestre = Semestre;
        this.Fecha_Registro = Fecha_Registro;
        this.Categoria = Categoria;
        this.Usuario = Usuario;
        this.Contrasenia = Contrasenia;
        // Establecer el valor predeterminado del estado como 1
        this.Estado = 1;
    }

    static save(user) {
        return db.execute(
            'INSERT INTO usuarios (Cedula, Nombre, Apellido, Telefono, Correo, Carrera, Semestre, Fecha_Registro ,Categoria, Usuario, Contrasenia, Estado) VALUES (?, ?, ?, ?, ?, ?, ?, ? ,?, ?, ?, ?)', [user.Cedula, user.Nombre, user.Apellido, user.Telefono, user.Correo, user.Carrera, user.Semestre, user.Fecha_Registro ,user.Categoria, user.Usuario, user.Contrasenia, user.Estado]
        );
    }
};
