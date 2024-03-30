import { Link } from "react-router-dom";
import EmailJsForm from "../components/emailJsForm/EmailJsForm";

const Contacts = () => {
  return (
    <main className='section'>
      <div className='container'>
        <h1 className='title-1'>Contact</h1>
        <ul className='content-list'>
          <li className='content-list__item'>
            <h2 className='title-2'>Location</h2>
            <p>Yerevan, Armenia</p>
          </li>
          <li className='content-list__item'>
            <h2 className='title-2'>Telegram / WhatsApp</h2>
            <p>
              <Link to='tel:+79051234567'>+374 (33) 10-02-04</Link>
            </p>
          </li>
          <li className='content-list__item'>
            <h2 className='title-2'>Gmail</h2>
            <p>
              <Link to='mailto:webdev@protonmail.com'>
                poxosyansevada@gmail.com
              </Link>
            </p>
          </li>
        </ul>
      </div>
      <div style={{ marginTop: "50px" }}>
        <EmailJsForm />
      </div>
    </main>
  );
};

export default Contacts;
