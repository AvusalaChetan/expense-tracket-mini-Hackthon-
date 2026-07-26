
export function getUserName(email){
    if(!email) return 
    let name = email.split('@')
    return name[0]
}