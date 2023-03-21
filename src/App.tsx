import {ThemeProvider, useTheme} from "@rescui/ui-contexts";
import Button from "@rescui/button";
import {useTextStyles} from "@rescui/typography";

function App() {
  const textCn = useTextStyles()
  const theme = useTheme()
  return (
    <div style={{width: '240px', margin: '96px auto', border: '1px solid white', padding: '12px'}}>
      <p className={textCn("rs-text-2", {hardness: 'hard'})}>Theme: {theme}</p>
      <Button style={{marginTop: '24px'}}>Test</Button>
    </div>
  )
}

export default App
