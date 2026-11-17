// Status HTTP

let statusCode = Number(prompt("Digite o código HTTP:"));

switch (statusCode) {
    case 200:
        console.log("OK - Requisição bem-sucedida.");
        break;

    case 201:
        console.log("Created - Recurso criado com sucesso.");
        break;

    case 301:
        console.log("Moved Permanently - Redirecionamento permanente.");
        break;

    case 400:
        console.log("Bad Request - Requisição inválida.");
        break;

    case 401:
        console.log("Unauthorized - Não autenticado.");
        break;

    case 403:
        console.log("Forbidden - Acesso negado.");
        break;

    case 404:
        console.log("Not Found - Recurso não encontrado.");
        break;

    case 500:
        console.log("Internal Server Error - Erro no servidor.");
        break;

    default:
        if (statusCode >= 200 && statusCode < 300) {
            console.log("Categoria: 2xx - Sucesso.");
        } else if (statusCode >= 400 && statusCode < 500) {
            console.log("Categoria: 4xx - Erro do cliente.");
        } else if (statusCode >= 500 && statusCode < 600) {
            console.log("Categoria: 5xx - Erro do servidor.");
        } else {
            console.log("Código HTTP desconhecido.");
        }
}