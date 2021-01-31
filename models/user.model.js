const users = [];
function getUsers() {
    return new Promise(function (resolve, reject) {
        resolve(users);
    });
}
function getUser(id){
    return new Promise(function(resolve,reject){
        try {
            resolve(users[id]);
        } catch (error) {
            reject(err);
        }
    });
}
function addUser(data) {
    return new Promise(function (resolve, reject) {
        try {
            users.push({
                name: data.name,
                email: data.email,
                age: data.age,
                gender: data.gender
            });
            resolve(data);
        } catch (err) {
            reject(err);
        }
    })


}
function updateUser(id, data) {
    let index = id;
    return new Promise(function (resolve, reject) {
        try {
            users[index] = {
                name: data.name,
                email: data.email,
                age: data.age,
                gender: data.gender
            }
            resolve(users[index]);
        } catch (err) {
            reject(err);
        }
    });
}
function deleteUser(index) {
    return new Promise(function (resolve, reject) {
        try {
            let deleted = users[index];
            users.splice(index, 1);
            resolve(deleted);
        }
        catch (err) {
            reject(err);
        }
    });
}
module.exports = {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
};