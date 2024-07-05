document.addEventListener('DOMContentLoaded', function() {
    const criptografarButton = document.getElementById('criptografar');
    const descriptografarButton = document.getElementById('descriptografar');
    const copiarButton = document.getElementById('copiar');
    const textoPrincipal = document.getElementById('texto-principal');
    const textoCriptografadoDiv = document.querySelector('.texto-criptografado');
    const textoCriptografadoP = document.getElementById('texto-criptografado');
    const semRetornoDiv = document.querySelector('.sem-retorno');

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

    function descriptografarTexto(texto) {
        return texto.replace(/enter|imes|ai|ober|ufat/g, function(match) {
            return Object.keys(chaves).find(key => chaves[key] === match);
        });
    }

    function copiarTexto() {
        const texto = textoCriptografadoP.textContent;
        navigator.clipboard.writeText(texto).then(() => {
            alert('Texto copiado para a área de transferência!');
        }).catch(err => {
            console.error('Falha ao copiar o texto: ', err);
        });
    }

    criptografarButton.addEventListener('click', function() {
        const texto = textoPrincipal.value;
        if (texto) {
            const textoCriptografado = criptografarTexto(texto);
            textoCriptografadoP.textContent = textoCriptografado;
            textoCriptografadoDiv.classList.remove('d-none');
            semRetornoDiv.classList.add('d-none');
        }
    });

    descriptografarButton.addEventListener('click', function() {
        const texto = textoPrincipal.value;
        if (texto) {
            const textoDescriptografado = descriptografarTexto(texto);
            textoCriptografadoP.textContent = textoDescriptografado;
            textoCriptografadoDiv.classList.remove('d-none');
            semRetornoDiv.classList.add('d-none');
        }
    });

    copiarButton.addEventListener('click', copiarTexto);
});
