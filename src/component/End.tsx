
import React, { useEffect, useState } from 'react';

interface Props {
    results: any;
    data: any;
    onReset: any;
  }

const End:React.FC<Props> = ({ results, data, onReset}) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result:any, index:number) => {
      if(result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);

  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3>Your results</h3>
          <p>ได้ {correctAnswers} จาก {data.length}</p>
          <button className="button is-success" onClick={onReset}>Try again</button>
        </div>
      </div>
    </div>
  );
}

export default End;