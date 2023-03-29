// Creating a date module

exports.getDate = function () {
  let today = new Date();

  let dayAndDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    // timeStyle: "short",
  }).format(today);

  return dayAndDate;
};

exports.getDateAndTime = function () {
  let today = new Date();

  let dayAndDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(today);

  return dayAndDate;
};
