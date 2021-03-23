import { Global, Module } from '@nestjs/common'
import { CustomLoggerService } from './custom.logger.service'

@Global()
@Module({
  providers: [CustomLoggerService],
  exports: [CustomLoggerService],
})
export class LoggerModule {
}