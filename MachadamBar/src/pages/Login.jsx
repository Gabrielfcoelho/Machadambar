import style from './Login.module.css'

const Login = () => {
  return (
    <body>
      <header>
        <h1>Faça seu login</h1>
      </header>
      <div className={style.login}>
        <section className={style.section}>
          <h2>Administrador</h2>
          <p><input type="email" name="email" id="email" placeholder="orcfood@email.com"/></p>
          <p><input type="password <inp" name="senha" id="senha" placeholder='**********'/></p>
          <input type="button" value="Entrar" />
        </section>
        <section className={style.section}>
          <h2>Cliente</h2>
          <p><input type="email" name="email" id="email" placeholder="orcfood@email.com"/></p>
          <p><input type="password <inp" name="senha" id="senha" placeholder='**********'/></p>
          <input type="button" value="Entrar" />       
        </section>
      </div>
      <footer>
        <p>&copy;Orc'food</p>
      </footer>
    </body>
  )
}

export default Login