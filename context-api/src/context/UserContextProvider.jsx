import UserContext from './UserContext'

function UserContextProvider({children}) {
    let obj = {
    name : "srwfjf"
    }
  return (
    <UserContext.Provider value={obj}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
