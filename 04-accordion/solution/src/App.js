import questions from './data';

import Question from './Question';

function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>

        <section className='info'>
          {questions.map(faq => 
            <Question key={faq.id} {...faq} />  
          )}
        </section>
      </div>      
    </main>
  );
}

export default App;
