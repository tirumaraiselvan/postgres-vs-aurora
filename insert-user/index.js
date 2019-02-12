const Sequelize = require("sequelize");

const POSTGRES_CONNECTION_STRING = process.env.POSTGRES_CONNECTION_STRING || "postgres://postgres:password@localhost:6432/postgres";

async function insert(name) {
    try {
        var sequelize = new Sequelize(
            POSTGRES_CONNECTION_STRING, { pool: {max: 0, min:0 }}
        );
        var res = await sequelize.query('INSERT into users (name) values (:name)',
                                    { replacements: { name: name } }
                                       );
        return res;
    } catch(e) {
        console.log(e);
        throw new Error(e);
    } finally {
	    sequelize.close();
    }
}

exports.insert = insert;
