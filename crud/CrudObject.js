const createData = (bank, data) => {
  bank.push(data);
  return bank;
};

const findById = (bank, id) => {
  return bank.find((value) => value.id === id);
};

const findByName = (bank, name) => {
  return bank.find((value) => value.name.includes(name));
};



const checkId = (bank, id) => {
  if (typeof id === "string") {
    id = parseInt(id);
  }

  const index = bank.findIndex((data) => data.id === id);

  return index !== -1;
};

module.exports = {
  createData,
  findById,
  findByName,
  checkId,
};
