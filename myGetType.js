export default function myGetType(data) {
    return Object.prototype.toString.call(data).slice(8, -1) 
}
