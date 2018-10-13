/*Autor="Antony Inga Atunga" */
/*Es la variable en donde se registran todas las caracteristicas y subcaracteristicas con sus conceptos */
var preguntasCaracteristicas = [
    {
        "pregunta": "Representa la capacidad del producto software para proporcionar funciones que satisfacen las necesidades declaradas e implícitas, cuando el producto se usa en las condiciones especificadas", "isPreguntado": false, "respuesta": "Adecuación Funcional "
        , "posiblesRespuestas": ["Uno", "Dos", "tres"]
    }, {
        "pregunta": "Esta característica representa el desempeño relativo a la cantidad de recursos utilizados bajo determinadas condiciones", "isPreguntado": false, "respuesta": "Eficiencia de desempeño"
        , "posiblesRespuestas": ["Uno", "Dos", "tres"]
    },
    {
        "pregunta": "Capacidad de dos o más sistemas o componentes para intercambiar información y/o llevar a cabo sus funciones requeridas cuando comparten el mismo entorno hardware o software", "isPreguntado": false, "respuesta": "Compatibilidad"
        , "posiblesRespuestas": ["Uno", "Dos", "tres"]
    }, {
        "pregunta": "Capacidad del producto software para ser entendido, aprendido, usado y resultar atractivo para el usuario, cuando se usa bajo determinadas condiciones", "isPreguntado": false, "respuesta": "Usabilidad"
        , "posiblesRespuestas": ["Uno", "Dos", "tres"]
    }, {
        "pregunta": "Capacidad de un sistema o componente para desempeñar  las funciones especificadas, cuando se usa bajo unas condiciones y periodo de tiempo determinados", "isPreguntado": false, "respuesta": "Fiabilidad"
        , "posiblesRespuestas": ["Uno", "Dos", "tres"]
    },
    {
        "pregunta": "Capacidad de protección de la información y los datos de manera que personas o sistemas no autorizados no puedan leerlos o modificarlos", "isPreguntado": false, "respuesta": "Seguridad"

        , "posiblesRespuestas": ["Uno", "Dos", "tres"]
    }, {
        "pregunta": "Esta característica representa la capacidad del producto software para ser modificado efectiva y eficientemente, debido a necesidades evolutivas, correctivas o perfectivas", "isPreguntado": false, "respuesta": "Mantenibilidad"
        , "posiblesRespuestas": ["Uno", "Dos", "tres"]
    }, {
        "pregunta": "Capacidad del producto o componente de ser transferido de forma efectiva y eficiente de un entorno hardware, software, operacional o de utilización a otro", "isPreguntado": false, "respuesta": "Portabilidad"
        , "posiblesRespuestas": ["Uno", "Dos", "tres"]
    }]

