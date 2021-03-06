module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  let { name, durability, enhancement } = item;
  const enhanced = {
    name: name,
    durability: durability,
    enhancement: enhancement
  };

  if (enhancement < 0) {
    enhanced.enhancement = 0;
  } else if (enhancement !== 0 && enhancement < 20) {
    enhanced.enhancement += 1;
  } else if (enhancement >= 20) {
    enhanced.enhancement = 20;
  }
  return enhanced;
}

function fail(item) {
  const dehanced = {
    name: item.name,
    durability: item.durability,
    enhancement: item.enhancement
  };

  if (item.enhancement < 15) {
    dehanced.durability -= 5;
  } else if (item.enhancement >= 15) {
    dehanced.durability -= 10;
  }

  if (dehanced.durability < 0) {
    dehanced.durability = 0;
  } else if (dehanced.durability > 100) {
    dehanced.durability = 100;
  }

  if (item.enhancement < 0) {
    dehanced.enhancement = 0;
  } else if (item.enhancement > 20) {
    dehanced.enhancement = 20;
  } else if (item.enhancement > 16) {
    dehanced.enhancement -= 1;
  } else {
    dehanced.enhancement;
  }

  return dehanced;
}

function repair(item) {
  newItem = {
    name: item.name,
    durability: 100,
    enhancement: item.enhancement
  };
  return newItem;
}

function get(item) {
  if (item.enhancement <= 0) {
    return item;
  } else if (item.enhancement > 0)
    return { ...item, name: `[+${item.enhancement}] ${item.name}` };
}
