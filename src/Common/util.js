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
      return ['Social', 'Dining Table', 'Kitchen', 'Hardwood', 'Chair', 'Beverage', 'Drink',
      'Furniture', 'Table', 'Apartment', 'Housing', 'Indoors', 'Interior Design',
      'Coffee Table', 'Cushion', 'Home Decor', 'Dining Room', 'Living Room', 'Logo', 'Trademark',
      'Word', 'Text', 'Shelf', 'Monitor', 'Screen', 'TV', 'Television', 'Loft'];
    case 'RECEPTION':
      return ['Reception', 'Desk', 'Computer', 'Front Desk', 'Light Fixture', 'Brass Section',
      'Music', 'Leisure Activities', 'Musical Instrument', 'Art', 'Flora', 'Table', 'Tabletop',
      'Lighting', 'Interior Design'];
    case 'PARKING_AREA':
      return ['Parking', 'Car', 'Road Sign', 'Street Sign', 'Tunnel', 'Terminal',
      'Subway', 'Transportation', 'Train Station', 'Parking Lot', 'Automobile', 'Van', 'Vehicle'];
    case 'OPEN_OFFICE_FLOOR_MAP':
      return ['Map', 'Drawing', 'Diagram', 'Plan', 'Poster'];
    case 'ELEVATOR':
      return ['Elevator', 'Escalator', 'Door', 'Sliding Door'];
    case 'DESK_LOCKER':
      return ['Desk', 'Locker', 'Drawer', 'Furniture', 'Couch', 'Cupboard', 'Sideboard',
      'Flooring', 'Closet', 'Siding'];
    case 'COLLAB_SPACE_LOUNGE':
      return ['Recliner', 'Sofa', 'Chair', 'Laptop', 'Computer', 'Social', 'Dining Table', 'Kitchen',
      'Hardwood', 'Chair', 'Beverage', 'Drink', 'Furniture', 'Table', 'Apartment', 'Housing',
      'Indoors', 'Interior Design', 'Coffee Table', 'Cushion', 'Home Decor', 'Dining Room', 'Living Room'];
    case 'COFFEE_MACHINE':
      return ['Alphabet', 'Coffee Machine', 'Machine', 'Coffee', 'Dining Room', 'Electrical Device',
      'Kitchen', 'Electronics', 'Aluminium', 'Beverage', 'Drink', 'Cup', 'Appliance'];
    case 'MEETING_ROOM':
      return ['Screen', 'Telephone', 'Meeting', 'Conference', 'Meeting Room', 'Conference Room',
      'Plywood', 'Door', 'Molding', 'Photo Booth', 'Chair', 'Furniture'];
  }
}
