export const getEventMessage = (eventId) => {
  switch (eventId) {
    case 'SOCIAL_HUB':
      return 'Hi! Unwind, open-up, relax.<br/>I hope to make you comfortable.<br/>Ready to be friends?<br/>#GetINSPIREady';
    case 'RECEPTION':
      return 'Hi there. I hope you are<br/>feeling welcome.<br/>It is time to #GetINSPIREady';
    case 'PARKING_AREA':
      return 'Hello there.<br/>I hope we find the perfect spot<br/>in each other’s life.<br/>#GetINSPIREady';
    case 'OPEN_OFFICE_FLOOR_MAP':
      return 'Hello. I welcome you with<br/>open arms. Feel at home here.<br/>#GetINSPIREady';
    case 'ELEVATOR':
      return 'Hi. We are going to<br/>be traveling a lot together.<br/>Ready to be friends?<br/>#GetINSPIREady';
    case 'DESK_LOCKER':
      return 'Hi. Let’s get to know each other.<br/>We are going to spend a lot of time together.<br/>#GetINSPIREady';
    case 'COLLAB_SPACE_LOUNGE':
      return 'Hi. Come lounge with me.<br/>I hope I can get the best ideas out of you.<br/>Ready to be friends?<br/>#GetINSPIREady';
    case 'COFFEE_MACHINE':
      return 'Hello. I am your new<br/>coffee companion.<br/>Ready to be friends?<br/>#GetINSPIREady';
    case 'BUILDING_FACADE':
      return 'Hi. I hope I inspire you<br/>to be the best, every day.<br/>#GetINSPIREady';
    case 'MEETING_ROOM':
      return 'Hi. I have been looking forward<br/>to meeting you.<br/>Let us get cracking!<br/>#GetINSPIREady';
  }
}

export const getEventsTags = (eventId) => {
  switch (eventId) {
    case 'SOCIAL_HUB':
      return ['Social', 'Dining Table', 'Kitchen', 'Hardwood'];
    case 'RECEPTION':
      return ['Reception', 'Desk', 'Computer', 'Front Desk'];
    case 'PARKING_AREA':
      return ['Parking', 'Car'];
    case 'OPEN_OFFICE_FLOOR_MAP':
      return ['Map', 'Office', 'Drawing'];
    case 'ELEVATOR':
      return ['Elevator', 'Escalator'];
    case 'DESK_LOCKER':
      return ['Desk', 'Locker', 'Drawer', 'Furniture', 'Couch'];
    case 'COLLAB_SPACE_LOUNGE':
      return ['Recliner', 'Sofa', 'Chair', 'Laptop', 'Computer'];
    case 'COFFEE_MACHINE':
      return ['Coffee Machine', 'Machine', 'Coffee', 'Dining Table', 'Kitchen', 'Couch'];
    case 'BUILDING_FACADE':
      return ['Building'];
    case 'MEETING_ROOM':
      return ['Screen', 'Telephone', 'Meeting', 'Conference', 'Meeting Room', 'Conference Room'];
  }
}
