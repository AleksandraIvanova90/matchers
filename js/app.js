// TODO: write your code here

export function sortByLife(data) {
    data.sort(function(a, b) {
        return b.health - a.health;
      })
    return data
};
