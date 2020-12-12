import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Redirect,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';
import { UpdateProductDto } from './dto/update-product-dto';

@Controller('product')
export class ProductController {

  constructor(private readonly productService:ProductService) {
  }
  @Get()
 // @Redirect('http://google.com', 301)
  getAll(): Promise<Product[]> {
    return this.productService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Product>{
    return this.productService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cach-Control', 'none')
  create(@Body() createProductDto):  Promise<Product>  {
    return  this.productService.create(createProductDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string):  Promise<Product>  {
    return this.productService.remove(id)
  }


  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string):  Promise<Product>  {
    return  this.productService.update(id, updateProductDto)
  }
}