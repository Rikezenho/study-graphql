const { usuarios, proximoId }  = require('../data/db')

module.exports = {
    novoUsuario(_, { nome, email, idade }) {
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
    excluirUsuario(_, { id }) {
        const i = usuarios
            .findIndex(u => u.id === id)
        
        if (i < 0) throw new Error('Usuário não encontrado!')
        const excluidos = usuarios.splice(i, 1)

        return excluidos
            ? excluidos[0]
            : null
    },
    alterarUsuario(_, { id, nome, email, idade }) {
        const i = usuarios
            .findIndex(u => u.id === id)
        
        if (i < 0) throw new Error('Usuário não encontrado!')

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