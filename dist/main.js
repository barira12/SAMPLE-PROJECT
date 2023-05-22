"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const bodyParser = require("body-parser");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix("api");
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Api's")
        .setDescription("api endpoints")
        .setVersion("1.0")
        .addBearerAuth({
        type: "http", scheme: "bearer", bearerFormat: "jwt"
    }, "access-token")
        .build();
    const documnet = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("swagger", app, documnet, {
        swaggerOptions: {
            persisitautherization: true,
        }
    });
    app.use(bodyParser.json({
        limit: "101mb"
    }));
    app.use(bodyParser.urlencoded({ limit: "101mb", extended: true }));
    app.enableCors();
    var port = 3001;
    if (process.env.PORTS) {
        port = +process.env.PORTS.split(",")[0];
    }
    await app.listen(port);
    console.log("app is listening to port " + port);
}
bootstrap();
//# sourceMappingURL=main.js.map