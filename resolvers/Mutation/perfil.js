const { perfis, proximoId }  = require('../../data/db')
const { indicePerfil } = require('../../utils')

module.exports = {
    novoPerfil(_, { dados }) {
        const { nome } = dados

        const perfilExiste = perfis
            .some(u => u.nome === nome)
        
        if (perfilExiste) throw new Error('Perfil já cadastrado!')

        const novo = {
            id: proximoId(),
            nome
        }

        perfis.push(novo)
        return novo
    },
    excluirPerfil(_, { filtro }) {
        const i = indicePerfil(filtro)
        
        if (i < 0) throw new Error('Perfil não encontrado!')
        const excluidos = perfis.splice(i, 1)

        return excluidos
            ? excluidos[0]
            : null
    },
    alterarPerfil(_, { filtro, dados }) {
        const i = indicePerfil(filtro)
        
        if (i < 0) throw new Error('Perfil não encontrado!')

        const { nome } = dados

        const perfil = {
            ...perfis[i],
            nome
        }

        perfis.splice(i, 1, perfil)

        return perfil
    }
}