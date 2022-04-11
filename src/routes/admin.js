export async function post(e) {
    if (e.request.body.secret === 'MySecretPhrase') {
        return { status: 200 };
    } else {
        return { status: 401 };
    }
}

// export async function get(){
//     return {status:302,headers:{Location:"/"}}
// }