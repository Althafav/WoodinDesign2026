import { TypeResolver } from "./TypeResolvers";


const KontentDelivery = require("@kentico/kontent-delivery");

export default class Globals {
    static PROJECT_ID: string = "b9453ff0-1055-00c2-c1ca-b918d58a76a2";

    static SECURE_API_KEY: string =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlZTE5ZTdhNmE1NmY0NTRiYjg4ZDcxZWJhMmUwYjczZiIsImlhdCI6MTczOTc5MDM1NSwibmJmIjoxNzM5NzkwMzU1LCJleHAiOjE3NzEzMjYxMjAsInZlciI6IjIuMC4wIiwic2NvcGVfaWQiOiI4MzM0ZWFhN2I2NmI0NTY3YTI5OWIzNmNhYTJkMTA1ZCIsInByb2plY3RfY29udGFpbmVyX2lkIjoiNjQzODg4NGNlODNkMDAxZTUzMGIzZGRlN2Q1ZWQ0MjkiLCJhdWQiOiJkZWxpdmVyLmtvbnRlbnQuYWkifQ.Ug6ZzjrMfKixSsMn2qtlcq7hf6sX4qdNrOCZfZ52MPI";
  
    static KontentClient: any = new KontentDelivery.DeliveryClient({
        projectId: Globals.PROJECT_ID,
        globalQueryConfig: {
            useSecuredMode: true, // Queries the Delivery API using secure access.
        },
        secureApiKey: Globals.SECURE_API_KEY,
        typeResolvers: TypeResolver,

    });

     static WSG_PROJECT_ID: string = "0bb5a7d9-15a4-003f-bf75-0042d490fe05";
      static WSG_SECURE_API_KEY: string =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlZTczNDI1ZDgzZWY0Mjc4OWVlZGEwNTE2OTA0NDBiNCIsImlhdCI6MTczMzEyMzMyOCwibmJmIjoxNzMzMTIzMzI4LCJleHAiOjE3OTYxOTUyODAsInZlciI6IjIuMC4wIiwic2NvcGVfaWQiOiI3MWMzNTk2MjgzZjU0NjVhYTgyYTA3MDUwYWFhYTc5OSIsInByb2plY3RfY29udGFpbmVyX2lkIjoiMjRmOWIzNzM4OGVkMDAzZWMwMWFhOGViMTI1ODdhYzYiLCJhdWQiOiJkZWxpdmVyLmtvbnRlbnQuYWkifQ.XH-9J-1g_jX-XfyvPpc1xI5oQtxSUb5-6W-FgQDx8eM";
    static WSG_KontentClient: any = new KontentDelivery.DeliveryClient({
        projectId: Globals.WSG_PROJECT_ID,
        globalQueryConfig: {
        useSecuredMode: true,
        },
        secureApiKey: Globals.WSG_SECURE_API_KEY,
       
    });
    static SITE_NAME = "Wood In Design";


    static CURRENT_LANG_CODENAME: string = "default";

    static LANG_COOKIE: string = "0cd50f-lang-cookie";

    static BASE_URL: string =
        process.env.NODE_ENV === "production"
            ? "https://strategic-v2-omega.vercel.app/"
            : "http://localhost:3000/";
}