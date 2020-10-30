{
    document.addEventListener("DOMContentLoaded", () => {

        const infoP = document.getElementById("info");
        infoP.innerText = "Este era el párrafo de información";

        console.log("Texto cambiado");

        const allLi = document.getElementsByTagName("li");
        const navLi = document.querySelectorAll("nav li");

        console.log(allLi.length != navLi);

    })
}
