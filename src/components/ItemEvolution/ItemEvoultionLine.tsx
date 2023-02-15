import classNames from 'classnames'

interface ItemEvoultionLineProps {
  isOnlyChild?: boolean
}

export const ItemEvoultionLine: React.FC<ItemEvoultionLineProps> = ({ isOnlyChild = false }) => {
  return (
    <div className={classNames('item-evolution-line', isOnlyChild ? 'item-evolution-line--only-child' : '')}>
      &nbsp;
    </div>
  )
}
