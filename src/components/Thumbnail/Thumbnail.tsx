import _ from 'lodash'

import { getImageSrc } from '../../utils'
import './Thumbnail.css'

interface ThumbnailProps {
  name: string
  onClick?: (event: React.MouseEvent) => void
}

export const Thumbnail: React.FC<ThumbnailProps> = ({
  name,
  onClick = _.identity,
}) => {
  return (
    <div className="thumbnail" onClick={onClick} data-id={name} role="button">
      <img className="thumbnail-image" src={getImageSrc(name)} alt="" />
    </div>
  )
}
