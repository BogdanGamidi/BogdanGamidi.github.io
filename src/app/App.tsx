import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <strong>Цель:</strong> Получить хороший фундамент знаний для уверенной работы в разработке React приложений
          <br></br>
          <strong>Технологии:</strong> Владею технологиями Java/Spring<br></br>
          <strong>О себе:</strong> Меня зовут Богдан, мне 31 год и уже год, как я работаю в качестве fullstack
          разработчика (изначально готовился как Java-backend разработчик), но попав в команду, меня поставили перед
          фактом, что буду заниматься также frontend разработкой, собственно надеюсь, что данный курс поможет мне более
          уверенно чувствовать себя при разработке UI составляющей
        </p>
      </header>
    </div>
  );
}

export default App;
