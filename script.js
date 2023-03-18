function criptografar()
{
    var div = document.querySelector("#direita");
    var texto = document.querySelector("#texto-input").value;
    var textoCriptografado = "";
    for (i = 0; i < texto.length; i++)
    {
        if (texto[i] == "a")
            textoCriptografado = textoCriptografado.concat("ai");
        else if (texto[i] == "o")
            textoCriptografado = textoCriptografado.concat("ober");
        else if (texto[i] == "e")
            textoCriptografado = textoCriptografado.concat("enter");
        else if (texto[i] == "i")
            textoCriptografado = textoCriptografado.concat("imes");
        else if (texto[i] == "u")
            textoCriptografado = textoCriptografado.concat("ufat");
        else
            textoCriptografado = textoCriptografado.concat(texto[i]);
    }
    div.innerHTML="";
    var p = document.createElement("p");
    p.innerText = textoCriptografado;
    p.id = "texto-copiar";
    div.appendChild(p);
    var button = createCopyButton();
    var copyText = document.getElementById("texto-copiar");
    button.onclick = navigator.clipboard.writeText(copyText.innerText);
    div.appendChild(button);
}

function descriptografar()
{
    var div = document.querySelector("#direita");
    var texto = document.querySelector("#texto-input").value;
    var textoDescriptografado;
    textoDescriptografado = texto.replaceAll("ai", "a");
    textoDescriptografado = textoDescriptografado.replaceAll("ober", "o");
    textoDescriptografado = textoDescriptografado.replaceAll("enter", "e");
    textoDescriptografado = textoDescriptografado.replaceAll("imes", "i");
    textoDescriptografado = textoDescriptografado.replaceAll("ufat", "u");
    div.innerHTML="";
    var p = document.createElement("p");
    p.innerText = textoDescriptografado;
    p.id = "texto-copiar";
    div.appendChild(p);
    var button = createCopyButton();
    var copyText = document.getElementById("texto-copiar");
    button.onclick = navigator.clipboard.writeText(copyText.innerText);
    div.appendChild(button);
}

function createCopyButton()
{
    var button = document.createElement("button");
    button.textContent = "Copiar"
    button.className = "copiar"
    return button;
}
