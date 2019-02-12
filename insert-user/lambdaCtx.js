const insert = require('./index').insert;

exports.handler = async (event, context, callback) => {
    const { name } = JSON.parse(event.body);
    try {
        var result = await insert(name);
        return callback(null, {
            statusCode: 200,
            body: JSON.stringify(result)
        });
    } catch(e) {
        console.log(e);
        return callback(null, {
            statusCode: 500,
            body: e.toString()
        });
    }
};
