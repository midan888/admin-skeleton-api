import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { TYPE_ADMIN_SERVICE_CREATE } from './interfaces';
import { validationError } from '../main/errors';
import { CreateAdminService } from './CreateAdminService';

@injectable()
export class AdminController {
  private service: CreateAdminService;

  constructor(@inject(TYPE_ADMIN_SERVICE_CREATE) service) {
    this.service = service;
  }

  async createAdmin(req: Request, res: Response) {
    const createAdminRequestBody = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
      phoneNumber: req.body.phoneNumber,
    };

    if (createAdminRequestBody.password !== createAdminRequestBody.confirmPassword) {
      throw validationError('confirmPassword', 'password.not.match');
    }

    res.json(await this.service.createAdmin(createAdminRequestBody));
  }

  async findOne(req: Request, res: Response) {
    res.json(await this.service.findOne(req.body.id));
  }

  async search(req: Request, res: Response) {
    res.json(await this.service.search());
  }
}
