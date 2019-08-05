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
    }
}