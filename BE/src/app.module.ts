import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ClockInModule } from './clock-in/clock-in.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ConfigModule, AuthModule, UserModule, ClockInModule, PrismaModule],
})
export class AppModule {}
