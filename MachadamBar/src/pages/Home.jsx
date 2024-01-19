import style from "./Home.module.css"

const Home = () => {
  return (
    <section className={style.section}>
      {/*eslint-disable-next-line react/no-unescaped-entities*/}
      <h1>Bem-vindo ao Orc'food!</h1>
    </section>
  )
}

export default Home