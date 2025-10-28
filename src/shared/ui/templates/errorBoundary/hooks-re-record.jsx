
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { FixError } from "../fixError/FixError";

//* ErrorBoundary - (НОС) Компонент высшего порядка , прежназначен для обработки ошибки
//Предохранитель
export default function ErrorBoundary({ children }) {


  const [hasError, setError] = useState(false);

  useEffect(() => {

    const handleChange = () => {
      setError(true);
    }

    window.addEventListener('error', handleChange)

    return () => {
      window.removeEventListener('error', handleChange)
    }

  }, [])



  if (hasError) {
    return <FixError></FixError>
  }



  return children

}

//!Здесь сказанно что у компонета обязательно должен быть потомок 
ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
}
