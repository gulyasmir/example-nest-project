import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';



@Module({
  imports: [ProductModule,
    MongooseModule.forRoot(`mongodb+srv://gulyasmir:<password>@cluster0.yxycy.mongodb.net/<nameDB>?retryWrites=true&w=majority`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
