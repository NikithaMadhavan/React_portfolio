// import './contact.css';
// import contact from '../../Assets/images/contact.jpg';
// const Contact=()=>{
//     return(

// //  {/* <!-- Contact --> */}
// <section className="section contact" id="contact">
//             <div className="title">
//                 <h1>Contact me</h1>
//             </div>

//             <div className="contact-center">
//                 <div className="left" data-aos="fade-down-right" data-aos-duration="2000">


//                     <div className="contact">
//                         <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
//                         <span className="content">
//                             <h3>Address</h3>
//                             <span>Ramanilayam
//                                 Erattakulam
//                                 Elapully,Palakkad,Kerala,678622
//                             </span>.
//                         </span>

//                     </div>

//                     <div className="contact">
//                         <span className="icon"><i className="fas fa-envelope"></i></span>
//                         <span className="content">
//                             <h3>Email</h3>
//                             <span>nikitham75@gmail.com</span>
//                         </span>
//                     </div>

//                     <div className="contact">
//                         <span className="icon"><i className="fas fa-mobile alt"></i></span>
//                         <span className="content">
//                             <h3>Mobile Number</h3>
//                             <span>+91 8086623777</span>
//                         </span>
//                     </div>

//                 </div>
//                 <div className="left" data-aos="fade-up-left" data-aos-duration="2000">
//                     {/* <form> */}

//                     {/* <div className="contact">
//                         <span className="icon"><i className="fab fa-linkedin"></i></span>
//                         <span className="content">
//                             <h3>Linkedin</h3>
//                             <span><a href='https://www.linkedin.com/in/nikitha-madhavan-777718248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" className="btn">Hire me</a></span>
//                         </span>
//                     </div> */}

//                 <div className="form-groups">
                    

//                     <label htmlFor="name">Full Name</label>

//                     <input type="text" placeholder="Full Name" name="name"required/>

//                 </div>

//                 <div className="form-groups">

//                     <label htmlFor="email">Email</label>

//                 <input type="email" placeholder="Email"name="email"required/>

//                 </div>

//                 <div className="form-groups">

//                 <label htmlFor="message">message</label>

//             <textarea name="message" id="message" cols={30} rows={10} placeholder="Message me"></textarea>

//             </div>

//             <div className="form-groups">

//         <button type="submit">Submit Here</button>

//         </div>
               
// </div>

//         {/* </form> */}
//         </div>
        
        


                    

//                     {/* <div className="contact">
//                         <span className="icon"><i className="fab fa-github-square"></i></span>
//                         <span className="content">
//                             <h3>GitHub</h3>
//                             <span><a href='https://github.com/NikithaMadhavan?tab=repositories' target="_blank" className="btn">My Works</a></span>
//                         </span>
//                     </div> */}

//                     {/* <div className="contact">
//                         <span className="content">
//                             <a className="btn" href='mailto:nikitham75@gmail.com;'>Send Email</a>
//                         </span>
//                     </div> */}
//                 {/* </div> */}
//             {/* </div> */}




//             <span className="container ">
//             <div className="contact-img ">
//                 <img src={contact} alt=" " />
//             </div>
//         </span>
//         <footer>
//             <p>Created By <span>Nikitha</span> | &copy; 2023 All rights reserved.</p>
//         </footer>

//         </section>
        

// );
// };
// export default Contact;












import React, { useState } from 'react';

 

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle the form submission here, e.g., by sending the data to a server.
    console.log(formData);
  };

 

  return (
<div style={{ maxWidth: '400px', margin: '0 auto' }}>
<h2 style={{ textAlign: 'center' }}>Contact Us</h2>
<form onSubmit={handleSubmit}>
<div style={{ margin: '10px 0' }}>
<label htmlFor="name" style={{ display: 'block', fontWeight: 'bold' }}>
            Name
</label>
<input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
</div>
<div style={{ margin: '10px 0' }}>
<label htmlFor="email" style={{ display: 'block', fontWeight: 'bold' }}>
            Email
</label>
<input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
</div>
<div style={{ margin: '10px 0' }}>
<label htmlFor="subject" style={{ display: 'block', fontWeight: 'bold' }}>
            Subject
</label>
<input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
</div>
<div style={{ margin: '10px 0' }}>
<label htmlFor="message" style={{ display: 'block', fontWeight: 'bold' }}>
            Message
</label>
<textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
</div>
<div style={{ margin: '10px 0' }}>
<button type="submit" style={{ backgroundColor: '#0074cc', color: '#fff', padding: '10px 20px', border: 'none' }}>
            Submit
</button>
</div>
</form>
</div>
  );
};

 

export default ContactForm;