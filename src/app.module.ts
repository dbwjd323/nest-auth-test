import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      //sqlite 설정 메서드
      type: 'sqlite', //데이터베이스의 타입
      database: 'nest-auth-test.sqlite', //데잍베이스 파일명
      entities: [], //엔티티 리스트
      synchronize: true, //데이터베이스에 스키마를 동화
      logging: true, //sql 실행 로그 확인
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}