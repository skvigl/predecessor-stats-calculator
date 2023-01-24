import { TParam } from '../../types'
import './Param.css'

interface ParamProps {
  param: TParam
}

export const Param: React.FC<ParamProps> = ({ param }) => {
  const [name, value] = param

  return (
    <div className='param'>
      <span className='param-value'>+{value}</span>
      <span>{name}</span>
    </div>
  )
}
