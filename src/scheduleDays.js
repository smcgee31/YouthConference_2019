const createData = (time, desc) => {
  return { time, desc };
};

const scheduleDays = {
  wed: [
    createData('5:PM', 'Meet at the Stake Center with Permission forms'),
    createData('7:PM', 'Dinner provided by the Stake'),
    createData('meal:', 'hot dogs/brats, potato salad, chips, smores'),
    createData('8:PM', 'Fireside by President Gilbert'),
  ],
  thu: [
    createData('8:AM', 'Breakfast by 6th & 8th Wards'),
    createData('meal:', 'pancakes, scrambled eggs, hashbrowns'),
    createData('9:AM', 'Hike Left Fork Days Canyon Trail'),
    createData('10:AM', ' Scavenger hunt during hike (details to be provided)'),
    createData('12:PM', 'Lunch by 4th Ward'),
    createData('meal:', 'sandwiches and chips'),
    createData('1:PM', 'Scripture Study class / Spiritual and Business life balance'),
    createData('2:PM', 'Down time for games at camp'),
    createData('5:PM', 'TikTok Skit Challenge (Theme: New Perspectives)'),
    createData('6:PM', 'Dinner by 9th Ward'),
    createData('meal:', 'tinfoil dinners'),
    createData('7:PM', "Capture the Flag at Jolley's Park"),
    createData('8:PM', 'Fireside by Bro. Chamberlin'),
  ],
  fri: [
    createData('8:AM', 'Breakfast by 3rd Ward'),
    createData('meal:', 'breakfast burritos'),
    createData('9:AM', 'Fishing & Swimming at Bartholomew park'),
    createData('12:PM', 'Lunch by 10th Ward'),
    createData('meal:', 'campfire nachos'),
    createData(
      '1:PM',
      'Service Project (Cleaning up the Police Shooting Range in Hobble Creek Canyon)'
    ),
    createData('2:PM', "Games at Jolly's Park (soccer, frisbee golf, ultimate frisbee)"),
    createData('5:PM', 'President Nelson Challenge'),
    createData('6:PM', 'Dinner by 1st Ward'),
    createData('meal:', 'hamburgers'),
    createData('8:PM', 'Testimony Meeting'),
  ],
  sat: [
    createData('9:AM', 'Breakfast provided by the Stake'),
    createData('meal:', 'muffins, granola bars, juice, fruit'),
    createData('10:AM', 'Break Camp (cleaner than we found it)'),
    createData('12:PM', 'Head home'),
  ],
};

export default scheduleDays;
