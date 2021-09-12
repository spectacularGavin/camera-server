import { Controller, Get, Req, Res } from '@nestjs/common';
import { parse } from 'url';
import { ViewService } from './view.service';
import { Request, Response } from 'express';

/**
 * Taken from https://github.com/thisismydesign/nestjs-starter/blob/master/src/server/view/view.controller.ts
 */
@Controller()
export class ViewController {
  constructor(private readonly viewService: ViewService) { }

  async handler(req: Request, res: Response) {
    const parsedUrl = parse(req.url, true);
    await this.viewService
      .getNextServer()
      .render(req, res, parsedUrl.pathname, parsedUrl.query);
  }

  @Get('/')
  public async showHome(@Req() req: Request, @Res() res: Response) {
    const parsedUrl = parse(req.url, true);
    const serverSideProps = { dataFromController: '123' };

    await this.viewService
      .getNextServer()
      .render(
        req,
        res,
        parsedUrl.pathname,
        Object.assign(parsedUrl.query, serverSideProps),
      );
  }

  @Get('_next*')
  public async assets(@Req() req: Request, @Res() res: Response) {
    const parsedUrl = parse(req.url, true);
    await this.viewService
      .getNextServer()
      .render(req, res, parsedUrl.pathname, parsedUrl.query);
  }
}
