import React from 'react'
import { ContMainPanel } from './StyledPanelChat/StyledPanelChat'
import PanelFriend from './PanelFriend/PanelFriend'
import PanelMessages from './PanelMessages/PanelMessages'

const PanelChat = () => {
  return (
    <ContMainPanel>        
        <PanelFriend/>
        <PanelMessages/>
    </ContMainPanel>
  )
}

export default PanelChat