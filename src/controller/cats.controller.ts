import { Controller, Get, HttpCode, Post, Req, Res } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @HttpCode(200)
  @Get('index')
  index(@Res() response) {
    response.json({
      title: 'hello',
    });
  }

  @Get('create')
  create(@Res({ passthrough: true }) response): string {
    response.cookie('name', 'danus');
    return 'hello danus!';
  }

  @Post('store')
  store(@Req() request, @Res() response): void {
    response.status(201).json(request.body);
  }
}
