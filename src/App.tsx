import * as C from './App.styles'
import logoImage from './assets/devmemory_logo.png'
import { InfoItem } from './components/InfoItem';

const App = () => {
  return(
    <C.Container>
      <C.Info>
        <C.LogoLink>
          <img src={logoImage} width="200" alt="Logo" />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label="Tempo" value="00:00" />
          <InfoItem label="Movimentos" value="0" />
        </C.InfoArea>

        <button>
          Reiniciar
        </button>

      </C.Info>

      <C.GridArea>
        ...
      </C.GridArea>
    </C.Container>
  );
}

export default App;