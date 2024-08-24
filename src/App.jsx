import { useEffect, useState } from 'react'
import './App.module.css'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import Notification from './components/Notification/Notification'

const getInitialData = () => {
  const savedData = window.localStorage.getItem('my-data');
  return savedData !== null ? JSON.parse(savedData) : { good: 0, neutral: 0, bad: 0 };
}

export default function App() {
  const [data, setData] = useState(getInitialData)

  useEffect(()=> {
    window.localStorage.setItem('my-data', JSON.stringify(data));
  }, [data])

  const resetFeedback =() => {
    setData({good: 0, neutral: 0, bad: 0})
  }
  const updateFeedback = feedbackType => {
    setData({...data, [feedbackType]: data[feedbackType] + 1})
  }
  const totalFeedback = data.good + data.neutral + data.bad;
  const positivePercentage = totalFeedback > 0 ? Math.round((data.good / totalFeedback) * 100) : 0;
    


   return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} reset={resetFeedback} total={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback good={data.good} neutral={data.neutral} bad={data.bad} total={totalFeedback} percent={positivePercentage} />
      ) : (
        <Notification total={totalFeedback} />
      )}
    </>
  );
}