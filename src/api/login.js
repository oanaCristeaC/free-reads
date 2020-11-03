const KEY = "free-reads";

const freeReads = {
  fetch: () => {
    const user = JSON.parse(localStorage.getItem(KEY) || "[]");
    return user
  },

  save: user => {
    localStorage.setItem(KEY, JSON.stringify(user));
  }
};

export default freeReads;
