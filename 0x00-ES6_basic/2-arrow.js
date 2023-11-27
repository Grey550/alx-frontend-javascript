export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SONA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
