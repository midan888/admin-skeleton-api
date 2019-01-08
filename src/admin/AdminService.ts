import { CreateAdminRequestBody, TYPE_ADMIN_REPO } from './interfaces';
import { inject, injectable } from 'inversify';
import { hash } from 'bcrypt';
import { AdminEntity } from './AdminEntity';
import { Repository } from 'typeorm';

@injectable()
export class AdminService {
  private repository: Repository<AdminEntity>;

  constructor(@inject(TYPE_ADMIN_REPO) adminRepository) {
    this.repository = adminRepository;
  }

  async createAdmin(data: CreateAdminRequestBody): Promise<AdminEntity> {
    const adminEntity = new AdminEntity();

    adminEntity.email = data.email;
    adminEntity.password = await hash(data.password, 10);
    adminEntity.firstName = data.firstName;
    adminEntity.lastName = data.lastName;
    adminEntity.phoneNumber = data.phoneNumber;

    return this.repository.save(adminEntity);
  }

  async findOne(id): Promise<AdminEntity> {
    return this.repository.findOne(id);
  }

  search() {
    return this.repository.find();
  }

  deleteOne(id) {
    return this.repository.delete(id);
  }
}
