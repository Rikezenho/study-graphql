const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')

const usuarios = [
    {
        id: '2',
        nome: 'Pedro Gama',
        email: 'pedrogama@teste.com',
        idade: 20,
        salario_real: 2000,
        vip: false,
        perfil_id: '1'
    },
    {
        id: '3',
        nome: 'João Gama',
        email: 'joaogama@teste.com',
        idade: 25,
        salario_real: 4000,
        vip: false,
        perfil_id: '2'
    },
    {
        id: '4',
        nome: 'Larissa Marques',
        email: 'larissamarques@teste.com',
        idade: 22,
        salario_real: 5000,
        vip: true,
        perfil_id: '1'
    }
]

const perfis = [
    {
        id: '1',
        nome: 'Comum'
    },
    {
        id: '2',
        nome: 'Administrador'
    }
]

const resolvers = {
    Usuario: {
        salario(usuario) {
            return usuario.salario_real;
        },
        perfil(usuario) {
            const selecionados = perfis
                .filter(p => p.id === usuario.perfil_id)
            return selecionados ? selecionados[0] : null
        }
    },
    Produto: {
        precoComDesconto(produto) {
            if (produto.desconto) {
                return produto.preco * (1 - produto.desconto);
            }
            return produto.preco;
        }
    },
    Query: {
        ola() {
            return 'Basta retornar uma string'
        },
        horaCerta() {
            return new Date
        },
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
}

const server = new ApolloServer({
    typeDefs: importSchema('./schema/index.graphql'),
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})