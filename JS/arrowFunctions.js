const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 60 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2001, 'Mihir'))