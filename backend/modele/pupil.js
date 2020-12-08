module.exports.getPupil = async (id, client) => {
    const {rows: users} = await client.query("SELECT ID, FirstName, LastName, Birthdate, ParentPhone, ParentMail FROM Pupil WHERE ID = $1 LIMIT 1", [id]);
    return users[0];
}

module.exports.loginPupil = async (username, client) => {
    const {rows: users} = await client.query("SELECT * FROM Pupil WHERE login = $1 LIMIT 1", [username]);
    return users[0];
}
/**
 * @swagger
 *  components:
 *   schemas:
 *      ClassPupils:
 *          type: array
 *          items:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      format: INTEGER
 *                  firstname:
 *                      type: string
 *                      format: CHAR(255)
 *                  lastname:
 *                      type: string
 *                      format: CHAR(255)
 *          example:
 *            - id: 420
 *              firstname: 'Thomas'
 *              lastname: 'Martin'
 *            - id: 69
 *              firstname: 'Bob'
 *              lastname: 'Dubuisson'
 */
module.exports.getPupilsInClass = async (idClass, client) => {
    const {rows: pupils} = await client.query(`
        SELECT id, FirstName, LastName
        FROM Pupil
        WHERE idClass = $1`, [idClass]);
    return pupils;
}