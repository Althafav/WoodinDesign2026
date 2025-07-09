

import { Awardpage } from "@/models/awardpage";
import { Homepagesaudi } from "@/models/homepagesaudi";



const KontentDelivery = require("@kentico/kontent-delivery");


export const TypeResolver = [
  new KontentDelivery.TypeResolver("Homepagesaudi", (rawData: any) => new Homepagesaudi()),
  new KontentDelivery.TypeResolver("Awardpage", (rawData: any) => new Awardpage()),

];
