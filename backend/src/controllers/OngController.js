// Classe: OngController
// máximo 5 métodos por Controller

const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {

        const { name, email, whatsapp, city, uf } = request.body;
        const id = generateUniqueId();

        // aguardo o código terminar para exibir o response
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        return response.json({ id });
    }
};