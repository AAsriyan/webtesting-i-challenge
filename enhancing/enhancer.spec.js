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
      console.log(itemEnhance);
      const successEnhance = {
        name: "Sword",
        durability: 80,
        enhancement:
          itemEnhance.enhancement < 20
            ? itemEnhance.enhancement + 1
            : (itemEnhance.enhancement = 20)
      };
      console.log(successEnhance);
      expect(enhancer.succeed(itemEnhance)).toEqual(successEnhance);
    });

    it("Should return an item with 0 enhancement level", () => {
      const itemEnhance0 = {
        name: "Sword",
        durability: 80,
        enhancement: -1 * Math.floor(Math.random() * 10)
      };
      console.log(itemEnhance0);
      const successEnchance0 = {
        name: "Sword",
        durability: 80,
        enhancement: 0
      };
      console.log(successEnchance0);
      expect(enhancer.succeed(itemEnhance0)).toEqual(successEnchance0);
    });

    it("Should return an item with 20 enhancement level", () => {
      const itemEnhance20 = {
        name: "Sword",
        durability: 80,
        enhancement: Math.floor(Math.random() * 1000)
      };
      console.log(itemEnhance20);
      const successEnchance20 = {
        name: "Sword",
        durability: 80,
        enhancement: 20
      };
      console.log(successEnchance20);
      expect(enhancer.succeed(itemEnhance20)).toEqual(successEnchance20);
    });
  });
  describe("Enhancing Failed", () => {
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

    it("Should return an item with decreased enchancement level and 0 durability", () => {
      const itemDehanceDurCheck0 = {
        name: "Sword",
        durability: 0,
        enhancement: 19
      };
      const failEnhanceDurCheck0 = {
        name: "Sword",
        durability: 0,
        enhancement: 18
      };
      expect(enhancer.fail(itemDehanceDurCheck0)).toEqual(failEnhanceDurCheck0);
    });

    it("Should return an item with decreased enchancement level and 100 durability", () => {
      const itemDehanceDurCheck100 = {
        name: "Sword",
        durability: 120,
        enhancement: 19
      };
      const failEnhanceDurCheck100 = {
        name: "Sword",
        durability: 100,
        enhancement: 18
      };
      expect(enhancer.fail(itemDehanceDurCheck100)).toEqual(
        failEnhanceDurCheck100
      );
    });

    it("Should return an item with 0 enhancement", () => {
      const itemDehanceEnhanceCheck0 = {
        name: "Sword",
        durability: 90,
        enhancement: -5
      };
      const failEnhanceEnhanceCheck0 = {
        name: "Sword",
        durability: 85,
        enhancement: 0
      };
      expect(enhancer.fail(itemDehanceEnhanceCheck0)).toEqual(
        failEnhanceEnhanceCheck0
      );
    });

    it("Should return an item with 20 enhancement", () => {
      const itemDehanceEnhanceCheck20 = {
        name: "Sword",
        durability: 90,
        enhancement: 20
      };
      const failEnhanceEnhanceCheck20 = {
        name: "Sword",
        durability: 80,
        enhancement: 19
      };
      expect(enhancer.fail(itemDehanceEnhanceCheck20)).toEqual(
        failEnhanceEnhanceCheck20
      );
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
