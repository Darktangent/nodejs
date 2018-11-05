module.exports.add=(a,b)=>{
    return a+b
}
module.exports.square=(x)=>{
    return x*x
}


module.exports.setName =(user, fullName)=>{
    var name=fullName.split(' ')
    user.firstName=name[0]
    user.lastName=name[1]
    return user
}