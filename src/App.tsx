import style from './App.module.css'
import { Card } from './components/Card/Card'
import { Column } from './components/Column/Column'
import { participants } from './data/dummy_data'

function App() {
  return (
    <>
      <header className={style.header}>
        <h1 className={style.title}>Design weekly</h1>
        <h5 className={style.subtitle}>A board to keep track of design progress.</h5>
      </header>
      <div className={style.boardWrapper}>
      <main aria-label='board' className={style.board}>
        <Column title='Last week'>
          <Card title='Review scope' tags={['Due 4/11', 'Design']}>Review #390.</Card>
          <Card title='Team retro'></Card>
        </Column>
        <Column title='This week'>
          <Card title='Usability test' tags={['Research']} participants={participants}>Research questions with Carina.</Card>
        </Column>
        <Column title='Next week'>
          <Card title='Culture workshop' tags={['Due 24/11']} participants={[participants[0]]}>Let's build a great team.</Card>
        </Column>
      </main>
      </div>
    </>
  )
}

export default App
