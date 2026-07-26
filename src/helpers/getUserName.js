
export function getUserName(email){
    let name = email.split('@')
    return name[0]
}