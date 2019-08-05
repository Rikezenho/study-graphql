const { usuarios, proximoId }  = require('../data/db')
const { indiceUsuario } = require('../utils')

module.exports = {
    novoUsuario(_, { dados }) {
        const { nome, email, idade } = dados

        const emailExiste = usuarios
            .some(u => u.email === email)
        
        if (emailExiste) throw new Error('E-mail já cadastrado!')

        const novo = {
            id: proximoId(),
            nome,
            email,
            idade,
            perfil_id: '1',
            status: 'ATIVO'
        }

        usuarios.push(novo)
        return novo
    },
    excluirUsuario(_, { filtro }) {
        const i = indiceUsuario(filtro)
        
        if (i < 0) throw new Error('Usuário não encontrado!')
        const excluidos = usuarios.splice(i, 1)

        return excluidos
            ? excluidos[0]
            : null
    },
    alterarUsuario(_, { filtro, dados }) {
        const i = indiceUsuario(filtro)
        
        if (i < 0) throw new Error('Usuário não encontrado!')

        const { nome, email, idade } = dados

        const usuario = {
            ...usuarios[i],
            nome,
            email,
            idade
        }

        usuarios.splice(i, 1, usuario)

        return usuario
    }
}