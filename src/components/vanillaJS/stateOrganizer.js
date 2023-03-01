// export const initUser = {
//     email: '', 
//     password: '', 
//     firstName: '', 
//     lastName: '',    
//     street: '', 
//     city: '', 
//     state: '',
//     zip: '',
//     // paymentData: {}, // these state items added dynamically as progress
//     // shipping: {},
//     // confirm: '',
    
// }

// const defaultUser = {
//     email: 'default@estore.com', 
//     password: 'Password123', 
//     firstName: 'John', 
//     lastName: 'Denver',    
//     street: '2001 Blake St', 
//     city: 'Denver', 
//     state: 'CO',
//     zip: '80205',
// }
export const testLogger = () => console.log(`your moms test logggg`);
export const validateFields = (type, value) => {
    //switch statement to handle each input field


    const { email, password } = this.state
    console.log(` line 42 calls: email-${email} password-${password}`);
    console.log(`log the defaultUser import: ${globalEmail}, deets: ${lastName}`);
    switch (type) {
        case 'email':
            if (email == defaultUser.email ) { console.log(`holy mowly`)}
    } 
}