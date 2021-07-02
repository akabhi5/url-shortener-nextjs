exports.getCookie = (allCookie, name) => {
  const value = `; ${allCookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};
