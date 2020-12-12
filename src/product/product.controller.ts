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

@Controller('product')
export class ProductController {

  constructor(private readonly productService:ProductService) {
  }
  @Get()
 // @Redirect('http://google.com', 301)
  getAll() {
    return this.productService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.productService.getById(id)

  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cach-Control', 'none')
  create(@Body() createProductDto) {
    return  this.productService.create(createProductDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'remove' + id
  }


  @Put(':id')
  update(@Body('id') updateProductDto: string, @Param('id') id: string) {
    return 'update' + id
  }
}