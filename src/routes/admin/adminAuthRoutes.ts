import { Express } from 'express';
import authControllers from '../../controllers/admin.controllers';

//admin authentication
function routes(App: Express) {
    App.post('/api/v1/admin/register', authControllers.registerHandler);
    App.post('/api/v1/admin/login', authControllers.loginHandler);
    App.post('/api/v1/admin/changePassword', authControllers.changePasswordHandler);
    App.get('/api/v1/admin/logout', authControllers.logoutHandler);
    App.post('/api/v1/admin/setupStudentConfig', authControllers.createStudentConfig);
    App.get('/api/v1/admin/getStudentConfig', authControllers.getStudentConfig);
}

export default routes;