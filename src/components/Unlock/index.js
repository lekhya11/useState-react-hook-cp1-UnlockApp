import {useState} from 'react'

import {ParaValue} from './styledComponents'

const UnLock = () => {
  const [unlockObj, setUnlock] = useState(false)

  let image
  let heading
  let buttonText
  let altValue

  if (unlockObj) {
    image = 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    heading = 'Your Device is Unlocked'
    buttonText = 'Lock'
    altValue = 'unlock'
  } else {
    image = 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    heading = 'Your Device is Locked'
    buttonText = 'Unlock'
    altValue = 'lock'
  }

  const onClickButton = () => {
    setUnlock(prevStat => !prevStat)
  }

  return (
    <div>
      <img src={image} alt={altValue} />
      <ParaValue>{heading}</ParaValue>
      <button type="button" onClick={onClickButton}>
        {buttonText}
      </button>
    </div>
  )
}

export default UnLock
