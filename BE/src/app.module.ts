import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ClockInModule } from './clock-in/clock-in.module';

@Module({
  imports: [AuthModule, UserModule, ClockInModule],
})
export class AppModule {}
