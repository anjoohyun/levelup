//import myData from './myData.json'

//console.log(myData)

const user = {
    name:'heropy',
    age: 85,
    emails: [
        'test@test.com',
        'test2@test222.com'
    ]
}

//console.log(user)

// const str = JSON.stringify(user)
// console.log('str', str)
// console.log(typeof str)

// const obj = JSON.parse(str)
// console.log('obj', obj)

// localStorage.setItem('user', JSON.stringify(user))
// console.log(JSON.parse(localStorage.getItem('user')))
// localStorage.removeItem('user')

const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 22
console.log(obj)
localStorage.setItem('user', JSON.stringify(obj))
