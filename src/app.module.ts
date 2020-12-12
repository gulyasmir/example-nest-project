import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { ProductServiceService } from './product-service/product-service.service';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductServiceService, ProductService],
})
export class AppModule {}
