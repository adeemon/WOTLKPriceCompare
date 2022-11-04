export class AuthToken {
    static async getToken() {
        return new Promise((resolve) => {
            var url = "https://oauth.battle.net/token";
            const authSecret = 'Basic ZmM2ZTRhZjcyNGEyNGE4MmFmYjYzYmJhMmU4ZTczM2I6UThBc2ZNYldaejhQcXlqOEtoSVNTYzlkaHh0RVI2Qkw=';
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url);

            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Authorization", authSecret);

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    let output = xhr.responseText.match('"[a-zA-Z0-9]*"')[0];
                    output = output.slice(1, output.length - 1);
                    resolve(output);
                }
            };
            var data = "grant_type=client_credentials";

            xhr.send(data);
        })
    }
}