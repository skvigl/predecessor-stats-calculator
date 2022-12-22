import React from 'react'
import _ from 'lodash'

import { getImageSrc } from '../../utils'
import './Thumbnail.css'

interface ThumbnailProps {
  name: string
  forwardedRef?: React.Ref<HTMLDivElement>
  onClick?: (event: React.MouseEvent) => void
}

export const Thumbnail: React.FC<ThumbnailProps> = ({
  name,
  forwardedRef,
  onClick = _.identity,
}) => {
  return (
    <div
      ref={forwardedRef}
      className="thumbnail"
      onClick={onClick}
      data-id={name}
      role="button"
    >
      <img className="thumbnail-image" src={getImageSrc(name)} alt="" />
    </div>
  )
}

export default React.forwardRef<HTMLDivElement, ThumbnailProps>(
  (props, ref) => {
    return <Thumbnail {...props} forwardedRef={ref} />
  },
)
