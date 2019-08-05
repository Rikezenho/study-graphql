const { usuarios, perfis } = require('../data/db')

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
    usuario(_, { id }) {
        const selecionados = usuarios
            .filter(u => u.id === id)
        return selecionados ? selecionados[0] : null
    },
    perfis() {
        return perfis
    },
    perfil(_, { id }) {
        const selecionados = perfis
            .filter(p => p.id === id)
        return selecionados ? selecionados[0] : null
    }
}