import { RouteConfig } from '../main/routes';
import { TYPE_ADMIN_CONTROLLER } from './interfaces';
import { createAdminRules } from './validation';

export const getRoutes = () => ([
  new RouteConfig('/admin/create', TYPE_ADMIN_CONTROLLER, 'createAdmin', createAdminRules),
  new RouteConfig('/admin/search', TYPE_ADMIN_CONTROLLER, 'search'),
  new RouteConfig('/admin/findOne', TYPE_ADMIN_CONTROLLER, 'findOne'),
  new RouteConfig('/admin/deleteOne', TYPE_ADMIN_CONTROLLER, 'deleteOne'),
]);
