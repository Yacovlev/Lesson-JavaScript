function getAdmins(map){
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();
usuarios.set('Luiz', 'Admin');
usuarios.set('Jorge', 'Admin');
usuarios.set('Lucas', 'User');
usuarios.set('Luiza', 'Admin');

console.log(getAdmins(usuarios));