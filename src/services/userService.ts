import {axiosService, IRes} from "./axiosService";

import {urls} from "../constants/urls";
import {IUser} from "../interfaces/userIterface";

const userService = {
    getAll: (): IRes<IUser[]> => axiosService.get(urls.users.base),
    byId: (id: number): IRes<IUser> => axiosService.get(urls.users.byId(id))
}

export {
    userService
}