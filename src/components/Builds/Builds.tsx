export {}
// _.isEmpty(builds) && (
//           <div>
//             <input onChange={handleChange} value={buildName ?? ''} />
//             <button onClick={handleCreateBuild} disabled={!buildName}>
//               Create
//             </button>
//           </div>
//         )}
//         {_.keys(builds).map((name) => {
//           return <button key={name}>{name}</button>
//         })


// const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     event.preventDefault()

//     setBuildName(event.currentTarget.value)
//   }

//   const handleCreateBuild = () => {
//     if (!buildName) return

//     heroBuilds.create(buildName)
//     setBuilds(heroBuilds.getAll())
//   }

