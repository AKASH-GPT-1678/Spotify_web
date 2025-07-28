import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
@Injectable()
export class CloudService {

    private readonly storage: Storage;
    private readonly bucketName = 'smart_city_123'; // Bucket names must not have '/'

    constructor() {
        this.storage = new Storage({
            keyFilename: "maps-ai-453308-b5fe1e0746b4.json",
            projectId: "maps-ai-453308"
        });
    }



    async listFiles(): Promise<string[]> {
        const [files] = await this.storage.bucket(this.bucketName).getFiles({prefix : 'Banner/'});
        return files.map(file => file.publicUrl())
    }





}
