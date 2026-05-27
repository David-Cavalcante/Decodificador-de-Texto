document.addEventListener('DOMContentLoaded', function() {
    const criptografarButton = document.getElementById('criptografar');
    const descriptografarButton = document.getElementById('descriptografar');
    const copiarButton = document.getElementById('copiar');
    const textoPrincipal = document.getElementById('texto-principal');
    const containerResultado = document.getElementById('container-resultado');
    const textoCriptografadoP = document.getElementById('texto-criptografado');
    const containerVazio = document.getElementById('container-vazio');

    const chaves = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    function criptografarTexto(texto) {
        return texto.replace(/[eioua]/g, function(match) {
            return chaves[match];
        });
    }

    // Correção na descriptografia para rodar na ordem certa e não quebrar palavras
    function descriptografarTexto(texto) {
        let textoDescriptografado = texto;
        textoDescriptografado = textoDescriptografado.replace(/enter/g, 'e');
        textoDescriptografado = textoDescriptografado.replace(/imes/g, 'i');
        textoDescriptografado = textoDescriptografado.replace(/ai/g, 'a');
        textoDescriptografado = textoDescriptografado.replace(/ober/g, 'o');
        textoDescriptografado = textoDescriptografado.replace(/ufat/g, 'u');
        return textoDescriptografado;
    }

    function gerenciarVisualizacao(textoProcessado) {
        if (textoProcessado.trim() !== "") {
            textoCriptografadoP.textContent = textoProcessado;
            containerResultado.classList.remove('d-none');
            containerVazio.classList.add('d-none');
        } else {
            containerResultado.classList.add('d-none');
            containerVazio.classList.remove('d-none');
        }
    }

    function copiarTexto() {
        const texto = textoCriptografadoP.textContent;
        navigator.clipboard.writeText(texto).then(() => {
            const botaoOriginalText = copiarButton.textContent;
            copiarButton.textContent = '✅ Copiado!';
            copiarButton.style.borderColor = '#00ff88';
            copiarButton.style.color = '#00ff88';
            
            setTimeout(() => {
                copiarButton.textContent = botaoOriginalText;
                copiarButton.style.borderColor = '';
                copiarButton.style.color = '';
            }, 2000);
        }).catch(err => {
            console.error('Falha ao copiar o texto: ', err);
        });
    }

    // Eventos de clique nos botões
    criptografarButton.addEventListener('click', function() {
        const texto = textoPrincipal.value.toLowerCase();
        gerenciarVisualizacao(criptografarTexto(texto));
    });

    descriptografarButton.addEventListener('click', function() {
        const texto = textoPrincipal.value.toLowerCase();
        gerenciarVisualizacao(descriptografarTexto(texto));
    });

    copiarButton.addEventListener('click', copiarTexto);
});
