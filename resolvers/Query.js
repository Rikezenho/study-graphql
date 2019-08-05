const { usuarios, perfis } = require('../data/db')
const { indiceUsuario, indicePerfil } = require('../utils')

module.exports = {
    usuarioLogado() {
        return {
            id: '1',
            nome: 'Teste da Silva',
            email: 'teste@teste.com',
            idade: 30,
            salario_real: 2000.50,
            vip: true
        }
    },
    produtoEmDestaque() {
        return {
            nome: 'Produto Teste',
            preco: 20.00,
            desconto: 0.1
        }
    },
    numerosMegaSena() {
        return [2, 10, 34, 48, 50, 55]
    },
    usuarios() {
        return usuarios
    },
    usuario(_, { filtro }) {
        const i = indiceUsuario(filtro)
        if (i < 0) throw new Error('Usuário não encontrado!')
        return usuarios[0]
    },
    perfis() {
        return perfis
    },
    perfil(_, { filtro }) {
        const i = indicePerfil(filtro)
        if (i < 0) throw new Error('Perfil não encontrado!')
        return perfis[i]
    }
}