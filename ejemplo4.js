{
    document.addEventListener("DOMContentLoaded", () => {

        document.open()

        document.writeln("<h1>HOLA</h1>");
        document.write("<p>Hemos borrado todo el document y hemos escrito esto</p>");
        document.write("<p>Todos los EventListeners se han borrado</p>");

        document.close()

    })
}
