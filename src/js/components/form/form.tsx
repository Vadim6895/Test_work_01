import React from 'react';

const EMAIL_REGEXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function Form() {
  const [activeForm, setActiveForm] = React.useState(false);
  const [validForm, setValidForm] = React.useState(true);

  const [login, setLogin] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const checkValidity = () => {
    let hasErrors = false;
    if (password.length < 8) {
      setPasswordError(true);
      hasErrors = true;
    } else {
      setPasswordError(false);
    }

    if (!EMAIL_REGEXP.test(email)) {
      setEmailError(true);
      hasErrors = true;
    } else {
      setEmailError(false);
    }

    if (!hasErrors) setValidForm(true);
    else setValidForm(false);
    return hasErrors;
  };

  const checkValidForm = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    evt.preventDefault();
    setActiveForm(true);
    if (!checkValidity()) {
      // eslint-disable-next-line no-alert
      alert(
        `Данные формы:
        Login: ${login}
        Email: ${email}
        Password: ${password}`,
      );
    }
  };

  React.useEffect(() => {
    if (activeForm) {
      checkValidity();
    }
  });
  // P.S. Здесь может показаться что хуку нужны зависимости
  // однако по правилам хуков тогда придётся и checkValidity в зависимости указать,
  // и обернуть в useCallBack, считаю что это уже будет преждевременная оптимизация.

  return (
    <section className="registration container">
      <h2 className="registration__title">Регистрация</h2>
      <form className="registration__form">
        <p className="registration__desc">
          Для того, чтобы просматривать профиль, необходимо зарегистрироваться!
        </p>

        <div className="registration__wrapper">
          <div>
            <div className="registration__block">
              <label className="registration__label" htmlFor="login">
                Логин
                <input
                  className="registration__input"
                  id="login"
                  type="text"
                  placeholder="Придумайте логин"
                  value={login}
                  onChange={(evt) => setLogin(evt.target.value)}
                />
              </label>
            </div>
            <div className="registration__block">
              <label className="registration__label" htmlFor="mail">
                Адрес электронной почты
                <input
                  className={`registration__input ${emailError && 'registration__input--error'}`}
                  id="mail"
                  type="text"
                  placeholder="Введите адрес электронной почты"
                  value={email}
                  onChange={(evt) => setEmail(evt.target.value)}
                />
              </label>
              <p className="registration__input-message">
                {emailError && 'Введите корректный @mail'}
              </p>
            </div>
            <div className="registration__block">
              <label className="registration__label" htmlFor="password">
                Пароль
                <input
                  className={`registration__input ${passwordError && 'registration__input--error'}`}
                  id="password"
                  type="text"
                  placeholder="Придумайте пароль"
                  value={password}
                  onChange={(evt) => setPassword(evt.target.value)}
                />
              </label>
              <p className="registration__input-message">
                {passwordError &&
                  'Длина пароля должна быть не менее 8 символов'}
              </p>
            </div>
          </div>
          <button
            className="registration__submit-btn"
            type="submit"
            disabled={!validForm}
            onClick={(evt) => checkValidForm(evt)}
          >
            Зарегистрироваться
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
