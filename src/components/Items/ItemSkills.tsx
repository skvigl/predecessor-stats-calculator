import { getImageSrc } from '../../utils'

export const ItemSkills = ({ item }) => {
  return (
    <div className="item-details">
      {item && (
        <div key={item.name} className="card" data-id={item.name}>
          <div className="card-image-wrap">
            <img className="card-image" src={getImageSrc(item.name)} alt="" />
          </div>
          <h3 className="card-title">{item.name}</h3>

          {item.stats && (
            <div className="card-params">
              {Object.entries(item.stats).map(([key, value]) => {
                return (
                  <div key={key} className="param">
                    <span className="param-name">{`+${value}`}</span>
                    <span>{key}</span>
                  </div>
                )
              })}
            </div>
          )}

          <div className="card-cost">{item.cost}</div>

          <div className="card-skills">
            {item.skills?.map((skill) => {
              return (
                <div key={skill.name} className="skill">
                  <span className="skill-name">{skill.name}: </span>
                  <span className="skill-description">{skill.description}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
