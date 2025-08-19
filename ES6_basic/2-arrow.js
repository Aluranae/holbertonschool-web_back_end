export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newHoods) => {
    this.sanFranciscoNeighborhoods.push(newHoods);
    return this.sanFranciscoNeighborhoods;
  };
}