var preguntasSubcaracteristicas = [
    {
        "pregunta": "Capacidad de un sistema o programa de ordenador (compuesto de componentes discretos) que permite que un cambio en un componente tenga un impacto mínimo en los demás.", "isPreguntado": false, "respuesta": "Modularidad"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": " Capacidad de un activo que permite que sea utilizado en más de un sistema software o en la construcción de otros activos.", "isPreguntado": false, "respuesta": "Reusabilidad"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": "Facilidad con la que se puede evaluar el impacto de un determinado cambio sobre el resto del software, diagnosticar las deficiencias o causas de fallos en el software, o identificar las partes a modificar", "isPreguntado": false, "respuesta": "Analizabilidad"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": "Capacidad del producto que permite que sea modificado de forma efectiva y eficiente sin introducir defectos o degradar el desempeño", "isPreguntado": false, "respuesta": "Capacidad para ser modificado"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": " Facilidad con la que se pueden establecer criterios de prueba para un sistema o componente y con la que se pueden llevar a cabo las pruebas para determinar si se cumplen dichos criterios", "isPreguntado": false, "respuesta": "Capacidad para ser probado"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": " Capacidad del producto que le permite ser adaptado de forma efectiva y eficiente a diferentes entornos determinados de hardware, software, operacionales o de uso.", "isPreguntado": false, "respuesta": "Adaptabilidad"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": "Facilidad con la que el producto se puede instalar y/o desinstalar de forma exitosa en un determinado entorno.", "isPreguntado": false, "respuesta": "Capacidad para ser instalado"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": "Capacidad del producto para ser utilizado en lugar de otro producto software determinado con el mismo propósito y en el mismo entorno.", "isPreguntado": false, "respuesta": "Capacidad para ser reemplazado"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": "Capacidad de protección contra el acceso de datos e información no autorizados, ya sea accidental o deliberadamente.", "isPreguntado": false, "respuesta": "Confidencialidad"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": "Capacidad del sistema o componente para prevenir accesos o modificaciones no autorizados a datos o programas de ordenador.", "isPreguntado": false, "respuesta": "Integridad"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": "Capacidad de demostrar las acciones o eventos que han tenido lugar, de manera que dichas acciones o eventos no puedan ser repudiados posteriormente", "isPreguntado": false, "respuesta": "No repudio"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": " Capacidad de rastrear de forma inequívoca las acciones de una entidad.", "isPreguntado": false, "respuesta": "Responsabilidad"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": "Capacidad de demostrar la identidad de un sujeto o un recurso", "isPreguntado": false, "respuesta": "Autenticidad"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": " Capacidad del producto para coexistir con otro software independiente, en un entorno común, compartiendo recursos comunes sin detrimento", "isPreguntado": false, "respuesta": "Coexistencia"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": "Capacidad de dos o más sistemas o componentes para intercambiar información y utilizar la información intercambiada.", "isPreguntado": false, "respuesta": "Interoperabilidad"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": "Capacidad del producto que permite al usuario entender si el software es adecuado para sus necesidades.", "isPreguntado": false, "respuesta": "Capacidad para reconocer su adecuación"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": "Capacidad del producto que permite al usuario aprender su aplicación.", "isPreguntado": false, "respuesta": "Capacidad de aprendizaje"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": "Capacidad del producto que permite al usuario operarlo y controlarlo con facilidad.", "isPreguntado": false, "respuesta": "Capacidad para ser usado"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": "Capacidad del sistema para proteger a los usuarios de hacer errores.", "isPreguntado": false, "respuesta": "Protección contra errores de usuario"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": " Capacidad de la interfaz de usuario  de agradar y satisfacer la interacción con el usuario.", "isPreguntado": false, "respuesta": "Estética de la interfaz de usuario"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": "Capacidad del producto que permite que sea utilizado por usuarios con determinadas características y discapacidades.", "isPreguntado": false, "respuesta": "Accesibilidad"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": "Capacidad del sistema para satisfacer las necesidades de fiabilidad en condiciones normales.", "isPreguntado": false, "respuesta": "Madurez"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": "Capacidad del sistema o componente de estar operativo y accesible para su uso cuando se requiere.", "isPreguntado": false, "respuesta": "Disponibilidad"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": "Capacidad del sistema o componente para operar según lo previsto en presencia de fallos hardware o software.", "isPreguntado": false, "respuesta": "Tolerancia a fallos."
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": " Capacidad del producto software para recuperar los datos directamente afectados y reestablecer el estado deseado del sistema en caso de interrupción o fallo", "isPreguntado": false, "respuesta": "Capacidad de recuperación"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": "Grado en el cual el conjunto de funcionalidades cubre todas las tareas y los objetivos del usuario especificados.", "isPreguntado": false, "respuesta": "Completitud funcional."
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": "Capacidad del producto o sistema para proveer resultados correctos con el nivel de precisión requerido.", "isPreguntado": false, "respuesta": "Corrección funcional"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": " Capacidad del producto software para proporcionar un conjunto apropiado de funciones para tareas y objetivos de usuario especificados.", "isPreguntado": false, "respuesta": "Completitud funcional."
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": "Grado en el cual el conjunto de funcionalidades cubre todas las tareas y los objetivos del usuario especificados.", "isPreguntado": false, "respuesta": "Pertinencia funcional."
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": "Los tiempos de respuesta y procesamiento y los ratios de throughput de un sistema cuando lleva a cabo sus funciones bajo condiciones determinadas en relación con un banco de pruebas (benchmark) establecido.", "isPreguntado": false, "respuesta": "Comportamiento temporal."
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": " Las cantidades y tipos de recursos utilizados cuando el software lleva a cabo su función bajo condiciones determinadas.", "isPreguntado": false, "respuesta": "Utilización de recursos"
        , "posiblesRespuestas": ["tres", "Dos", "Uno"]
    }, {
        "pregunta": "Grado en que los límites máximos de un parámetro de un producto o sistema software cumplen con los requisitos.", "isPreguntado": false, "respuesta": "Capacidad"
        , "posiblesRespuestas": ["Capacidad", "Dos", "Uno"]
    }]

$(document).ready(function () {
    clickA()
})
function clickA() {
    $("a.direccionamiento").click(function () {
        creacioDatos($(this).attr("id"))
        window.open("preguntas.html")

    })
    if (sessionStorage.getItem("caracteristica") != null && sessionStorage.getItem("Subcaracteristica") != null) {
        $("a#calificacion").removeClass("disabled")
    }
}
function creacioDatos(tipoPregunta) {
    if (tipoPregunta == "caracteristicas") {
        sessionStorage.setItem("preguntasCaracteristicas", JSON.stringify(preguntasCaracteristicas))
        console.log("entro aqui")
        sessionStorage.removeItem("preguntasSubcaracteristicas")
        sessionStorage.setItem("caracteristica", 1)
    } else {
        sessionStorage.setItem("preguntasSubcaracteristicas", JSON.stringify(preguntasSubcaracteristicas))
        sessionStorage.removeItem("preguntasCaracteristicas")
        sessionStorage.setItem("Subcaracteristica", 1)

    }
}