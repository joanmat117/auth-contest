import { Module } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { AnimeController } from './anime.controller';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [AnimeController],
  providers: [AnimeService,AuthGuard],
  imports:[AuthModule]
})
export class AnimeModule {}
