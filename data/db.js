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

module.exports = { usuarios, perfis }