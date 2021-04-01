const hasNumber = value => {
    return new RegExp(/[0-9]/).test(value)
}


const hasSpecial = (value) => {
        return (/[!@#$%^&*)(+=._-)]/.test(value))
};


const hasMixed = (value) => {
    return new RegExp(/[a-z]/).test(value) && RegExp(/[A-Z]/).test(value);
};

export const strengthColor = (count) => {
if (count < 3) return 'red';
if (count < 4) return 'yellow';
if (count < 5) return 'orange';
if (count < 6) return 'green';
};

export const strengthIndicator = value =>{
    const  matched =[]
    if(value.length > 5) match.push('greater-than-5')
    
    if (value.length > 7) match.push('greater-than-7');
    if(hasNumber(value)) match.push('has-number')
 if (hasMixed(value)) match.push('has-mixed');
 if (hasSpecial(value)) match.push('has-special');

    return matched.length
}