import React from 'react';
import './style.css';

class RegistrationForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // get all data in form and return object
    getFormData(event) {
        let form = event.target;
        let elements = form.elements; // all form elements
        // eslint-disable-next-line
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

    static validPhone(number){
        let re;
        re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
        return re.test(number);
    }

    static validateHuman(honeypot) {
        if (honeypot) {  //if hidden form filled up
            console.log("Robot Detected!");
            return true;
        } else {
            console.log("Welcome Human!");
        }
    }

    static reset(){
        document.getElementById("email").classList.remove("uk-form-danger");
        document.getElementById("firstName").classList.remove("uk-form-danger");
        document.getElementById("lastName").classList.remove("uk-form-danger");
        document.getElementById("leadership").classList.remove("uk-form-danger");
        document.getElementById("major").classList.remove("uk-form-danger");
        document.getElementById("allergies").classList.remove("uk-form-danger");
    }

    handleSubmit(event) {  // handles form submit without any jquery
        event.preventDefault();           // we are submitting via xhr below
        let data = this.getFormData(event);         // get the values submitted in the form

        /* OPTION: Remove this comment to enable SPAM prevention, see README.md
        if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
          return false;
        }
        */
        document.getElementById("header").setAttribute("uk-overflow-auto", "");

        document.getElementById('message_status').innerHTML = '<div id="thankyou_message" class="uk-alert-success" uk-alert=""><p>Sending ...</p></div>';

        RegistrationForm.reset();

        if( !data.email ||
            !data.firstName ||
            !data.lastName ||
            !data.major ||
            !data.year ||
            !data.leadership ||
            !data.attending ||
            !data.allergies
        ){
            let prev = false;
            let innertext = "<div id=\"invalid\" class=\"uk-alert-danger\" uk-alert=\"\"> No";
            if(!data.firstName){
                if(prev) innertext += ',';
                document.getElementById("firstName").classList.add("uk-form-danger");
                innertext += ' First Name';
                prev = true;
            }
            if(!data.lastName){
                if(prev) innertext += ',';
                document.getElementById("lastName").classList.add("uk-form-danger");
                innertext += ' Last Name';
                prev = true;
            }
            if(!data.email){
                if(prev) innertext += ',';
                innertext += ' Email';
                document.getElementById("email").classList.add("uk-form-danger");
                prev = true;
            }
            if(!data.major){
                if(prev) innertext += ',';
                document.getElementById("major").classList.add("uk-form-danger");
                innertext += ' Major';
                prev = true;
            }
            if(!data.year){
                if(prev) innertext += ',';
                innertext += ' Year';
                prev = true;
            }
            if(!data.attending){
                if(prev) innertext += ',';
                innertext += ' Attending information';
                prev = true;
            }
            if(!data.leadership){
                if(prev) innertext += ',';
                document.getElementById("leadership").classList.add("uk-form-danger");
                innertext += ' Leadership meaning';
                prev = true;
            }
            if(!data.allergies){
                if(prev) innertext += ',';
                document.getElementById("allergies").classList.add("uk-form-danger");
                innertext += ' Dietary restrictions';
            }
            // language=HTML
            innertext += ' provided </div>';
            document.getElementById("message_status").innerHTML = innertext;
        }
        else if( !RegistrationForm.validEmail(data.email) ) {   // if email is not valid show error
            document.getElementById('message_status').innerHTML = '<div id="invalid" class="uk-alert-danger" uk-alert="">Invalid Email</div>';
            document.getElementById("email").classList.add("uk-form-danger");
            return false;
        }
        else if( data.phone && !RegistrationForm.validPhone(data.phone) ) {   // if email is not valid show error
            document.getElementById('message_status').innerHTML = '<div id="invalid" class="uk-alert-danger" uk-alert="">Invalid Phone Number</div>';
            document.getElementById("phone").classList.add("uk-form-danger");
            return false;
        }else if( data.terms === "false"){
            document.getElementById('message_status').innerHTML = '<div id="invalid" class="uk-alert-danger" uk-alert="">You must acknowledge</div>';
            return false;
        }
         else {
            // let url = "https://script.google.com/macros/s/AKfycbxyeCTpkwJMAEZh8uEfV9gHqFtYFcrOsHoA4TTQDNCQfLWK8W4/exec";
            let url = ""; // for testing
            document.getElementById("email").classList.add("uk-form-success");
            document.getElementById("firstName").classList.add("uk-form-success");
            document.getElementById("lastName").classList.add("uk-form-success");
            document.getElementById("phone").classList.add("uk-form-success");
            document.getElementById("allergies").classList.add("uk-form-success");
            document.getElementById("leadership").classList.add("uk-form-success");
            document.getElementById("comments").classList.add("uk-form-success");
            document.getElementById("submit").innerText = "Sending";
            document.getElementById("submit").setAttribute("disabled", "");
            document.getElementById("header").removeAttribute("uk-overflow-auto");
            document.getElementById("header").style="";

            let xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function() {
                console.log( xhr.status, xhr.statusText );
                console.log(xhr.responseText);
                // language=HTML
                document.getElementById("header").innerHTML = "<h2 class='uk-modal-title'>Thank you for registering</h2>";
                document.getElementById("body").innerHTML = "We have received your registration and you should receive an " +
                                                            "email from us shortly! If you have any issues please contact us <a href='/contact'>here</a>.";
                // document.getElementById("footer").innerHTML = "<button>Contact Us</button>";
                // let child = document.getElementById("footer");
                // child.parentNode.removeChild(child);
            };
            // url encode form data for sending as post data
            let encoded = Object.keys(data).map(function(k) {
                return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
            }).join('&');
            xhr.send(encoded);
            document.getElementById("footer").remove();
        }
    }

    render() {
        return (
            <div>
                <p><a className="btn btn-1 btn-1a" href="#modal-center" uk-toggle="">Register</a></p>
                <div id="modal-center" className="uk-flex-top" uk-modal="">
                    <div id="parent" className="uk-modal-dialog">

                    <button className="uk-modal-close-default" type="button" uk-close=""/>

                    <div id="header" className="uk-modal-header">
                        <h2 className="uk-modal-title">Registration Form</h2>
                        <div id="message_status">
                        </div>
                    </div>
                        <form onSubmit={this.handleSubmit}>
                            <div id="body" className="uk-modal-body" uk-overflow-auto="">

                            <fieldset className="uk-fieldset">
                                <div className="uk-margin">
                                    <label htmlFor="firstName">First Name<span className="required">*</span></label>
                                    <input alt="firstName" className="uk-input" id="firstName" label="" required="" name="firstName" title="firstName"/>
                                </div>
                                <div className="uk-margin">
                                    <label htmlFor="lastName">Last Name<span className="required">*</span></label>
                                    <input alt="lastName" className="uk-input" id="lastName" label="" required="" name="lastName" title="lastName"/>
                                </div>
                                <div className="uk-margin">
                                    <label htmlFor="email">Email<span className="required">*</span></label>
                                    <input alt="email" className="uk-input" id="email" label="" required="" name="email" title="email" type="email"/>
                                </div>
                                <div className="uk-margin">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input alt="phone" className="uk-input" id="phone" label="" name="phone" title="phone" type="tel"/>
                                </div>

                                <div className="uk-margin">
                                    <label htmlFor="major">Major<span className="required">*</span></label>
                                    <input alt="major" className="uk-input" id="major" label="" required="" name="major" title="major"/>
                                </div>
                                <label htmlFor="year">Year<span className="required">*</span></label>
                                <div className="uk-margin">
                                    <div className="uk-margin uk-grid-small uk-child-width-1-2@s uk-grid">
                                        <label><input className="uk-radio" type="radio" name="year" value="Freshman"/> Freshman</label>
                                        <label><input className="uk-radio" type="radio" name="year" value="Sophomore"/> Sophomore</label>
                                        <label><input className="uk-radio" type="radio" name="year" value="Junior"/> Junior</label>
                                        <label><input className="uk-radio" type="radio" name="year" value="Senior"/> Senior</label>
                                        <label><input className="uk-radio" type="radio" name="year" value="Graduate"/> Graduate</label>
                                    </div>
                                </div>
                                <label htmlFor="attending">Which days can you attend fully?<span className="required">*</span></label>
                                <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                    <label><input className="uk-checkbox" name="attending" value="Friday" type="checkbox"/> Friday</label>
                                    <label><input className="uk-checkbox" name="attending" value="Saturday" type="checkbox"/> Saturday</label>
                                </div>
                                <div className="uk-margin">
                                    <label htmlFor="leadership">What does leadership mean to you?<span className="required">*</span></label>
                                    <textarea alt="leadership"
                                              placeholder="Ex: Leadership is the ability to inspire your teammates to work and succeed together. It’s not about controlling them, but working with them. The leader creates the foundation that the team can build upon."
                                              className="uk-textarea"
                                              rows={4}
                                              id="leadership" label="" required="" name="leadership" title="leadership"/>
                                </div>

                                <div className="uk-margin">
                                    <label htmlFor="allergies">Dietary Restriction or Allergies? [Please list or type N/A]<span className="required">*</span></label>
                                    <input alt="allergies" className="uk-input" id="allergies" label="" required="" name="allergies" title="allergies" type="text"/>
                                </div>
                                {/*<label htmlFor="terms"></label>*/}
                                <div className="uk-margin">
                                    <label ><input className="uk-checkbox" name="terms" value="Approved" type="checkbox"/> <span className="required">*</span>I acknowledge that the information I provided above is accurate. By registering, I agree to attend, and I acknowledge that the ECS Departments will be paying for me so that I can attend the event for free. Any changes to the information provided must be communicated or emailed to the event coordinators immediately.</label>
                                </div>
                                <div className="uk-margin">
                                    <label htmlFor="comments">Comments?</label>
                                    <textarea alt="comments" className="uk-textarea" id="comments" label="" required="" name="comments" title="comments"/>
                                </div>
                            </fieldset>
                            </div>
                            <div id="footer" className="uk-modal-footer">
                                <button type="submit" value="Submit" id="submit" className="uk-button uk-button-default uk-first-column">Submit</button>

                            </div>
                        </form>
                </div>
            </div>
        </div>
        );
    }
}

export default RegistrationForm;