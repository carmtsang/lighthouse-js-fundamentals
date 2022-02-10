//trash tells what item is being submitted and bins have 3 properties. function must increase the correct value in the bins.

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
const smartGarbage = function(trash, bins) { 
  if (trash === 'recycling') {
    bins.recycling += 1;
  } else if (trash === 'waste') {
    bins.waste += 1;
  } else if (trash === 'compost') {
    bins.compost += 1;
  }
  return bins
}
