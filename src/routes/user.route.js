import { getUsers, saveUsers, useAndoperators, useOroperators, useNotoperators, useGreateroperators,updateuser,deleteuser} from "../controller/usercontroller.js";


const userRoute = (app) => {
    app.get('/get-users', getUsers);
    app.post('/save-users', saveUsers);
    app.get('/getandoperators/:id', useAndoperators);
    app.get('/getoroperators/:id', useOroperators);
    app.get('/getnotoperators/:id', useNotoperators);
    app.get('/getgreateroperators/:id', useGreateroperators);

    app.put('/updateUser/:id',updateuser);
    app.delete('/deleteUser/:id',deleteuser);

}
export default userRoute