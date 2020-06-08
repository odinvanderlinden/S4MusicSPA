export function isLoggedin(){
    return window.sessionStorage.getItem("token")
}

export function getJWT(){
    return window.sessionStorage.getItem("token")
}

export function login(data){
    debugger
    logout()
    let tokenData = parseJwt(data)
    debugger
    window.sessionStorage.setItem("token", data)
    window.sessionStorage.setItem("role", tokenData.Role)
}

export function logout() {
    window.sessionStorage.removeItem("token");
    window.sessionStorage.removeItem("Id");
    window.location.reload(false);
}

export function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
};

