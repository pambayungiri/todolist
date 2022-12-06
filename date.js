exports.getDate = function () {
  const today = new Date();

  const options = {
    weekday: "long",
  };

  const day = today.toLocaleDateString("id-ID", options);
  return day;
};

exports.getDay = function () {
  const today = new Date();

  const options = {
    weekday: "long",
  };

  const day = today.toLocaleDateString("id-ID", options);
  return day;
};
