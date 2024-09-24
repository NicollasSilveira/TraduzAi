// URL da API
const apiUrl = "https://seu-dominio.com/api/integration/v1/account";

// Seu token de autenticação (se necessário)
const token = "SEU_TOKEN_AQUI"; // Substitua pelo seu token de autenticação

// Função para fazer uma requisição GET
async function fetchAccountDetails() {
    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`, // Inclua o token se necessário
            },
        });

        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        // Converte a resposta em JSON
        const data = await response.json();

        // Exibe os dados no console
        console.log(data);
    } catch (error) {
        console.error("Erro:", error);
    }
}

// Chama a função
fetchAccountDetails();
