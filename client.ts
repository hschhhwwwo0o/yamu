import MockUpGenerator from "./mock-up-generator/dist/index.js";

const mockUpGenerator = new MockUpGenerator();

mockUpGenerator.selectDevice("phone", "iPhone 13");

mockUpGenerator.selectDevice("phone", "iPhone 14 Pro");
mockUpGenerator.insertImage("image");

mockUpGenerator.selectDevice("phone", "iPhone 13");

mockUpGenerator.selectDevice("watch", "iWatch SE");

mockUpGenerator.mockUp.device.changeSettings({
  isStrap: true,
});

console.log(mockUpGenerator.mockUp);
