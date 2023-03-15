import React from 'react'
class ContactForm extends React.Component {
  render() {
    const formStyle = {
      textAlign: 'left'
    }
    const buttonsStyle = {
      margin: '1rem',
      textAlign: 'center',
    }
    return (
      <form style={formStyle} className="form" action={this.props.action} method="post">
        <div className="inputLabel">
          <label>Nombre y apellidos</label>
          <input type="text" name="fullname" className="input"/>
        </div>
        <div className="inputLabel">
          <label>Email</label>
          <input type="email" name="email" className="input"/>
        </div>
        <div className="inputLabel">
          <label>Comentarios:</label>
          <textarea name="message" rows="5" className="input"></textarea>
        </div>
        <ul className="actions" style={buttonsStyle}>
            <li>
              <button type="submit"  className="button special">Enviar</button>
            </li>
        </ul>
      </form>
    );
  }
}
export default ContactForm