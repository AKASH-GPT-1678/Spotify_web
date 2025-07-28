import { Controller, Post , Get} from '@nestjs/common';
import { SeedingService } from './seed.service';
@Controller('seed')
export class SeedController {

    constructor(
        private readonly seedService: SeedingService
    ){}


   @Post('/beej')
   async seed(): Promise<void> {
    await this.seedService.seeddata();
  }


}
