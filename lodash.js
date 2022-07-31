import _ from 'lodash'
import myGetType from './myGetType'
// import { random, user as heropy } from './getRandom'
import * as R from './getRandom'

const usersA = [
    { userId:'1', name:'heropy'},
    { userId:'2', name:'neo'}
]
const usersB = [
    { userId:'1', name:'amy'},
    { userId:'3', name:'heropy'}
]
const usersC = usersA.concat(usersB)
console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId'))

const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy', usersD)


const users = [
    { userId:'1', name:'heropy'},
    { userId:'2', name:'neo'},
    { userId:'3', name:'amy'},
    { userId:'4', name:'evan'},
    { userId:'5', name:'lewis'},
]

const foundUser = _.find(users, {name:'amy'})
const foundUserIndex = _.findIndex(users, {name:'amy'})
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, {name:'heropy'})
console.log(users)