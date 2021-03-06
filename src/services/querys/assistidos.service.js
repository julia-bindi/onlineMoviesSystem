const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { querysRepository, usuarioRepository } = require("../../repositories")

module.exports.assistidos = async () => {
    const consulta = await querysRepository.assistidos()
    const users = await usuarioRepository.getAll()
    
    if(!consulta) {
        throw{
            status: StatusCodes.INTERNAL_SERVER_ERROR,
            message: messages.internalError()
        }
    }
    
    let response = []
    consulta.forEach(element => {
        users.forEach(user => {
            if(element.inscricao_usuario == user.inscricao){
                response.push({id_filme: element.id_filme, nome_usuario: user.nome})
            }
        })
    });

    return response
}