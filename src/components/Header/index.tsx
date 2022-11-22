import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {

    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={ logo } alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/devsuperior.ig"> G.I Sistemas</a>
                </p>
            </div>
        </header>
    )
}
//chifit + alt + f organiza o codigo

export default Header
