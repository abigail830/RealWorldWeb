import { Module, VuexModule, MutationAction, getModule } from 'vuex-module-decorators';
import store from '../store';
import { User, UserAuth } from '../../models/model';
import { loginUser, setJWT } from '@/services/coinduitApi';

@Module({
    namespaced: true,
    name: 'users',
    store,
    dynamic: true,
})
class UsersModule extends VuexModule {

    public user: User | null = null;

    get username() {
        return (this.user && this.user.username) || null;
    }

    @MutationAction
    public async login(loginReq: UserAuth) {
        // tslint:disable-next-line: no-console
        console.log('Going to login with ${loginReq}');
        const user = await loginUser(loginReq);
        setJWT(user.token);
        return { user };
    }
}

export default getModule(UsersModule);
