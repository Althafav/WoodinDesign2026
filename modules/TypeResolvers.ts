

import { Homepagesaudi } from "@/models/homepagesaudi";



const KontentDelivery = require("@kentico/kontent-delivery");


export const TypeResolver = [
  new KontentDelivery.TypeResolver("Homepageglobal2026", (rawData: any) => new Homepagesaudi()),

];
