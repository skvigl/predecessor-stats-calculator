import { IAbility } from '../../types'
import './Ability.css'

interface AbilityProps {
  ability: IAbility
}

export const Ability: React.FC<AbilityProps> = ({ ability }) => {
  const { name, description } = ability

  return (
    <div key={name} className='ability'>
      <span className='ability-name'>{name}: </span>
      <span className='ability-description'>{description}</span>
    </div>
  )
}
