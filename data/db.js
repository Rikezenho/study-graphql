let id = 1
function proximoId() {
    return id++
}

let perfilId = 1
function proximoPerfilId() {
    return perfilId++
}

const usuarios = [
    {
        id: proximoId(),
        nome: 'Pedro Gama',
        email: 'pedrogama@teste.com',
        idade: 20,
        salario_real: 2000,
        vip: false,
        perfil_id: '1',
        status: 'ATIVO'
    },
    {
        id: proximoId(),
        nome: 'João Gama',
        email: 'joaogama@teste.com',
        idade: 25,
        salario_real: 4000,
        vip: false,
        perfil_id: '2',
        status: 'INATIVO'
    },
    {
        id: proximoId(),
        nome: 'Larissa Marques',
        email: 'larissamarques@teste.com',
        idade: 22,
        salario_real: 5000,
        vip: true,
        perfil_id: '1',
        status: 'BLOQUEADO'
    }
]

const perfis = [
    {
        id: proximoPerfilId(),
        nome: 'Comum'
    },
    {
        id: proximoPerfilId(),
        nome: 'Administrador'
    }
]

module.exports = {
    usuarios,
    perfis,
    proximoId,
    proximoPerfilId
}