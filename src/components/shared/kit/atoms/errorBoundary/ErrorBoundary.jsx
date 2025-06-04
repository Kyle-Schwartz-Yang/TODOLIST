import { Component } from "react";
// import PropTypes from "prop-types";
// import ErrorMessage from '../ErrorMessage/ErrorMessage';

//* ErrorBoundary - (НОС) Компонент высшего порядка , прежназначен для обработки ошибки
export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    //Создаем состояние error и errorInfo для того чтобы записать сообщение из аргументов componentDidCatch(error, errorInfo)
    error: null,
    errorInfo: null,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    //Тут могут быть дополнительные действия
    this.setState({ hasError: true, error: error, errorInfo: errorInfo });
  }

  render() {
    if (this.state.error) {
      // Рендерим запасной UI в случае ошибки
      // return <ErrorMessage></ErrorMessage>
      return (
        <div>
          <h5>Что-то пошло не так.</h5>
          <p>Сработал ErrorBoundary.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

//!Здесь сказанно что у компонета обязательно должен быть потомок
// ErrorBoundary.propTypes = {
//   children: PropTypes.element.isRequired,
// };
