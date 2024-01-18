export {};

class User {
    gitHubToken: string;
    jwtToken: string;
}

interface AuthStrategy {

    auth(user: User): boolean;

}

class Auth {
    constructor(private strategy: AuthStrategy) {
    }

    public setStrategy(strategy: AuthStrategy) {
        this.strategy = strategy;
    }

    public authUser(user: User) {
        return this.strategy.auth(user);
    }
}


class JwtAuthStrategy implements AuthStrategy {
    auth(user: User): boolean {
        if (user.jwtToken) {
            return true;
        }
        return false;
    }

}

class GithubTokenAuthStrategy implements AuthStrategy {

    auth(user: User): boolean {
        if (user.gitHubToken) {
            return true;
        }
        return false;
    }

}


const user: User = new User();
user.jwtToken = "token";

const auth = new Auth(new JwtAuthStrategy());
console.log(auth.authUser(user))
auth.setStrategy(new GithubTokenAuthStrategy());
console.log(auth.authUser(user));