const {getUser, getUserProfile} = require('./Helper.js');

async function getAge() {
    const userId = await getUser();
    const userAge = await getUserProfile(userId.id);
    return userAge.age;
}
