import * as product from "../controller/usercontroller.js";

const userRoute = (app) => {
    app.get('/get-users', product.getUsers);
    app.post('/save-users', product.saveUsers);
    app.get('/getandoperators/:id', product.useAndoperators);
    app.get('/getoroperators/:id', product.useOroperators);
    app.get('/getnotoperators/:id', product.useNotoperators);
    app.get('/getgreateroperators/:id', product.useGreateroperators);
    app.put('/updateUser/:id',product.updateuser)
    app.delete('/deleteUser/:id',product.deleteUser)
}
export default userRoute