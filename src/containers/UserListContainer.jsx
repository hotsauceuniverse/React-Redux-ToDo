import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import UserList from "../components/UserList"
import { getUsersPromise, getUsersThunk } from "../redux/actions"




export default function UserListContainer() {
  const users = useSelector((state) => state.users.data)
  const dispatch = useDispatch()

  // const getUsers = useCallback(
  //   // 비동기 작업
  //   async () => {
  //   try{
  //     dispatch(getUsersStart())
  //     const res = await axios.get('https://api.github.com/users')
  //     dispatch(getUsersSuccess(res.data))
  //     } catch(error) {
  //       dispatch(getUsersFail(error))
  //     }
  //   },[dispatch])

  const getUsers = useCallback(() => {
    dispatch(getUsersPromise())
  },[dispatch])

  return <UserList users={users} getUsers={getUsers} />
}