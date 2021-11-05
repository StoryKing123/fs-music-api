import { Controller, Get, HttpException, Param } from '@nestjs/common';
import * as match from '@revincx/unblockneteasemusic';
import { GlobalException } from 'src/utils/exception/GlobalException';
import { MatchMusic } from './interface/music.interface';
// const match = require('@nondanee/unblockneteasemusic');

@Controller('music')
export class MusicController {
  @Get('url/:id')
  async getMusicUrl(@Param('id') id): Promise<MatchMusic> {
    let result: MatchMusic | undefined;
    try {
      result = await match(id, ['qq', 'kuwo', 'migu']);
    } catch (error) {
      throw new GlobalException('歌曲不存在', 10001);
    }
    return result;
  }
}
