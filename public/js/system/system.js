function enviarGuia() {
    guia = $("#guia").val();
    if (guia == '') {
        Swal.fire("LA GUIA NO PUEDE SER VACIO", "aveoline", "error");
    } else {
        listGuias(guia);
    }
}
const listGuias = async (guia) => {
    const response = await fetch("https://aveonline.co/api/nal/v1.0/estado_guia.php?guia=" + guia + "");
    const guias = await response.json();
    const array = guias['response'];

    if (array.length) {
        Swal.fire("LA GUIA NO EXISTE", "AVEOLINE", "error");
        $("#guia").val('');
        let tableBody = ``;
        tableBody += `<tr></tr>`;
        tableBody_Guias.innerHTML = tableBody;
    } else {
        let tableBody = ``;
        array['guias'].forEach((guia, index) => {
            tableBody += `<tr>
            <td class='centered'>${guia.dsconsec}</td>
            <td class='centered'>${guia.destinatario}</td>
            <td class='centered'>${guia.telefono}</td>
            <td class='centered'>${guia.direccion}</td>
            <td class='centered'>${guia.estado}</td>
            <td class="centered">${guia.rutadigitalizada}</th>
            <td class="centered">${guia.origen}</th>
            <td class="centered">${guia.destino}</th>
            <td class="centered">${guia.dsreferencia}</th>
            <td class="centered">${guia.dsordencompra}</th>
            <td class="centered">${guia.idagente}</th>
            <td class="centered">${guia.idempresa}</th>
            <td class="centered">${guia.idcliente}</th>
            <td class="centered">${guia.dsfechaentrega}</th>
            <td class="centered">${guia.historicos}</th>
            <td class="centered">${guia.rutave}</th>
            <td class="centered">${guia.type_error}</th>
            </tr>`;
        });
        tableBody_Guias.innerHTML = tableBody;
    }
};
