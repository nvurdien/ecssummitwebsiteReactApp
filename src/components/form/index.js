import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // get all data in form and return object
    getFormData(event) {
        let form = event.target;
        let elements = form.elements; // all form elements
        let fields = Object.keys(elements).map(function (k) {
            if (elements[k].name !== undefined) {
                return elements[k].name;
                // special case for Edge's html collection
            } else if (elements[k].length > 0) {
                return elements[k].item(0).name;
            }
        }).filter(function (item, pos, self) {
            return self.indexOf(item) === pos && item;
        });
        let data = {};
        fields.forEach(function(k){
            data[k] = elements[k].value;
            let str = ""; // declare empty string outside of loop to allow
                          // it to be appended to for each item in the loop
            if(elements[k].type === "checkbox"){ // special case for Edge's html collection
                str = str + elements[k].checked + ", "; // take the string and append
                                                        // the current checked value to
                                                        // the end of it, along with
                                                        // a comma and a space
                data[k] = str.slice(0, -2); // remove the last comma and space
                                            // from the  string to make the output
                                            // prettier in the spreadsheet
            }else if(elements[k].length){
                for(let i = 0; i < elements[k].length; i++){
                    if(elements[k].item(i).checked){
                        str = str + elements[k].item(i).value + ", "; // same as above
                        data[k] = str.slice(0, -2);
                    }
                }
            }
        });

        // add form-specific values into the data
        data.formDataNameOrder = JSON.stringify(fields);
        console.log(data.formDataNameOrder);
        data.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
        data.formGoogleSendEmail = form.dataset.email || ""; // no email by default

        console.log(data);
        return data;
    }

    static validEmail(email) { // see:
        let re;
        re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }

    validateHuman(honeypot) {
        if (honeypot) {  //if hidden form filled up
            console.log("Robot Detected!");
            return true;
        } else {
            console.log("Welcome Human!");
        }
    }

    handleSubmit(event) {  // handles form submit without any jquery
        event.preventDefault();           // we are submitting via xhr below
        let data = this.getFormData(event);         // get the values submitted in the form

        /* OPTION: Remove this comment to enable SPAM prevention, see README.md
        if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
          return false;
        }
        */

        document.getElementById('invalid').style.display = 'none';
        document.getElementById('thankyou_message').style.display = 'none';

        document.getElementById("email").classList.remove("uk-form-danger");
        document.getElementById("name").classList.remove("uk-form-danger");
        document.getElementById("message").classList.remove("uk-form-danger");

        if( !data.email || !data.name || !data.message){
            document.getElementById('invalid').innerHTML = '';
            let prev = false;
            document.getElementById('invalid').innerHTML += 'No';
            if(!data.email){
                document.getElementById('invalid').innerHTML += ' Email';
                document.getElementById("email").classList.add("uk-form-danger");
                prev = true;
            }
            if(!data.name){
                if(prev) document.getElementById('invalid').innerHTML += ',';
                document.getElementById("name").classList.add("uk-form-danger");
                document.getElementById('invalid').innerHTML += ' Name';
                prev = true;
            }
            if(!data.message){
                if(prev) document.getElementById('invalid').innerHTML += ',';
                document.getElementById("message").classList.add("uk-form-danger");
                document.getElementById('invalid').innerHTML += ' Message';
            }
            document.getElementById('invalid').innerHTML += ' provided';
            document.getElementById('invalid').style.display = 'block';
        }
        else if( !Form.validEmail(data.email) ) {   // if email is not valid show error
            document.getElementById('invalid').innerHTML = 'Invalid Email';
            document.getElementById('invalid').style.display = 'block';
            document.getElementById("email").classList.add("uk-form-danger");
            return false;
        } else {
            let url = "https://script.google.com/macros/s/AKfycbzGKqQ5Eujl6V-WYuRNoaXzG5Z-q1KOMCQBuyTkOwriXcLe9rWC/exec";  //
            let xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            // xhr.withCredentials = true;
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function() {
                console.log( xhr.status, xhr.statusText );
                console.log(xhr.responseText);
                document.getElementById('thankyou_message').style.display = 'block';
            };
            // url encode form data for sending as post data
            let encoded = Object.keys(data).map(function(k) {
                return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
            }).join('&');
            xhr.send(encoded);
        }
    }

    render() {
        return (
            <div>
                <div id="thankyou_message" style={{display:"none"}} className="uk-alert-success" uk-alert="">
                    <p>Message Sent! Thank you!</p>
                </div>
                <div id="invalid" style={{display:"none"}} className="uk-alert-danger" uk-alert="">

                </div>
            <form onSubmit={this.handleSubmit}>

                <fieldset className="uk-fieldset">
                    <h1>Get in Touch With ECS Diversity and Leadership Summit</h1>
                    <legend className="uk-legend">Please send us any questions, comments or concerns.</legend>
                    <p>You may use the form or email us at <a href="mailto:ecs.summit@gmail.com">ecs.summit@gmail.com</a></p>
                    <div className="uk-margin">
                        <input alt="name" className="uk-input" id="name" label="" required="" name="name" placeholder="Your Name*" title="name"/>
                    </div>
                    <div className="uk-margin">
                        <input alt="email" className="uk-input" id="email" label="" required="" name="email" placeholder="Your Email*" title="email" type="text"/>
                    </div>
                    <div className="uk-margin">
                        <textarea alt="message" className="uk-textarea" id="message" required="" label="" name="message" placeholder="Your Message*" rows="5" title="message"/>
                    </div>
                    <div className="uk-margin uk-text-center" uk-margin="">
                        <button type="submit" value="Submit" className="uk-button uk-button-default uk-first-column">Submit</button>
                    </div>
                </fieldset>
            </form>
            </div>
        );
    }
}

export default Form;