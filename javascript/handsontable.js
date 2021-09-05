const data = [
    ['roll','name','stream','semester','email id'],
    [1,'Raj','IT',8,'Xyz@email.com'],
    [2,'Timir','CSE',4,'Xyz@email.com'],
    [4,'Arjesh','IT',2,'Xyz@email.com'],
    [5,'Haris ali','IT',6,'Xyz@email.com'],
    [6,'Deepak','CSE',4,'Xyz@email.com'],
    [7,'Dibyendu','ECE',4,'Xyz@email.com'],
    [8,'Aman','IT',4,'Xyz@email.com'],
    [9,'Binayak','CSE',6,'Xyz@email.com'],
    [10,'Harshad','ECE',6,'Xyz@email.com'],
    [11,'Abhra','IT',4,'Xyz@email.com'],
    [12,'Sayan','IT',4,'Xyz@email.com'],
]



let container = document.querySelector('.handsontable-container');
  
/*let hot = new Handsontable(container,{
    data: data       // Initiating handsontable object 
}
)*/
 
let hot = new Handsontable(container, {
    data: data,
  
    // Added additional features
    // For adding headers on each row
    rowHeaders: true,
  
    // For adding headers on each column
    colHeaders: true, 
  
    filters:true,
    // For adding dropdown menu to each headers
    dropdownMenu: true,
    dropdownMenu: ['filter_by_condition', 'filter_action_bar']


}
) 



/* let hot = new Handsontable(container,{
    data: data,

    rowHeaders: true, 

    // For giving custom names to headers
    colHeaders: ['roll', 'name', 'stream', 'semester', 'email'],
    dropdownMenu: true,

    // To add filter feature in table
    filters: true,
}
) */