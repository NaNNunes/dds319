// short syntax
const name = 'User';
const age = 17;
const object = {name, age};
console.log(object);
console.log('-------------------------------------')
// desconstrutor
const user = {
    name: 'User1',
    mail: 'user@mail.com',
    address: {
        street: 'Avenue windowShited',
        number: 747
    }
}
const {name:nick, address} = user;
console.log(nick);
console.log(address);
const {street} = address;
console.log(street);
console.log('-------------------------------------')
// rest operator --- [] to arr | {} to obj
const arr = [0,1,2,3,4,5,6,7,8,9];
const [stIndex, , rdIndex, ...rest] = arr;
console.log(stIndex);
console.log(rdIndex);2
console.log('the rest is: '+ rest);
console.log('-------------------------------------')
// optional chaining
const objeto = {
    propriedade1: 1,
    propriedade2: 2,
    propriedade3: 3,
    objeto_propriedade:{
        propriedade1_objetoPropriedade: 'prop1',
        propriedade2_objetoPropriedade: 'prop2',
        propriedade3_objetoPropriedade: 'prop3',
        talkei: () => 'talkei'
    }
};
console.log(objeto.objeto_propriedade?.propriedade1_objetoPropriedade ?? 'Não tem registro');
console.log(objeto.objeto_propriedade?.talkei?.() ?? 'não talkei'); // ? pegunta se propriedade existe, . da continuidade caso verdadeiro
console.log('-------------------------------------')