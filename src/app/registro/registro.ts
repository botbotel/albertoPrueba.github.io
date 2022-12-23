
/**
* CREACIÓN DE CLASE DE NUEVO USUARIO
*/

export class nuevoUser {
    public nombre
    public apellido
    public email
    public password
    public static setNombre: string
    public static setApellido: string
    public static setEmail: string
    public static setPassword: string
    public static getNombre: string
    public static getApellido: string
    public static getEmail: string
    public static getPassword: string

/**
* DECLARACION DE CONSTRUCTOR
*/
    constructor(nombre:string, apellido: string, email: string, password: string ) {
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.password = password

    }

    public nuevoUser(nombre:string, apellido:string, email:string, password:string) {
        this.nuevoUser(nombre, apellido, email, password)
    }

/**
* SETTER DE NUEVO USUARIO
*/
    public setNombre(nombre:string): string {
        return this.nombre = nombre;
    }
    public setApellido(apellido:string): string {
        return this.apellido = apellido;
    }
    public setEmail(email:string): string {
        return this.email = email;
    }
    public setPassword(password:string): string {
        return this.password = password;
    }


/**
* GETTER DE NUEVO USUARIO
*/
    public getNombre():string {
        return this.nombre;
    }

    public getApellido():string {
        return this.apellido;
    }
    public getEmail():string {
        return this.email;
    }
    public getPassword():string {
        return this.password;
    }
}

