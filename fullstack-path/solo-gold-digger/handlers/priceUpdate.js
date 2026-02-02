import EventEmitter from "node:events";
import getGoldPrice from "../data/getGoldPrice.js";

export const priceUpdate = new EventEmitter();

setInterval(() => {
  priceUpdate.emit("priceUpdate", getGoldPrice());
}, 2000);

export default priceUpdate;
