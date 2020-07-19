function error(menssage:string): never {
    throw new Error(menssage);
}

error("Critical");