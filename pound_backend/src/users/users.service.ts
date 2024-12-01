import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as Sentry from "@sentry/nestjs";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    try {
      // テスト用エラー
      // throw new Error("Sentry Test Error in Users Service");
      
      return await this.prisma.user.findMany({
        select: {
          id: true,
          username: true,
          email: true,
          created_at: true,
        },
      });
    } catch (error) {
      // エラーに追加情報を付与できる
      Sentry.captureException(error, {
        extra: {
          service: 'UsersService',
          method: 'findAll',
        }
      });
      throw error; // エラーを上位に伝播
    }
  }
}