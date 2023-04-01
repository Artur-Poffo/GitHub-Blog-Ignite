import { Outlet } from "react-router-dom"
import coverImage from "../../assets/cover.svg"
import { DefaultLayoutContainer } from "./styles"

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <img src={coverImage} alt="" />
      <Outlet />
    </DefaultLayoutContainer>
  )
}