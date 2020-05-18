export function isLoggedin(){
    return true
}

export function getJWT(){
   return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJSb2xlIjoiQVJUSVNUIiwic3ViIjoiMzE4ODg2ODktMjA4ZS00Yjg5LWFhNTYtMjRlMDgxMzE2ZDQ3IiwiRW1haWwiOiJhcnRpc3RAZ21haWwuY29tIiwiZXhwIjoxNTkwMDY2MTc5fQ.SM-YbUviEJWWXV5dfwcx4UmR_vd0dDLILVmws__Y47HgsKO8r52oKSoj_Hw0ND8fQsoWNStgwp_FkzUuu94jwg"

}

export function login(data){
    this.logout()
    let tokenData = this.parseJwt(data)
    window.sessionStorage.setItem("token", data)
    window.sessionStorage.setItem("role")
}

export function logout() {
    window.sessionStorage.removeItem("token");
    window.sessionStorage.removeItem("Id");
    window.sessionStorage.removeItem("ArtistName");
}

export function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
};

