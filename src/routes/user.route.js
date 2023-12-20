import { getUsers,saveUsers} from "../controller/usercontroller.js";


const userRoute = (app) => {
    app.get('/get-users', getUsers);
    app.post('/save-users',saveUsers);
}
export default userRoute