const day = 'saturday';

if(day === 'monday'){
    console.log("Plan for the task");
}else if(day === 'tuesday'){
    console.log("Prepare for the task");
}else if(day === 'wednesday'){
    console.log("Develop the code for task");
}else if(day === 'thursday' || day === 'friday'){
    console.log("Deploy the code");
}else if(day === 'saturday' || day === 'sunday'){
    console.log("Enjoy the weekend");
}