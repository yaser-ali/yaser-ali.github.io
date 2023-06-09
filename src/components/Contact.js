import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';   

// Need to fix the background image of contact section as it will not change the background color.

const Contact = () => {
    const form = useRef();

    // const [StatusMessage, setStatusMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_qlaojj9', 'template_hr9cn9l', form.current, 'o39-FujFPQYn48njg')
            .then((result) => {
                console.log(result.text);
                console.log("Message sent successfully!");
                // setStatusMessage("Sent successfully");
                toast("Sent successfully!");
            }, (error) => {
                error('form is invalid: do not submit');
            });
        this.form.validateFields();

        if (!this.form.isValid()) {
            console.log('form is invalid: do not submit');
        } else {
            console.log('form is valid: submit');
        }
    };


    const handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    return (
        <>
            <section id="Contact">
                <div className="container reveal">
                    <h2>Contact Me!</h2>
                    <div className="cont">
                        <form ref={form.current} onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-100">
                                    <label>Name</label>
                                </div>
                                <div className="col-100">
                                    <input type="text" id="name" name="user_name" placeholder="Your name.." required onChange={(event) => handleChange(event.target.value)} />
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-100">
                                    <label>Email</label>
                                </div>
                                <div className="col-100">
                                    <input type="email" id="email" name="user_email" placeholder="E-mail" required onChange={(event) => handleChange(event.target.value)} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-100">
                                    <label>Message</label>
                                </div>
                                <div className="col-100">
                                    <textarea id="message" name="message" placeholder="Write something.." required onChange={(event) => handleChange(event.target.value)}></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-100">
                                    <input className='submit' type="submit" value="Send" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </section>
        </>
    );
};
export default Contact;
