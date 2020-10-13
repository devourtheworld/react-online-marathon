const {getUser, getUserProfile} = require('./Helper.js');

async function getAge() {
    const id = Object.values(await getUser())[1];
    const age = Object.values(await getUserProfile(id))[1];
    return age;
}
