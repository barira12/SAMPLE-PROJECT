import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
import { AppModule } from './app.module';

async function bootstrap() {


  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api")
 
  const config =  new DocumentBuilder()
  .setTitle("Api's")
  .setDescription("api endpoints")
  .setVersion("1.0")
  .addBearerAuth({
    type: "http" ,scheme:"bearer" , bearerFormat:"jwt"
  }, "access-token"
  )
  .build()
  const documnet = SwaggerModule.createDocument(app , config)
  SwaggerModule.setup("swagger", app , documnet , { 
    swaggerOptions : {
      persisitautherization: true,
    }
  })
  app.use(bodyParser.json({
    limit : "101mb" 
  }))
  app.use(bodyParser.urlencoded({limit:"101mb" , extended: true}))
  app.enableCors();
  var port= 3001
  if(process.env.PORTS){
    port = + process.env.PORTS.split(",")[0] 
  }
  await app.listen(port);
  console.log("app is listening to port " + port);
}
bootstrap();

