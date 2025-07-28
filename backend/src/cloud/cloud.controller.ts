import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { CloudService } from './cloud.service';
@Controller('cloud')
export class CloudController {
    constructor(private readonly storageService: CloudService) { }


    @Get('files')
    async listFiles() {
        return { files: await this.storageService.listFiles() };
    }
}
