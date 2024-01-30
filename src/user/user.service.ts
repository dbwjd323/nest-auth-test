import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; //리포지토리 주입 데코레이터
import { User } from './user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {
    constructor(
        //리포지토리 주입
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {}
}
