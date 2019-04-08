const enhancer = require("./enhancer.js");
// test away!

describe("enhancement", () => {
  describe("Repairing item", () => {
    it("Should return an item with durability at 100", () => {
      const itemRepair = {
        name: "Sword",
        durability: 80,
        enhancement: 20
      };

      const repairedItem = {
        name: "Sword",
        durability: 100,
        enhancement: 20
      };

      expect(enhancer.repair(itemRepair)).toEqual(repairedItem);
    });
  });

  describe("Enhancing item", () => {
    it("Should return an item with increased enchancement level", () => {
      const itemEnhance = {
        name: "Sword",
        durability: 80,
        enhancement: Math.floor(Math.random() * 10)
      };
      const successEnchance = {
        name: "Sword",
        durability: 80,
        enhancement:
          itemEnhance.enhancement < 20
            ? itemEnhance.enhancement + 1
            : (itemEnhance.enhancement = 20)
      };
      expect(enhancer.succeed(itemEnhance)).toEqual(successEnchance);
    });

    it("Should return an item with decreased enchancement level", () => {
      const itemDehance = {
        name: "Sword",
        durability: 80,
        enhancement: Math.floor(Math.random() * 10)
      };
      const failEnhance = {
        name: "Sword",
        durability:
          itemDehance.enhancement < 15
            ? itemDehance.durability - 5
            : itemDehance.durability - 10,
        enhancement:
          itemDehance.enhancement > 16
            ? itemDehance.enhancement - 1
            : itemDehance.enhancement
      };
      expect(enhancer.fail(itemDehance)).toEqual(failEnhance);
    });
  });
  describe("Getting item", () => {
    it("Should add an item enhancement in the name.", () => {
      const getItem = {
        name: "Sword",
        durability: 80,
        enhancement: Math.floor(Math.random() * 10)
      };
      const itemUpdated = {
        name:
          getItem.enhancement === 0
            ? `${getItem.name}`
            : `[+${getItem.enhancement}] ${getItem.name}`,
        durability: getItem.durability,
        enhancement: getItem.enhancement
      };
      expect(enhancer.get(getItem)).toEqual(itemUpdated);
    });
  });
});
