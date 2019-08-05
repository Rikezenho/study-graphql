const { usuarios, perfis } = require('./data/db')

module.exports = {
    indiceUsuario(filtro) {
        if (!filtro) return -1
        const { id, email } = filtro

        if (id) return usuarios
            .findIndex(u => u.id === id)

        if (email) return usuarios
            .findIndex(u => u.email === email)

        return -1
    },
    indicePerfil(filtro) {
        if (!filtro) return -1
        const { id, nome } = filtro

        if (id) return perfis
            .findIndex(u => u.id === id)
        
        if (nome) return perfis
            .findIndex(u => u.nome === nome)

        return -1
    }
}
